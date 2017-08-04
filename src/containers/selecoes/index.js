import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import FlexElement from '~/components/flex-element';
import Selecoes from './selecoes';
// import Selecao from './selecao';
import styles from './selecoes.less';

const SelecoesContainer = ({ match }) => (
  <FlexElement full column style={styles.wrapper}>
    <Route exact path={`${match.url}`} component={Selecoes} />
    {/* <Route path={`${match.url}/:idSelecao`} component={Selecao} />*/}
  </FlexElement>
);

SelecoesContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SelecoesContainer;
