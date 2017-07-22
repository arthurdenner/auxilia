import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { descricaoRules, nomeRules } from './rules';

const FormPrograma = ({ getFieldDecorator, programa }) => (
  <Form style={{ width: '100%' }}>
    <Form.Item hasFeedback label="Nome do programa">
      {getFieldDecorator('nome', {
        ...nomeRules,
        initialValue: programa.nome,
      })(
        <Input placeholder="Nome do programa" />,
      )}
    </Form.Item>
    <Form.Item hasFeedback label="Descrição do programa">
      {getFieldDecorator('descricao', {
        ...descricaoRules,
        initialValue: programa.descricao,
      })(
        <Input.TextArea rows={5} placeholder="Descrição do programa" />,
      )}
    </Form.Item>
  </Form>
);

FormPrograma.propTypes = {
  getFieldDecorator: PropTypes.func.isRequired,
  programa: PropTypes.object.isRequired,
};

export default FormPrograma;
