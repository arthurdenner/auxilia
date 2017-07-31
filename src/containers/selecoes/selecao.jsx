import React from 'react';
import { Icon } from 'antd';
import FlexElement from '~/components/flex-element';

const styles = {
  container: {
    alignContent: 'center',
    // height: '100%',
    // width: '100%',
    // position: 'absolute',
  },
  icon: {
    fontSize: '3em',
    marginBottom: '0.2em',
  },
};

const NotFound = ({ match: { params: { idSelecao } } }) => (
  <FlexElement full column align="center" justify="center" style={styles.container}>
    <FlexElement column align="center" justify="center" as="h2">
      <Icon type="frown" style={styles.icon} />
      <div>{idSelecao}</div>
    </FlexElement>
  </FlexElement>
);

export default NotFound;
