import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import styles from './programa.less';

const Panel = Collapse.Panel;

const Programa = ({ programa }) => (
  <Collapse bordered={false} className={styles.programa}>
    <Panel header={programa.nome}>
      <p>{programa.descricao}</p>
    </Panel>
  </Collapse>
);

Programa.propTypes = {
  programa: PropTypes.object.isRequired,
};

export default Programa;
