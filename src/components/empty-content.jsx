import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import FlexElement from './flex-element';

const styles = {
  container: {
    alignContent: 'center',
    // height: '100%',
    // width: '100%',
    // position: 'absolute',
  },
  icon: {
    fontSize: '3em',
    marginBottom: '0.2em',
  },
};

const EmptyContent = ({ children, title, subtitle, icon }) => (
  <FlexElement full column align="center" justify="center" style={styles.container}>
    <FlexElement column align="center" justify="center" as="h2">
      {icon && <Icon type={icon} style={styles.icon} />}
      {title && <div>{title}</div>}
      {subtitle && <div>{subtitle}</div>}
    </FlexElement>
    {children}
  </FlexElement>
);

EmptyContent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
};

EmptyContent.defaultProps = {
  children: null,
  title: 'Sem conteúdo',
  subtitle: null,
  icon: 'frown',
};

export default EmptyContent;
