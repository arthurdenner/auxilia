import React from 'react';
import PropTypes from 'prop-types';
import { filter, get } from 'lodash/fp';
import CollapseOpen from '~/components/collapse-open';
import FlexElement from '~/components/flex-element';
import Selecoes from '~/components/selecoes/selecoes';

const getSelecoes = (programa, selecoes) => {
  const getId = selecao => (get('programa._id', selecao) === programa);

  return filter(getId, selecoes);
};

const SelecoesGrid = ({ programas, selecoes }) => (
  <FlexElement full column>
    {programas.map(programa =>
      <CollapseOpen
        key={programa._id}
        style={{ marginTop: '1em' }}
        title={`Seleções para o programa ${programa.nome}`}
      >
        <Selecoes selecoes={getSelecoes(programa._id, selecoes)} />
      </CollapseOpen>,
    )}
  </FlexElement>
);

SelecoesGrid.propTypes = {
  programas: PropTypes.array.isRequired,
  selecoes: PropTypes.array.isRequired,
};

export default SelecoesGrid;
