import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, notification } from 'antd';
import Divider from '~/components/divider';
import FlexElement from '~/components/flex-element';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import styles from './programa.less';

const Programa = ({ deletePrograma, editPrograma, isServidor, programa }) => (
  <div className="ant-collapse">
    <div className="ant-collapse-item">
      <div className="ant-collapse-header" style={{ paddingLeft: '10px' }}>
        <p>{programa.nome}</p>
      </div>
      <div className="ant-collapse-content">
        <div className="ant-collapse-content-box">
          <p>{programa.descricao}</p>
          {isServidor && (
            <FlexElement column>
              <Divider horizontal style={{ margin: '1em 0em' }} />
              <FlexElement className={styles.buttons}>
                <Button icon="edit" className={styles.button} onClick={() => editPrograma(programa._id)}>
                  Editar
                </Button>
                <Button icon="delete" className={styles.button} onClick={() => deletePrograma(programa._id)}>
                  Deletar
                </Button>
              </FlexElement>
            </FlexElement>
          )}
        </div>
      </div>
    </div>
  </div>
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
  deletePrograma: (_id) => {
    dispatch(actions.deletePrograma(_id));
    notification.success({
      message: 'Sucesso!',
      description: 'O programa foi removido com sucesso!',
      placement: 'bottomRight',
    });
  },
  editPrograma: (_id) => {
    dispatch(actions.selectPrograma(_id));
    dispatch(actions.showModalCriarPrograma());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Programa);
