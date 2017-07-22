import React from 'react';
import PropTypes from 'prop-types';
import FlexElement from '~/components/flex-element';
import Programa from '~/components/programas/programa';

const ProgramasList = ({ programas }) => (
  <FlexElement full column>
    {programas.map(programa => (
      <Programa key={programa._id} programa={programa} />
    ))}
  </FlexElement>
);

ProgramasList.propTypes = {
  programas: PropTypes.array.isRequired,
};

export default ProgramasList;
