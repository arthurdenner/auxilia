import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { isEmpty } from 'lodash/fp';
import CriarPrograma from '~/containers/servidor/criar-programa';
import EmptyContent from '~/components/empty-content';
import FlexElement from '~/components/flex-element';
import ProgramasList from '~/components/programas/programas-list';
import filterByName from '~/helpers/filter-by-name';
import notification from '~/helpers/notification';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import styles from './main.less';

class Programas extends PureComponent {
  static propTypes = {
    changeTab: PropTypes.func.isRequired,
    fetchProgramas: PropTypes.func.isRequired,
    isServidor: PropTypes.bool.isRequired,
    programas: PropTypes.array.isRequired,
    showModal: PropTypes.func.isRequired,
  };

  state = { busca: '' };

  componentDidMount() {
    this.props.changeTab('item_1');
    this.props.fetchProgramas({
      onError: () => {
        notification('error', 'Houve um erro na requisição!');
      },
    });
  }

  handleBusca = ({ target: { value } }) => this.setState({ busca: value });

  render() {
    const { isServidor, showModal } = this.props;
    const { busca } = this.state;

    const programas = filterByName(this.props.programas, busca);

    return (
      <div className={styles.container}>
        <FlexElement full justify="space-between" className={styles.topbar}>
          <Input.Search
            placeholder="Buscar programa..."
            onChange={this.handleBusca}
          />
          {isServidor && (
            <Button
              type="primary"
              icon="plus"
              onClick={showModal}
              className={styles.button}
            >
              Criar um programa
            </Button>
          )}
        </FlexElement>
        {isEmpty(programas) ?
          <EmptyContent title="Nenhum programa encontrado" icon="appstore-o" /> :
          <ProgramasList programas={programas} />}
        <CriarPrograma />
      </div>
    );
  }
}

const mapStateToProps = () => {
  const isServidor = selectors.isTypeUser('servidor');
  const programas = isServidor ? selectors.getMeusProgramas() : selectors.getProgramas();

  return ({ isServidor, programas });
};

const mapDispatchToProps = dispatch => ({
  changeTab: key => dispatch(actions.selectTab([key])),
  showModal: () => dispatch(actions.showModalCriarPrograma()),
  fetchProgramas: () => dispatch(actions.programas.fetch.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Programas);
