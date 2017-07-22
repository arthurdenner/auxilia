import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as selectors from '~/store/selectors';
import actions from '~/store/actions';
import SelecoesAluno from './aluno/selecoes';
import SelecoesServidor from './servidor/selecoes';

class Selecoes extends PureComponent {
  componentDidMount() {
    this.props.changeTab('item_2');
  }

  render() {
    const { isServidor } = this.props;

    return (
      isServidor ? <SelecoesServidor /> : <SelecoesAluno />
    );
  }
}

Selecoes.propTypes = {
  changeTab: PropTypes.func.isRequired,
  isServidor: PropTypes.bool.isRequired,
};

const mapStateToProps = () => ({
  isServidor: selectors.isTypeUser('servidor'),
});

const mapDispatchToProps = dispatch => ({
  changeTab: key => dispatch(actions.selectTab([key])),
});

export default connect(mapStateToProps, mapDispatchToProps)(Selecoes);
