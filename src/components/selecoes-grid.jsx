import React from 'react';
import PropTypes from 'prop-types';
import { filter, get } from 'lodash/fp';
import { Collapse } from 'antd';
import FlexElement from '~/components/flex-element';
import Selecoes from '~/components/selecoes';
import styles from './selecoes-grid.less';

const Panel = Collapse.Panel;

const getSelecoes = (programa, selecoes) => {
  const getId = selecao => (get('programa._id', selecao) === programa);

  return filter(getId, selecoes);
};

const SelecoesGrid = ({ programas, selecoes }) => (
  <FlexElement full column>
    {programas.map(programa =>
      <Collapse key={programa._id} bordered={false} className={styles.programa}>
        <Panel header={programa.nome}>
          <Selecoes selecoes={getSelecoes(programa._id, selecoes)} />
        </Panel>
      </Collapse>,
    )}
  </FlexElement>
);

SelecoesGrid.propTypes = {
  programas: PropTypes.array.isRequired,
  selecoes: PropTypes.array.isRequired,
};

export default SelecoesGrid;
