import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, DatePicker, Form, Icon, Input, InputNumber, notification, Select } from 'antd';
import FlexElement from '~/components/flex-element';
import Modal from '~/components/modal';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import { dataRules, descricaoRules, nomeRules, programaRules, vagasRules } from './rules';
import styles from './criar-selecao.less';

class CriarPrograma extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    programas: PropTypes.array.isRequired,
  };

  handleClose = () => this.props.dispatch(actions.hideModalCriarSelecao());

  handleSubmit = () => {
    const { dispatch, form: { validateFields } } = this.props;
    const notify = () => notification.success({
      message: 'Sucesso!',
      description: 'A seleção foi criada com sucesso!',
      placement: 'bottomRight',
    });

    validateFields((err, values) => {
      if (!err) {
        values = {
          ...values,
          dataInicio: values.dataInicio.format('YYYY-MM-DD HH:mm:ss'),
          dataFinal: values.dataFinal.format('YYYY-MM-DD HH:mm:ss'),
        };
        dispatch(actions.addSelecao(values));
        dispatch(actions.hideModalCriarSelecao());
        notify();
      }
    });
  }

  render() {
    const { form: { getFieldDecorator }, isModalOpen, programas } = this.props;

    return (
      <Modal closable={false} footer={null} visible={isModalOpen} wrapClassName={styles.modal}>
        <FlexElement full column>
          <FlexElement align="center" justify="space-between" className={styles.header}>
            <h3 className={styles.headerTitle}>Criar Seleção</h3>
            <Icon type="close" onClick={this.handleClose} className={styles.icon} />
          </FlexElement>
          <FlexElement full style={{ padding: '0.2em 1em', overflow: 'auto' }}>
            <Form style={{ width: '100%' }}>
              <Form.Item hasFeedback label="Programa">
                {getFieldDecorator('programa', programaRules)(
                  <Select showSearch placeholder="Programa da seleção">
                    {programas.map(programa =>
                      <Select.Option key={programa._id} value={programa._id}>
                        {programa.nome}
                      </Select.Option>,
                    )}
                  </Select>,
                )}
              </Form.Item>
              <Form.Item hasFeedback label="Nome da seleção">
                {getFieldDecorator('nome', nomeRules)(
                  <Input placeholder="Nome da seleção" />,
                )}
              </Form.Item>
              <Form.Item hasFeedback label="Descrição da seleção">
                {getFieldDecorator('descricao', descricaoRules)(
                  <Input.TextArea rows={5} placeholder="Descrição da seleção" />,
                )}
              </Form.Item>
              <FlexElement justify="space-between" className={styles.items}>
                <Form.Item hasFeedback label="Data de início">
                  {getFieldDecorator('dataInicio', dataRules)(
                    <DatePicker format="DD/MM/YYYY" placeholder="Data de início" />,
                  )}
                </Form.Item>
                <Form.Item hasFeedback label="Data final">
                  {getFieldDecorator('dataFinal', dataRules)(
                    <DatePicker format="DD/MM/YYYY" placeholder="Data final" />,
                  )}
                </Form.Item>
                <Form.Item hasFeedback label="Número de vagas">
                  {getFieldDecorator('vagas', vagasRules)(
                    <InputNumber placeholder="Número de vagas" />,
                  )}
                </Form.Item>
              </FlexElement>
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
  programas: selectors.getMeusProgramas(),
});

export default Form.create()(connect(mapStateToProps)(CriarPrograma));
