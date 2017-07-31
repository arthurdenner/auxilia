import React from 'react';
import PropTypes from 'prop-types';
import { filter, get } from 'lodash/fp';
import CollapseOpen from '~/components/collapse-open';
import FlexElement from '~/components/flex-element';
import Selecoes from '~/components/selecoes/selecoes';
import styles from './selecao.less';

const getSelecoes = (programa, selecoes) => {
  const getId = selecao => (get('idPrograma', selecao) === programa);

  return filter(getId, selecoes);
};

const SelecoesList = ({ programas, selecoes }) => (
  <FlexElement full column>
    {programas.map(programa =>
      <CollapseOpen
        key={programa.id_programa}
        wrapClass={styles.collapse}
        title={`Programa ${programa.titulo}`}
      >
        <Selecoes selecoes={getSelecoes(programa.id_programa, selecoes)} />
      </CollapseOpen>,
    )}
  </FlexElement>
);

SelecoesList.propTypes = {
  programas: PropTypes.array.isRequired,
  selecoes: PropTypes.array.isRequired,
};

export default SelecoesList;
