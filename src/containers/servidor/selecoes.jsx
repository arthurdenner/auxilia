import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { isEmpty } from 'lodash/fp';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
// import EmptyContent from '~/components/empty-content';
import SelecoesList from '~/components/selecoes';
import CriarSelecao from './criar-selecao';
import styles from './servidor.less';

const Selecoes = ({ selecoes, showModal }) => (
  <div className={styles.container}>
    <Button type="primary" icon="plus" onClick={showModal} className={styles.button}>
      Criar uma seleção
    </Button>
    {isEmpty(selecoes) ?
      <p>Você não tem nenhuma seleção</p> :
      <SelecoesList selecoes={selecoes} />}
    <CriarSelecao />
  </div>
);

Selecoes.propTypes = {
  selecoes: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
  selecoes: selectors.getMinhasSelecoes(),
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(actions.showModalCriarSelecao()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Selecoes);
