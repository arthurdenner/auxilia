import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import CollapseOpen from '~/components/collapse-open';
import Divider from '~/components/divider';
import FlexElement from '~/components/flex-element';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import styles from './programa.less';

const Programa = ({ deletePrograma, editPrograma, isServidor, programa }) => (
  <CollapseOpen title={programa.titulo} wrapClass={styles.collapse}>
    <p><strong>Autor: </strong>{programa.criador}</p>
    <p><strong>Descrição: </strong>{programa.descricao}</p>
    {isServidor && (
      <FlexElement column>
        <Divider horizontal style={{ margin: '1em 0em' }} />
        <FlexElement className={styles.buttons}>
          <Button icon="edit" className={styles.button} onClick={() => editPrograma(programa.id_programa)}>
            Editar
          </Button>
          <Button icon="delete" className={styles.button} onClick={() => deletePrograma(programa.id_programa)}>
            Deletar
          </Button>
        </FlexElement>
      </FlexElement>
    )}
  </CollapseOpen>
);

Programa.propTypes = {
  deletePrograma: PropTypes.func.isRequired,
  editPrograma: PropTypes.func.isRequired,
  isServidor: PropTypes.bool.isRequired,
  programa: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({
  isServidor: selectors.isTypeUser('servidor'),
});

const mapDispatchToProps = dispatch => ({
  deletePrograma: id => dispatch(actions.programas.delete.request(id)),
  editPrograma: (id) => {
    dispatch(actions.programas.select(id));
    dispatch(actions.showModalCriarPrograma());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Programa);
