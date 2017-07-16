import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import ProgramasList from '~/components/programas';
import CriarPrograma from './criar-programa';
import styles from './programas.less';

const Programas = ({ programas, showModal }) => (
  <div className={styles.container}>
    <Button type="primary" icon="plus" onClick={showModal} >
      Criar um programa
    </Button>
    <ProgramasList programas={programas} />
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
