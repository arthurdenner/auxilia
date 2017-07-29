import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Select } from 'antd';
import { generalRules } from './rules';

const FormLogin = ({ getFieldDecorator }) => (
  <Form style={{ width: '100%' }}>
    <Form.Item hasFeedback label="Nome do usuário">
      {getFieldDecorator('criador', generalRules)(
        <Input
          prefix={<Icon type="user" />}
          placeholder="Nome de usuário"
        />,
      )}
    </Form.Item>
    <Form.Item hasFeedback label="Senha">
      {getFieldDecorator('id_criador', generalRules)(
        <Input
          prefix={<Icon type="lock" />}
          placeholder="Senha"
          type="password"
        />,
      )}
    </Form.Item>
    <Form.Item hasFeedback label="Tipo de usuário">
      {getFieldDecorator('tipo', generalRules)(
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
  getFieldDecorator: PropTypes.func.isRequired,
};

export default FormLogin;
