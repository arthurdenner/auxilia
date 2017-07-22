import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import styles from './modal.less';

const MyModal = (props) => {
  const { children, wrapClassName, ...others } = props;
  const className = cn(styles.modal, { [wrapClassName]: wrapClassName });

  return (
    <Modal {...others} wrapClassName={className}>
      {children}
    </Modal>
  );
};

MyModal.propTypes = {
  children: PropTypes.node.isRequired,
  wrapClassName: PropTypes.string,
};

MyModal.defaultProps = {
  wrapClassName: '',
};

export default MyModal;
