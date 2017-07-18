import React from 'react';
import PropTypes from 'prop-types';
import { filter, get } from 'lodash/fp';
import FlexElement from '~/components/flex-element';
import Selecoes from '~/components/selecoes';

const getSelecoes = (programa, selecoes) => {
  const getId = selecao => (get('programa._id', selecao) === programa);

  return filter(getId, selecoes);
};

const SelecoesGrid = ({ programas, selecoes }) => (
  <FlexElement full column>
    {programas.map(programa =>
      <div className="ant-collapse" style={{ marginTop: '1em' }} key={programa._id}>
        <div className="ant-collapse-item">
          <div className="ant-collapse-header" style={{ paddingLeft: '10px' }}>
            <p>{`Seleções para o programa ${programa.nome}`}</p>
          </div>
          <div className="ant-collapse-content">
            <div className="ant-collapse-content-box">
              <Selecoes selecoes={getSelecoes(programa._id, selecoes)} />
            </div>
          </div>
        </div>
      </div>,
    )}
  </FlexElement>
);

SelecoesGrid.propTypes = {
  programas: PropTypes.array.isRequired,
  selecoes: PropTypes.array.isRequired,
};

export default SelecoesGrid;
