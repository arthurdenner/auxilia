import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, Icon, Input, notification } from 'antd';
import FlexElement from '~/components/flex-element';
import Modal from '~/components/modal';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import { nomeRules, descricaoRules } from './rules';
import styles from './criar-programa.less';

class CriarPrograma extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
  };

  state = {
    modalKey: new Date().toJSON(),
  };

  handleClose = () => {
    this.props.dispatch(actions.hideModalCriarPrograma());
    this.setState({ modalKey: new Date().toJSON() });
  };

  handleSubmit = () => {
    const { dispatch, form } = this.props;
    const notify = () => notification.success({
      message: 'Sucesso!',
      description: 'O programa foi criado com sucesso!',
      placement: 'bottomRight',
    });

    form.validateFields((err, values) => {
      if (!err) {
        dispatch(actions.addPrograma(values));
        dispatch(actions.hideModalCriarPrograma());
        notify();
      }
    });
  }

  render() {
    const { form, isModalOpen } = this.props;
    const { modalKey } = this.state;

    return (
      <Modal
        key={modalKey}
        closable={false}
        footer={null}
        visible={isModalOpen}
        wrapClassName={styles.modal}
      >
        <FlexElement full column>
          <FlexElement align="center" justify="space-between" className={styles.header}>
            <h3 className={styles.headerTitle}>Criar Programa</h3>
            <Icon type="close" onClick={this.handleClose} className={styles.icon} />
          </FlexElement>
          <FlexElement full style={{ padding: '0.2em 1em' }}>
            <Form style={{ width: '100%' }}>
              <Form.Item hasFeedback label="Nome do programa">
                {form.getFieldDecorator('nome', nomeRules)(
                  <Input placeholder="Nome do programa" />,
                )}
              </Form.Item>
              <Form.Item hasFeedback label="Descrição do programa">
                {form.getFieldDecorator('descricao', descricaoRules)(
                  <Input.TextArea rows={5} placeholder="Descrição do programa" />,
                )}
              </Form.Item>
            </Form>
          </FlexElement>
          <FlexElement justify="flex-end" className={styles.footer}>
            <Button onClick={this.handleClose}>
              Cancelar
            </Button>
            <Button type="primary" icon="check" className={styles.button} onClick={this.handleSubmit}>
              Criar Programa
            </Button>
          </FlexElement>
        </FlexElement>
      </Modal>
    );
  }
}

const mapStateToProps = () => ({
  isModalOpen: selectors.isModalOpen('criarPrograma'),
});

export default Form.create()(connect(mapStateToProps)(CriarPrograma));
