import React from 'react';
import PropTypes from 'prop-types';
import FlexElement from '~/components/flex-element';

const Divider = ({ horizontal, text, style }) => {
  const textStyle = { padding: '1em' };
  const lineStyle = {
    background: 'rgba(128, 128, 128, 0.25)',
    ...(horizontal ? { height: 1 } : { width: 1 }),
  };

  return (
    <FlexElement
      column={!horizontal}
      align="center"
      justify="center"
      style={style}
    >
      <FlexElement full style={lineStyle} />
      {text && <FlexElement style={textStyle}>{text}</FlexElement>}
      <FlexElement full style={lineStyle} />
    </FlexElement>
  );
};

Divider.propTypes = {
  horizontal: PropTypes.bool,
  style: PropTypes.object,
  text: PropTypes.string,
};

Divider.defaultProps = {
  horizontal: false,
  style: {},
  text: '',
};

export default Divider;
