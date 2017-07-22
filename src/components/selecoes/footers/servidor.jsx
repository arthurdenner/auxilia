import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import FlexElement from '~/components/flex-element';
import styles from './footers.less';

const FooterServidor = ({ deleteSelecao, editSelecao, selecao }) => (
  <FlexElement className={styles.buttons}>
    {/* <Button
      icon="calendar"
      type="primary"
      className={styles.button}
    >
      Ver seleção
    </Button>*/}
    <Button
      icon="edit"
      className={styles.button}
      onClick={() => editSelecao(selecao._id)}
    >
      Editar
    </Button>
    <Button
      icon="delete"
      className={styles.button}
      onClick={() => deleteSelecao(selecao._id)}
    >
      Deletar
    </Button>
  </FlexElement>
);

FooterServidor.propTypes = {
  deleteSelecao: PropTypes.func.isRequired,
  editSelecao: PropTypes.func.isRequired,
  selecao: PropTypes.object.isRequired,
};

export default FooterServidor;
