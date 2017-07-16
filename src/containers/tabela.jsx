import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { get } from 'lodash/fp';
import EditableCell from '~/components/editable-cell';
import styles from './tabela.less';

// console.log(colunasProgramas);

class EditableTable extends Component {
  static propTypes = {
    data: PropTypes.array,
  };

  static defaultProps = {
    data: [],
  };

  constructor(props) {
    super(props);
    this.columns = [{
      title: 'Nome do programa',
      dataIndex: 'nome',
      width: '30%',
      render: (text, record, index) => this.renderColumns(this.props.data, index, 'nome', text),
    }, {
      title: 'Descrição do programa',
      dataIndex: 'descricao',
      width: '60%',
      render: (text, record, index) => this.renderColumns(this.props.data, index, 'descricao', text),
    }, {
      title: 'Ações',
      dataIndex: 'operation',
      render: (text, record, index) => {
        const editable = get('editable', this.props.data[index].nome, false);

        return (
          <div className={styles.acoes}>
            {editable ? (
              <span className={styles.subacoes}>
                <a onClick={() => this.editDone(index, 'save')}>Salvar</a>
                <a onClick={() => this.editDone(index, 'cancel')}>Cancelar</a>
              </span>) : (
                <a onClick={() => this.edit(index)}>Editar</a>)}
          </div>
        );
      },
    }];
  }

  handleChange = (key, index, value) => {
    const { data } = this.props;

    data[index][key].value = value;
    console.log(data);
    this.setState({ data });
  }

  edit = (index) => {
    const { data } = this.props;

    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = true;
      }
    });
    this.setState({ data });
  }

  editDone = (index, type) => {
    const { data } = this.props;

    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = false;
        data[index][item].status = type;
      }
    });
    this.setState({ data }, () => {
      Object.keys(data[index]).forEach((item) => {
        if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
          delete data[index][item].status;
        }
      });
    });
  }

  renderColumns = (data, index, key, text) => {
    const editable = get('editable', data[index][key], false);
    const status = get('status', data[index][key], '');

    if (typeof editable === 'undefined') {
      return text;
    }

    return (
      <EditableCell
        editable={editable}
        value={text}
        onChange={value => this.handleChange(key, index, value)}
        status={status}
      />
    );
  }

  render() {
    const { data } = this.props;
    const dataSource = data.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });
    const columns = this.columns;

    return <Table bordered dataSource={dataSource} columns={columns} />;
  }
}

export default EditableTable;
