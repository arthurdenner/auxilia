import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import styles from './selecao.less';

const Panel = Collapse.Panel;

const Programa = ({ selecao }) => (
  <Collapse bordered={false} className={styles.selecao}>
    <Panel header={selecao.nome}>
      <p>{selecao.descricao}</p>
    </Panel>
  </Collapse>
);

Programa.propTypes = {
  selecao: PropTypes.object.isRequired,
};

export default Programa;
