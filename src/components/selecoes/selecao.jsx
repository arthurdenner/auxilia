import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, notification } from 'antd';
import formatDate from '~/helpers/format-date';
import CollapseOpen from '~/components/collapse-open';
import Divider from '~/components/divider';
import FlexElement from '~/components/flex-element';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import styles from './selecao.less';

const Selecao = ({ deleteSelecao, editSelecao, isServidor, selecao }) => (
  <CollapseOpen title={selecao.nome} className={styles.collapse}>
    <p><strong>Número de vagas: </strong>{selecao.vagas}</p>
    <p><strong>Data de Início: </strong>{formatDate(selecao.dataInicio)}</p>
    <p><strong>Data Final: </strong>{formatDate(selecao.dataFinal)}</p>
    <p><strong>Descrição: </strong>{selecao.descricao}</p>
    {isServidor && (
      <FlexElement column>
        <Divider horizontal style={{ margin: '1em 0em' }} />
        <FlexElement className={styles.buttons}>
          <Button icon="calendar" type="primary" className={styles.button}>
            Ver seleção
          </Button>
          <Button icon="edit" className={styles.button} onClick={() => editSelecao(selecao._id)}>
            Editar
          </Button>
          <Button icon="delete" className={styles.button} onClick={() => deleteSelecao(selecao._id)}>
            Deletar
          </Button>
        </FlexElement>
      </FlexElement>
    )}
  </CollapseOpen>
);

Selecao.propTypes = {
  deleteSelecao: PropTypes.func.isRequired,
  editSelecao: PropTypes.func.isRequired,
  isServidor: PropTypes.bool.isRequired,
  selecao: PropTypes.object.isRequired,
};


const mapStateToProps = () => ({
  isServidor: selectors.isTypeUser('servidor'),
});

const mapDispatchToProps = dispatch => ({
  deleteSelecao: (_id) => {
    dispatch(actions.deleteSelecao(_id));
    notification.success({
      message: 'Sucesso!',
      description: 'A seleção foi removida com sucesso!',
      placement: 'bottomRight',
    });
  },
  editSelecao: (_id) => {
    dispatch(actions.selectSelecao(_id));
    dispatch(actions.showModalCriarSelecao());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Selecao);