import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash/fp';
import FlexElement from '~/components/flex-element';
import Selecao from '~/components/selecao';

const Selecoes = ({ selecoes }) => (
  <FlexElement full column>
    {isEmpty(selecoes) ?
      <span>Este programa não tem nenhuma seleção.</span> :
      selecoes.map(selecao => (
        <Selecao key={selecao._id} selecao={selecao} />
      ))}
  </FlexElement>
);

Selecoes.propTypes = {
  selecoes: PropTypes.array.isRequired,
};

export default Selecoes;
