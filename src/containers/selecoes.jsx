import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '~/store/selectors';
import SelecoesAluno from './aluno/selecoes';
import SelecoesServidor from './servidor/selecoes';

const Selecoes = ({ isServidor }) => (
  isServidor ? <SelecoesServidor /> : <SelecoesAluno />
);

Selecoes.propTypes = {
  isServidor: PropTypes.bool.isRequired,
};

const mapStateToProps = () => ({
  isServidor: selectors.isTypeUser('servidor'),
});

export default connect(mapStateToProps)(Selecoes);
