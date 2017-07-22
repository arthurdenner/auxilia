import React from 'react';
import PropTypes from 'prop-types';

const CollapseOpen = ({ children, style, title }) => (
  <div className="ant-collapse" style={style}>
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
  style: PropTypes.object,
  title: PropTypes.string.isRequired,
};

CollapseOpen.defaultProps = {
  style: {},
};

export default CollapseOpen;
