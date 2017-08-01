import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import FlexElement from '~/components/flex-element';
import styles from './footers.less';

const FooterAluno = ({ enterSelecao, leaveSelecao, isAlunoInSelecao, isLoading, selecao }) => (
  <FlexElement className={styles.buttons}>
    {isAlunoInSelecao ? (
      <Button
        icon="calendar"
        className={styles.button}
        loading={isLoading}
        onClick={() => leaveSelecao(selecao.idSelecao)}
      >
        Sair da seleção
      </Button>
    ) : (
      <Button
        icon="calendar"
        type="primary"
        className={styles.button}
        loading={isLoading}
        onClick={() => enterSelecao(selecao.idSelecao)}
      >
        Entrar na seleção
      </Button>
    )}
  </FlexElement>
);

FooterAluno.propTypes = {
  enterSelecao: PropTypes.func.isRequired,
  isAlunoInSelecao: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  leaveSelecao: PropTypes.func.isRequired,
  selecao: PropTypes.object.isRequired,
};

export default FooterAluno;
