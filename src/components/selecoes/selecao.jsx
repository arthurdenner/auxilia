import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { notification } from 'antd';
import formatDate from '~/helpers/format-date';
import CollapseOpen from '~/components/collapse-open';
import Divider from '~/components/divider';
import FlexElement from '~/components/flex-element';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import FooterAluno from './footers/aluno';
import FooterServidor from './footers/servidor';
import styles from './selecao.less';

const Selecao = ({
  deleteSelecao,
  editSelecao,
  enterSelecao,
  isAluno,
  isAlunoInSelecao,
  isServidor,
  leaveSelecao,
  selecao,
}) => (
  <CollapseOpen title={selecao.nome} wrapClass={styles.selecao}>
    <p><strong>Autor: </strong>{selecao.criador.nome}</p>
    <p><strong>Número de vagas: </strong>{selecao.vagas}</p>
    <p><strong>Data de Início: </strong>{formatDate(selecao.dataInicio)}</p>
    <p><strong>Data Final: </strong>{formatDate(selecao.dataFinal)}</p>
    <p><strong>Descrição: </strong>{selecao.descricao}</p>
    <p><strong>Participantes: </strong>{selecao.participantes.length}</p>
    <FlexElement column>
      <Divider horizontal style={{ margin: '1em 0em' }} />
      {isServidor && (
        <FooterServidor
          deleteSelecao={deleteSelecao}
          editSelecao={editSelecao}
          selecao={selecao}
        />
      )}
      {isAluno && (
        <FooterAluno
          enterSelecao={enterSelecao}
          leaveSelecao={leaveSelecao}
          selecao={selecao}
          isAlunoInSelecao={isAlunoInSelecao}
        />
      )}
    </FlexElement>
  </CollapseOpen>
);

Selecao.propTypes = {
  deleteSelecao: PropTypes.func.isRequired,
  editSelecao: PropTypes.func.isRequired,
  enterSelecao: PropTypes.func.isRequired,
  isAluno: PropTypes.bool.isRequired,
  isAlunoInSelecao: PropTypes.bool.isRequired,
  isServidor: PropTypes.bool.isRequired,
  leaveSelecao: PropTypes.func.isRequired,
  selecao: PropTypes.object.isRequired,
};

const mapStateToProps = (state, { selecao }) => ({
  isAluno: selectors.isTypeUser('aluno'),
  isServidor: selectors.isTypeUser('servidor'),
  isAlunoInSelecao: selectors.isInSelecao(selecao),
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
  enterSelecao: (_id) => {
    dispatch(actions.enterSelecao(_id));
    notification.success({
      message: 'Sucesso!',
      description: 'Você entrou na seleção!',
      placement: 'bottomRight',
    });
  },
  leaveSelecao: (_id) => {
    dispatch(actions.leaveSelecao(_id));
    notification.success({
      message: 'Sucesso!',
      description: 'Você saiu da seleção!',
      placement: 'bottomRight',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Selecao);
