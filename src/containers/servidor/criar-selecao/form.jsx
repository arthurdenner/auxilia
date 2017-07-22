import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash/fp';
import moment from 'moment';
import { DatePicker, Form, Input, InputNumber, Select } from 'antd';
import FlexElement from '~/components/flex-element';
import { dataRules, descricaoRules, nomeRules, programaRules, vagasRules } from './rules';
import styles from './criar-selecao.less';

const FormSelecao = ({ getFieldDecorator, programas, selecao }) => (
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
);

FormSelecao.propTypes = {
  getFieldDecorator: PropTypes.func.isRequired,
  programas: PropTypes.array.isRequired,
  selecao: PropTypes.object.isRequired,
};

export default FormSelecao;
