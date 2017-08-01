import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'antd';
import ConteudoModal from '~/components/conteudo-modal';
import Modal from '~/components/modal';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import FormCadastro from './form';
import styles from './cadastro.less';

class Cadastro extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
  };

  state = {
    modalKey: new Date().toJSON(),
  };

  handleClose = () => {
    this.props.dispatch(actions.hideModalCadastro());
    this.setState({ modalKey: new Date().toJSON() });
  };

  handleSubmit = () => {
    // const { /* dispatch,*/ form: { validateFields } } = this.props;

    // validateFields((err, values) => {
      // if (!err) {
        // console.log(values);
        // dispatch(actions.cadastro(values));
        // this.handleClose();
      // }
    // });
  }

  render() {
    const { form, isModalOpen } = this.props;
    const { modalKey } = this.state;

    const config = {
      title: 'Cadastrar-se',
      handleClose: this.handleClose,
      content: (
        <FormCadastro form={form} />
      ),
      footer: (
        <div>
          <Button onClick={this.handleClose}>
            Cancelar
          </Button>
          <Button type="primary" icon="solution" className={styles.button} onClick={this.handleSubmit}>
            Cadastrar-se
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
  isModalOpen: selectors.isModalOpen('cadastro'),
});


export default Form.create()(connect(mapStateToProps)(Cadastro));
