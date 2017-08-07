import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '~/helpers/format-date';
import notification from '~/helpers/notification';
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
  isAlunoInSelecao,
  isLoading,
  isLogged,
  isServidor,
  leaveSelecao,
  selecao,
  showLogin,
  usuario,
}) => (
  <CollapseOpen title={selecao.nome} wrapClass={styles.selecao}>
    <p><strong>Autor: </strong>{selecao.criador}</p>
    <p><strong>Número de vagas: </strong>{selecao.vagas}</p>
    <p><strong>Data de Início: </strong>{formatDate(selecao.inicio)}</p>
    <p><strong>Data Final: </strong>{formatDate(selecao.fim)}</p>
    <p><strong>Descrição: </strong>{selecao.descricao}</p>
    <p><strong>Participantes: </strong>{selecao.participantes.length}</p>
    <FlexElement column>
      <Divider horizontal style={{ margin: '1em 0em' }} />
      {isServidor ? (
        <FooterServidor
          isLoading={isLoading}
          deleteSelecao={deleteSelecao}
          editSelecao={editSelecao}
          selecao={selecao}
        />
      ) : (
        <FooterAluno
          isLoading={isLoading}
          enterSelecao={id => isLogged ? enterSelecao(id, usuario.idCriador) : showLogin()}
          leaveSelecao={id => leaveSelecao(id, usuario.idCriador)}
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
  isAlunoInSelecao: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isServidor: PropTypes.bool.isRequired,
  leaveSelecao: PropTypes.func.isRequired,
  selecao: PropTypes.object.isRequired,
  showLogin: PropTypes.func.isRequired,
  usuario: PropTypes.object.isRequired,
};

const mapStateToProps = (state, { selecao }) => ({
  isLoading: selectors.isLoadingBtnSelecao(selecao.idSelecao),
  isLogged: selectors.isLogged(),
  isServidor: selectors.isTypeUser('servidor'),
  isAlunoInSelecao: selectors.isInSelecao(selecao),
  usuario: selectors.getUser(),
});

const mapDispatchToProps = dispatch => ({
  deleteSelecao: id => dispatch(actions.selecoes.delete.request({
    data: id,
    onSuccess: () => notification('success', 'A seleção foi deletada!'),
    onError: () => notification('error', 'Houve um erro na requisição!'),
  })),
  editSelecao: (id) => {
    dispatch(actions.selecoes.select(id));
    dispatch(actions.showModalCriarSelecao());
  },
  enterSelecao: (idSelecao, idUsuario) =>
    dispatch(actions.selecoes.enter.request({
      data: { idSelecao, idUsuario },
      onSuccess: () => notification('success', 'Você entrou na seleção!'),
      onError: () => notification('error', 'Houve um erro na requisição!'),
    })),
  leaveSelecao: (idSelecao, idUsuario) =>
    dispatch(actions.selecoes.leave.request({
      data: { idSelecao, idUsuario },
      onSuccess: () => notification('success', 'Você saiu da seleção!'),
      onError: () => notification('error', 'Houve um erro na requisição!'),
    })),
  showLogin: () => dispatch(actions.showModalLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Selecao);
