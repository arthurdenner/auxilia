import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import FlexElement from './flex-element';
import styles from './conteudo-modal.less';

const ConteudoModal = ({ config }) => (
  <FlexElement full column style={config.style}>
    <FlexElement align="center" justify="space-between" className={styles.header}>
      <h3 className={styles.headerTitle}>{config.title}</h3>
      <Icon type="close" onClick={config.handleClose} className={styles.icon} />
    </FlexElement>
    <FlexElement full style={{ padding: '0.2em 1em' }}>
      {config.content}
    </FlexElement>
    {config.footer && (
      <FlexElement justify="flex-end" className={styles.footer}>
        {config.footer}
      </FlexElement>
    )}
  </FlexElement>
);

ConteudoModal.propTypes = {
  config: PropTypes.object.isRequired,
};

export default ConteudoModal;
