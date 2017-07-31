import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { isEmpty } from 'lodash/fp';
import CriarSelecao from '~/containers/servidor/criar-selecao';
import EmptyContent from '~/components/empty-content';
import FlexElement from '~/components/flex-element';
import SelecoesList from '~/components/selecoes/selecoes-list';
import filterByName from '~/helpers/filter-by-name';
import * as selectors from '~/store/selectors';
import actions from '~/store/actions';
import styles from './selecoes.less';

class Selecoes extends PureComponent {
  static propTypes = {
    fetchProgramas: PropTypes.func.isRequired,
    fetchSelecoes: PropTypes.func.isRequired,
    programas: PropTypes.array.isRequired,
    selecoes: PropTypes.array.isRequired,
    showModal: PropTypes.func.isRequired,
  };

  state = { busca: '' };

  componentDidMount() {
    const { changeTab, fetchProgramas, fetchSelecoes, programas } = this.props;

    changeTab('item_2');
    if (isEmpty(programas)) {
      fetchProgramas();
      fetchSelecoes();
    }
  }

  handleBusca = ({ target: { value } }) => this.setState({ busca: value });

  render() {
    const { isServidor, programas, showModal } = this.props;
    const { busca } = this.state;

    const selecoes = filterByName(this.props.selecoes, busca);

    return (
      <div className={styles.container}>
        <FlexElement full justify="space-between" className={styles.topbar}>
          <Input.Search
            className={styles.busca}
            placeholder="Buscar seleção..."
            onChange={this.handleBusca}
          />
          {isServidor && (
            <Button type="primary" icon="plus" onClick={showModal} className={styles.button}>
              Criar uma seleção
            </Button>
          )}
        </FlexElement>
        {isEmpty(programas) ?
          <EmptyContent title="Nenhuma seleção encontrada" icon="calendar" /> :
          <SelecoesList programas={programas} selecoes={selecoes} />}
        <CriarSelecao />
      </div>
    );
  }
}

Selecoes.propTypes = {
  changeTab: PropTypes.func.isRequired,
  isServidor: PropTypes.bool.isRequired,
};

const mapStateToProps = () => {
  const isServidor = selectors.isTypeUser('servidor');
  const programas = isServidor ? selectors.getMeusProgramas() : selectors.getProgramas();
  // const selecoes = isServidor ? selectors.getMinhasSelecoes() : selectors.getSelecoes();
  const selecoes = selectors.getSelecoes();

  return ({ isServidor, programas, selecoes });
};


const mapDispatchToProps = dispatch => ({
  changeTab: key => dispatch(actions.selectTab([key])),
  showModal: () => dispatch(actions.showModalCriarSelecao()),
  fetchProgramas: () => dispatch(actions.programas.fetch.request()),
  fetchSelecoes: () => dispatch(actions.selecoes.fetch.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Selecoes);
