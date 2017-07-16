import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlexElement from '~/components/flex-element';
import Programa from '~/components/programa';
import * as selectors from '~/store/selectors';
import styles from './programas.less';

const Programas = ({ programas }) => (
  <FlexElement full column className={styles.container}>
    {programas.map(programa => (
      <Programa key={programa._id} programa={programa} />
    ))}
  </FlexElement>
);

Programas.propTypes = {
  programas: PropTypes.array.isRequired,
};

const mapStateToProps = () => ({
  programas: selectors.getMeusProgramas(),
});

export default connect(mapStateToProps)(Programas);
