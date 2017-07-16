import React, { PureComponent } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import cnames from '~/helpers/cnames';
import styles from './flex-element.less';

const alignOptions = [
  'baseline', 'center', 'flex-end', 'flex-start',
  'inherit', 'initial', 'stretch',
];

const justifyOptions = [
  'center', 'flex-end', 'flex-start',
  'inherit', 'initial', 'space-around', 'space-between',
];

const blacklist = [
  'full', 'column', 'row', 'wrap', 'align', 'justify',
];

class FlexElement extends PureComponent {
  static propTypes = {
    align: PropTypes.oneOf(alignOptions),
    // as: PropTypes.any,
    // children: PropTypes.node,
    className: PropTypes.string,
    column: PropTypes.bool,
    disabled: PropTypes.bool,
    full: PropTypes.bool,
    // innerRef: PropTypes.func,
    justify: PropTypes.oneOf(justifyOptions),
    // onClick: PropTypes.func,
    // style: PropTypes.object,
    wrap: PropTypes.bool,
  };

  static defaultProps = {
    align: 'initial',
    as: 'div',
    children: null,
    className: '',
    column: false,
    disabled: false,
    full: false,
    innerRef: () => 0,
    justify: 'initial',
    onClick: () => 0,
    style: {},
    wrap: false,
  };

  getClassName() {
    const classes = {
      flex: true,
      column: this.props.column,
      disabled: this.props.disabled,
      full: this.props.full,
      row: !this.props.column,
      wrap: this.props.wrap,
      [`align-${this.props.align}`]: !!this.props.align,
      [`justify-${this.props.justify}`]: !!this.props.justify,
    };

    return cn(
      { [this.props.className]: this.props.className },
      cnames(styles, classes),
    );
  }

  render() {
    const props = omit(this.props, blacklist);
    const { as, children, innerRef, ...others } = props;

    return React.createElement(as, {
      ...others,
      ref: innerRef,
      className: this.getClassName(),
    }, children);
  }
}

export default FlexElement;
