import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import FlexElement from '~/components/flex-element';
import styles from './footers.less';

const FooterServidor = ({ deleteSelecao, editSelecao, selecao }) => (
  <FlexElement className={styles.buttons}>
    <NavLink to={`/selecoes/${selecao._id}`}>
      <Button
        icon="calendar"
        type="primary"
        className={styles.button}
      >
        Ver seleção
      </Button>
    </NavLink>
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
