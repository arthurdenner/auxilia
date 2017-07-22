import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const CollapseOpen = ({ children, title, wrapClass }) => (
  <div className={cn('ant-collapse', wrapClass)}>
    <div className="ant-collapse-item">
      <div className="ant-collapse-header" style={{ paddingLeft: '10px' }}>
        <p>{title}</p>
      </div>
      <div className="ant-collapse-content">
        <div className="ant-collapse-content-box">
          {children}
        </div>
      </div>
    </div>
  </div>
);

CollapseOpen.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  wrapClass: PropTypes.string,
};

CollapseOpen.defaultProps = {
  wrapClass: '',
};

export default CollapseOpen;
