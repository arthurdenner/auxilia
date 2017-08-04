import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'antd';
import ConteudoModal from '~/components/conteudo-modal';
import Modal from '~/components/modal';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import FormLogin from './form';
import styles from './login.less';

class Login extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
  };

  state = {
    modalKey: new Date().toJSON(),
  };

  handleClose = () => {
    this.props.dispatch(actions.hideModalLogin());
    this.setState({ modalKey: new Date().toJSON() });
  };

  handleSubmit = () => {
    const { dispatch, form: { validateFields } } = this.props;

    validateFields((err, values) => {
      if (!err) {
        dispatch(actions.login(values));
        this.handleClose();
      }
    });
  }

  render() {
    const { form: { getFieldDecorator }, isModalOpen } = this.props;
    const { modalKey } = this.state;

    const config = {
      title: 'Entrar no sistema',
      handleClose: this.handleClose,
      content: (
        <FormLogin getFieldDecorator={getFieldDecorator} />
      ),
      footer: (
        <div className={styles.footer}>
          <Button onClick={this.handleClose}>
            Cancelar
          </Button>
          <Button
            type="primary" icon="login"
            className={styles.button}
            onClick={this.handleSubmit}
          >
            Entrar
          </Button>
        </div>
      ),
    };

    return (
      <Modal
        key={modalKey}
        closable={false}
        footer={null}
        visible={isModalOpen}
        wrapClassName={styles.modal}
      >
        <ConteudoModal config={config} />
      </Modal>
    );
  }
}

const mapStateToProps = () => ({
  isModalOpen: selectors.isModalOpen('login'),
});


export default Form.create()(connect(mapStateToProps)(Login));
