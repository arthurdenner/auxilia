import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { isEmpty } from 'lodash/fp';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
// import EmptyContent from '~/components/empty-content';
import SelecoesGrid from '~/components/selecoes-grid';
import CriarSelecao from './criar-selecao';
import styles from './servidor.less';

const Selecoes = ({ programas, selecoes, showModal }) => (
  <div className={styles.container}>
    <Button type="primary" icon="plus" onClick={showModal} className={styles.button}>
      Criar uma seleção
    </Button>
    {isEmpty(programas) ?
      <p>Você não tem nenhum programa, logo, nenhuma seleção</p> :
      <SelecoesGrid programas={programas} selecoes={selecoes} />}
    <CriarSelecao />
  </div>
);

Selecoes.propTypes = {
  programas: PropTypes.array.isRequired,
  selecoes: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
  programas: selectors.getMeusProgramas(),
  selecoes: selectors.getMinhasSelecoes(),
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(actions.showModalCriarSelecao()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Selecoes);
