import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Collapse } from 'antd';
import Divider from '~/components/divider';
import FlexElement from '~/components/flex-element';
import * as selectors from '~/store/selectors';
import styles from './programa.less';

const Panel = Collapse.Panel;

const Programa = ({ programa, isServidor }) => (
  <Collapse className={styles.programa}>
    <Panel header={programa.nome}>
      <p>{programa.descricao}</p>
      {isServidor && (
        <FlexElement column>
          <Divider horizontal style={{ margin: '1em 0em' }} />
          <FlexElement className={styles.botoes}>
            <Button icon="edit" className={styles.button}>
              Editar
            </Button>
            <Button icon="delete" className={styles.button}>
              Deletar
            </Button>
          </FlexElement>
        </FlexElement>
      )}
    </Panel>
  </Collapse>
);

Programa.propTypes = {
  programa: PropTypes.object.isRequired,
  isServidor: PropTypes.bool.isRequired,
};

const mapStateToProps = () => ({
  isServidor: selectors.isTypeUser('servidor'),
});

export default connect(mapStateToProps)(Programa);
