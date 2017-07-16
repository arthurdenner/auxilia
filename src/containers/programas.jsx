import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProgramasAluno from './aluno/programas';
import ProgramasServidor from './servidor/programas';
import * as selectors from '../store/selectors';

const Programas = ({ typeUser }) => (
  typeUser === 'aluno' ? <ProgramasAluno /> : <ProgramasServidor />
);

Programas.propTypes = {
  typeUser: PropTypes.string.isRequired,
};

const mapStateToProps = () => ({
  typeUser: selectors.getTypeUser(),
});

export default connect(mapStateToProps)(Programas);
