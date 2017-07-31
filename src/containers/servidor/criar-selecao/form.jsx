import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash/fp';
import moment from 'moment';
import { DatePicker, Form, Input, InputNumber, Select } from 'antd';
import FlexElement from '~/components/flex-element';
import { dataRules, descricaoRules, nomeRules, programaRules, vagasRules } from './rules';
import styles from './criar-selecao.less';

const disabledDate = current => current && current.valueOf() < Date.now();

const FormSelecao = ({ getFieldDecorator, programas, selecao }) => (
  <Form style={{ width: '100%' }}>
    <Form.Item hasFeedback label="Programa">
      {getFieldDecorator('idPrograma', {
        ...programaRules,
        initialValue: String(get('idPrograma', selecao, '')),
      })(
        <Select showSearch placeholder="Programa da seleção">
          {programas.map(programa =>
            <Select.Option key={programa.id_programa} value={String(programa.id_programa)}>
              {programa.titulo}
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
        {getFieldDecorator('inicio', {
          ...dataRules,
          initialValue: selecao.inicio && moment(`${selecao.inicio} 3:00`, 'YYYY/MM/DD HH:mm'),
        })(
          <DatePicker
            format="DD/MM/YYYY HH:mm"
            placeholder="Data de início"
            disabledDate={disabledDate}
            showTime={{ defaultValue: moment('00:00:01', 'HH:mm') }}
          />,
        )}
      </Form.Item>
      <Form.Item hasFeedback label="Data final">
        {getFieldDecorator('fim', {
          ...dataRules,
          initialValue: selecao.fim && moment(selecao.fim, 'YYYY/MM/DD HH:mm'),
        })(
          <DatePicker
            format="DD/MM/YYYY HH:mm"
            placeholder="Data final"
            disabledDate={disabledDate}
            showTime={{ defaultValue: moment('23:59:59', 'HH:mm') }}
          />,
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
