import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

class EditableCell extends PureComponent {
  static propTypes = {
    editable: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    status: PropTypes.string,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    status: '',
  };

  state = {
    value: this.props.value,
    editable: this.props.editable || false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.editable !== this.state.editable) {
      this.setState({ editable: nextProps.editable });
      if (nextProps.editable) {
        this.cacheValue = this.state.value;
      }
    }

    if (nextProps.status && nextProps.status !== this.props.status) {
      if (nextProps.status === 'save') {
        this.props.onChange(this.state.value);
      } else if (nextProps.status === 'cancel') {
        this.setState({ value: this.cacheValue });
        this.props.onChange(this.cacheValue);
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.editable !== this.state.editable || nextState.value !== this.state.value;
  }

  handleChange = ({ target: { value } }) => this.setState({ value });

  render() {
    const { value, editable } = this.state;
    return (
      <div>
        {editable ?
          <Input value={value} onChange={e => this.handleChange(e)} /> :
          <span>{value.toString() || ' '}</span>}
      </div>
    );
  }
}

export default EditableCell;
