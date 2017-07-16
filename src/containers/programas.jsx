import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '~/store/selectors';
import ProgramasAluno from './aluno/programas';
import ProgramasServidor from './servidor/programas';

const Programas = ({ isServidor }) => (
  isServidor ? <ProgramasServidor /> : <ProgramasAluno />
);

Programas.propTypes = {
  isServidor: PropTypes.bool.isRequired,
};

const mapStateToProps = () => ({
  isServidor: selectors.isTypeUser('servidor'),
});

export default connect(mapStateToProps)(Programas);
