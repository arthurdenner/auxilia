import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Select } from 'antd';
import { cpfRules, generalRules } from './rules';

const FormLogin = ({ form }) => (
  <Form style={{ width: '100%' }}>
    <Form.Item hasFeedback label="CPF">
      {form.getFieldDecorator('cpf', cpfRules)(
        <Input
          prefix={<Icon type="idcard" />}
          placeholder="CPF"
        />,
      )}
    </Form.Item>
    <Form.Item hasFeedback label="Nome completo">
      {form.getFieldDecorator('nome', generalRules)(
        <Input
          prefix={<Icon type="user" />}
          placeholder="Nome completo"
        />,
      )}
    </Form.Item>
    <Form.Item hasFeedback label="E-mail">
      {form.getFieldDecorator('email', generalRules)(
        <Input
          prefix={<Icon type="mail" />}
          placeholder="E-mail"
          type="email"
        />,
      )}
    </Form.Item>
    <Form.Item hasFeedback label="Senha">
      {form.getFieldDecorator('senha1', {
        rules: [
          { required: true, message: 'Campo obrigatório' },
          { validator: (rule, value, callback) => {
            if (value) {
              form.validateFields(['senha2'], { force: true });
            }
            callback();
          } },
        ],
      })(
        <Input
          prefix={<Icon type="lock" />}
          placeholder="Senha"
          type="password"
        />,
      )}
    </Form.Item>
    <Form.Item hasFeedback label="Confirme sua senha">
      {form.getFieldDecorator('senha2', {
        rules: [
          { required: true, message: 'Campo obrigatório' },
          { validator: (rule, value, callback) => {
            if (value && value !== form.getFieldValue('senha1')) {
              callback('As duas senhas não conferem!');
            } else {
              callback();
            }
          } },
        ],
      })(
        <Input
          prefix={<Icon type="lock" />}
          placeholder="Confirme sua senha"
          type="password"
        />,
      )}
    </Form.Item>
    <Form.Item hasFeedback label="Tipo de usuário">
      {form.getFieldDecorator('tipo', generalRules)(
        <Select showSearch placeholder="Tipo de usuário">
          <Select.Option value="aluno">
            Aluno
          </Select.Option>
          <Select.Option value="servidor">
            Servidor
          </Select.Option>
        </Select>,
      )}
    </Form.Item>
  </Form>
);

FormLogin.propTypes = {
  form: PropTypes.object.isRequired,
};

export default FormLogin;
