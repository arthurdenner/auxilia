import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '~/store/selectors';
import SelecoesAluno from './aluno/selecoes';
import SelecoesServidor from './servidor/selecoes';

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
