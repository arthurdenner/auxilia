import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import formatDate from '~/helpers/format-date';
import styles from './selecao.less';

const Panel = Collapse.Panel;

const Selecao = ({ selecao }) => (
  <Collapse className={styles.selecao}>
    <Panel header={selecao.nome}>
      <p><strong>Número de vagas: </strong>{selecao.vagas}</p>
      <p><strong>Data de Início: </strong>{formatDate(selecao.dataInicio)}</p>
      <p><strong>Data Final: </strong>{formatDate(selecao.dataFinal)}</p>
      <p><strong>Descrição: </strong>{selecao.descricao}</p>
    </Panel>
  </Collapse>
);

Selecao.propTypes = {
  selecao: PropTypes.object.isRequired,
};

export default Selecao;
