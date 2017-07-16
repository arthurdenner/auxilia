import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import FlexElement from './flex-element';
import styles from './conteudo-modal.less';

const VisualizarProjeto = ({ config }) => (
  <FlexElement full column style={config.style}>
    <FlexElement align="center" justify="space-between" className={styles.header}>
      <h3 className={styles.headerTitle}>{config.title}</h3>
      <Icon type="close" onClick={config.handleClose} className={styles.icon} />
    </FlexElement>
    <FlexElement full style={{ padding: '1em' }}>
      {config.content}
    </FlexElement>
    {config.footer && (
      <FlexElement justify="flex-end" className={styles.footer}>
        {config.footer}
      </FlexElement>
    )}
  </FlexElement>
);

VisualizarProjeto.propTypes = {
  config: PropTypes.object.isRequired,
};

export default VisualizarProjeto;
