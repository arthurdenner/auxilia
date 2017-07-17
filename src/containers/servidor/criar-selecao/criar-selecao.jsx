import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get, isEmpty } from 'lodash/fp';
import moment from 'moment';
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
    selecao: PropTypes.object,
  };

  static defaultProps = {
    selecao: {},
  };

  state = {
    modalKey: new Date().toJSON(),
  };

  handleClose = () => {
    this.props.dispatch(actions.hideModalCriarSelecao());
    this.setState({ modalKey: new Date().toJSON() });
  };

  handleSubmit = () => {
    const { dispatch, form: { validateFields }, selecao } = this.props;
    const notify = () => notification.success({
      message: 'Sucesso!',
      description: `A seleção foi ${isEmpty(selecao) ? 'criada' : 'atualizada'} com sucesso!`,
      placement: 'bottomRight',
    });

    validateFields((err, values) => {
      if (!err) {
        if (isEmpty(selecao)) {
          values = {
            ...values,
            dataInicio: values.dataInicio.format('YYYY-MM-DD HH:mm:ss'),
            dataFinal: values.dataFinal.format('YYYY-MM-DD HH:mm:ss'),
          };
          dispatch(actions.addSelecao(values));
        } else {
          values = {
            ...values,
            dataInicio: values.dataInicio.format('YYYY-MM-DD HH:mm:ss'),
            dataFinal: values.dataFinal.format('YYYY-MM-DD HH:mm:ss'),
          };
          dispatch(actions.updateSelecao({ ...selecao, ...values }));
        }
        this.handleClose();
        notify();
      }
    });
  }

  render() {
    const { form: { getFieldDecorator }, isModalOpen, programas, selecao } = this.props;
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
            <h3 className={styles.headerTitle}>
              {isEmpty(selecao) ? 'Criar seleção' : 'Editar seleção'}
            </h3>
            <Icon type="close" onClick={this.handleClose} className={styles.icon} />
          </FlexElement>
          <FlexElement full style={{ padding: '0.2em 1em', overflow: 'auto' }}>
            <Form style={{ width: '100%' }}>
              <Form.Item hasFeedback label="Programa">
                {getFieldDecorator('programa', {
                  ...programaRules,
                  initialValue: get('programa._id', selecao, ''),
                })(
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
                {getFieldDecorator('nome', {
                  ...nomeRules,
                  initialValue: selecao.nome,
                })(
                  <Input placeholder="Nome da seleção" />,
                )}
              </Form.Item>
              <Form.Item hasFeedback label="Descrição da seleção">
                {getFieldDecorator('descricao', {
                  ...descricaoRules,
                  initialValue: selecao.descricao,
                })(
                  <Input.TextArea rows={5} placeholder="Descrição da seleção" />,
                )}
              </Form.Item>
              <FlexElement justify="space-between" className={styles.items}>
                <Form.Item hasFeedback label="Data de início">
                  {getFieldDecorator('dataInicio', {
                    ...dataRules,
                    initialValue: moment(selecao.dataInicio, 'YYYY/MM/DD HH:mm:ss').isValid() ?
                    moment(selecao.dataInicio, 'YYYY/MM/DD HH:mm:ss') : moment(),
                  })(
                    <DatePicker format="DD/MM/YYYY" placeholder="Data de início" />,
                  )}
                </Form.Item>
                <Form.Item hasFeedback label="Data final">
                  {getFieldDecorator('dataFinal', {
                    ...dataRules,
                    initialValue: moment(selecao.dataFinal, 'YYYY/MM/DD HH:mm:ss').isValid() ?
                    moment(selecao.dataFinal, 'YYYY/MM/DD HH:mm:ss') : moment(),
                  })(
                    <DatePicker format="DD/MM/YYYY" placeholder="Data final" />,
                  )}
                </Form.Item>
                <Form.Item hasFeedback label="Número de vagas">
                  {getFieldDecorator('vagas', {
                    ...vagasRules,
                    initialValue: selecao.vagas,
                  })(
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
              {isEmpty(selecao) ? 'Criar seleção' : 'Editar seleção'}
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
  selecao: selectors.getSelectedSelecao(),
});

export default Form.create()(connect(mapStateToProps)(CriarPrograma));
