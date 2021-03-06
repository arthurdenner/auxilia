import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash/fp';
import FlexElement from '~/components/flex-element';
import Selecao from '~/components/selecoes/selecao';

const Selecoes = ({ selecoes }) => (
  <FlexElement full column>
    {isEmpty(selecoes) ?
      <span>Nenhuma seleção encontrada para este programa.</span> :
      selecoes.map(selecao => (
        <Selecao key={selecao.idSelecao} selecao={selecao} />
      ))}
  </FlexElement>
);

Selecoes.propTypes = {
  selecoes: PropTypes.array.isRequired,
};

export default Selecoes;
