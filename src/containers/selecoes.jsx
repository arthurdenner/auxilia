import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelecoesAluno from './aluno/selecoes';
import SelecoesServidor from './servidor/selecoes';
import * as selectors from '../store/selectors';

const Selecoes = ({ typeUser }) => (
  typeUser === 'aluno' ? <SelecoesAluno /> : <SelecoesServidor />
);

Selecoes.propTypes = {
  typeUser: PropTypes.string.isRequired,
};

const mapStateToProps = () => ({
  typeUser: selectors.getTypeUser(),
});

export default connect(mapStateToProps)(Selecoes);
