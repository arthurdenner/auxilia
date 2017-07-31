import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import FlexElement from '~/components/flex-element';
import styles from './footers.less';

const FooterAluno = ({ enterSelecao, leaveSelecao, isAlunoInSelecao, selecao }) => (
  <FlexElement className={styles.buttons}>
    {isAlunoInSelecao ? (
      <Button
        icon="calendar"
        className={styles.button}
        onClick={() => leaveSelecao(selecao.idSelecao)}
      >
        Sair da seleção
      </Button>
    ) : (
      <Button
        icon="calendar"
        type="primary"
        className={styles.button}
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
  leaveSelecao: PropTypes.func.isRequired,
  selecao: PropTypes.object.isRequired,
};

export default FooterAluno;
