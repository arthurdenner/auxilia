import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
// import { isEmpty } from 'lodash/fp';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import formatData from '~/helpers/format-programa';
import Tabela from '~/containers/tabela';
// import EmptyContent from '~/components/empty-content';
// import ProgramasList from '~/components/programas';
import CriarPrograma from './criar-programa';
import styles from './servidor.less';

const Programas = ({ programas, showModal }) => (
  <div className={styles.container}>
    <Button type="primary" icon="plus" onClick={showModal} className={styles.button}>
      Criar um programa
    </Button>
    <Tabela data={formatData(programas)} />
    {/* isEmpty(programas) ?
      <p>Você não tem nenhum programa</p> :
      <ProgramasList programas={programas} />*/}
    <CriarPrograma />
  </div>
);

Programas.propTypes = {
  programas: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
  programas: selectors.getMeusProgramas(),
});

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(actions.showModalCriarPrograma()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Programas);
