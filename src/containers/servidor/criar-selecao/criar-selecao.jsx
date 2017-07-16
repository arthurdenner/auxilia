import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, Icon, Input, notification } from 'antd';
import FlexElement from '~/components/flex-element';
import Modal from '~/components/modal';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import { nomeRules, descricaoRules } from './rules';
import styles from './criar-selecao.less';

class CriarPrograma extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
  };

  handleClose = () => this.props.dispatch(actions.hideModalCriarSelecao());

  handleSubmit = () => {
    const { dispatch, form } = this.props;
    const notify = () => notification.success({
      message: 'Sucesso!',
      description: 'O programa foi criado com sucesso!',
      placement: 'bottomRight',
    });

    form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        // dispatch(actions.addPrograma(values));
        // dispatch(actions.hideModalCriarPrograma());
        // notify();
      }
    });
  }

  render() {
    const { form, isModalOpen } = this.props;

    return (
      <Modal closable={false} footer={null} visible={isModalOpen} wrapClassName={styles.modal}>
        <FlexElement full column>
          <FlexElement align="center" justify="space-between" className={styles.header}>
            <h3 className={styles.headerTitle}>Criar Seleção</h3>
            <Icon type="close" onClick={this.handleClose} className={styles.icon} />
          </FlexElement>
          <FlexElement full style={{ padding: '0.2em 1em' }}>
            <Form style={{ width: '100%' }}>
              <Form.Item hasFeedback label="Nome da seleção">
                {form.getFieldDecorator('nome', nomeRules)(
                  <Input placeholder="Nome da seleção" />,
                )}
              </Form.Item>
              <Form.Item hasFeedback label="Descrição da seleção">
                {form.getFieldDecorator('descricao', descricaoRules)(
                  <Input.TextArea rows={5} placeholder="Descrição da seleção" />,
                )}
              </Form.Item>
            </Form>
          </FlexElement>
          <FlexElement justify="flex-end" className={styles.footer}>
            <Button onClick={this.handleClose}>
              Cancelar
            </Button>
            <Button type="primary" icon="check" className={styles.button} onClick={this.handleSubmit}>
              Criar Seleção
            </Button>
          </FlexElement>
        </FlexElement>
      </Modal>
    );
  }
}

const mapStateToProps = () => ({
  isModalOpen: selectors.isModalOpen('criarSelecao'),
});

export default Form.create()(connect(mapStateToProps)(CriarPrograma));
