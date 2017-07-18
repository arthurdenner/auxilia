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
import SelecoesGrid from '~/components/selecoes-grid';
import CriarSelecao from './criar-selecao';
import styles from './servidor.less';

class Selecoes extends PureComponent {
  static propTypes = {
    programas: PropTypes.array.isRequired,
    selecoes: PropTypes.array.isRequired,
    showModal: PropTypes.func.isRequired,
  };

  state = { busca: '' };

  handleBusca = ({ target: { value } }) => this.setState({ busca: value });

  render() {
    const { programas, showModal } = this.props;
    const { busca } = this.state;

    const selecoes = filterByName(this.props.selecoes, busca);

    return (
      <div className={styles.container}>
        <FlexElement full justify="space-between">
          <Button type="primary" icon="plus" onClick={showModal} className={styles.button}>
            Criar uma seleção
          </Button>
          <Input.Search
            className={styles.busca}
            placeholder="Buscar seleção..."
            onChange={this.handleBusca}
          />
        </FlexElement>
        {isEmpty(programas) ?
          <EmptyContent title="Você não tem nenhum programa, logo, nenhuma seleção" icon="calendar" /> :
          <SelecoesGrid programas={programas} selecoes={selecoes} />}
        <CriarSelecao />
      </div>
    );
  }
}

const mapStateToProps = () => ({
  programas: selectors.getMeusProgramas(),
  selecoes: selectors.getMinhasSelecoes(),
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(actions.showModalCriarSelecao()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Selecoes);
