import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { isEmpty } from 'lodash/fp';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import filterByName from '~/helpers/filter-by-name';
import EmptyContent from '~/components/empty-content';
import FlexElement from '~/components/flex-element';
import ProgramasList from '~/components/programas';
import CriarPrograma from './criar-programa';
import styles from './servidor.less';

class Programas extends PureComponent {
  static propTypes = {
    programas: PropTypes.array.isRequired,
    showModal: PropTypes.func.isRequired,
  };

  state = { busca: '' };

  handleBusca = ({ target: { value } }) => this.setState({ busca: value });

  render() {
    const { showModal } = this.props;
    const { busca } = this.state;

    const programas = filterByName(this.props.programas, busca);

    return (
      <div className={styles.container}>
        <FlexElement full justify="space-between">
          <Button type="primary" icon="plus" onClick={showModal} className={styles.button}>
            Criar um programa
          </Button>
          <Input.Search
            className={styles.busca}
            placeholder="Buscar programa..."
            onChange={this.handleBusca}
          />
        </FlexElement>
        {isEmpty(programas) ?
          <EmptyContent title="Você não tem nenhum programa" icon="appstore-o" /> :
          <ProgramasList programas={programas} />}
        <CriarPrograma />
      </div>
    );
  }
}

const mapStateToProps = () => ({
  programas: selectors.getMeusProgramas(),
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(actions.showModalCriarPrograma()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Programas);
