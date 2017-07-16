import React from 'react';
import PropTypes from 'prop-types';
import FlexElement from '~/components/flex-element';
import Programa from '~/components/programa';

const Programas = ({ programas }) => (
  <FlexElement full column>
    {programas.map(programa => (
      <Programa key={programa._id} programa={programa} />
    ))}
  </FlexElement>
);

Programas.propTypes = {
  programas: PropTypes.array.isRequired,
};

export default Programas;
