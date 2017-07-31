import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash/fp';
import { Button, Form } from 'antd';
import ConteudoModal from '~/components/conteudo-modal';
import Modal from '~/components/modal';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import FormSelecao from './form';
import styles from './criar-selecao.less';

class CriarSelecao extends PureComponent {
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

    validateFields((err, values) => {
      if (!err) {
        if (isEmpty(selecao)) {
          values = {
            ...values,
            inicio: values.inicio.format('YYYY-MM-DD HH:mm'),
            fim: values.fim.format('YYYY-MM-DD HH:mm'),
            idCriador: selectors.getUser().idCriador,
            criador: selectors.getUser().criador,
          };
          dispatch(actions.selecoes.add.request(values));
        } else {
          values = {
            ...values,
            inicio: values.inicio.format('YYYY-MM-DD HH:mm'),
            fim: values.fim.format('YYYY-MM-DD HH:mm'),
            idCriador: selectors.getUser().idCriador,
            criador: selectors.getUser().criador,
          };
          dispatch(actions.selecoes.update.request({ ...selecao, ...values }));
        }
        this.handleClose();
      }
    });
  }

  render() {
    const { form: { getFieldDecorator }, isModalOpen, programas, selecao } = this.props;
    const { modalKey } = this.state;

    const config = {
      title: isEmpty(selecao) ? 'Criar seleção' : 'Editar seleção',
      handleClose: this.handleClose,
      content: (
        <FormSelecao
          getFieldDecorator={getFieldDecorator}
          programas={programas}
          selecao={selecao}
        />
      ),
      footer: (
        <div>
          <Button onClick={this.handleClose}>
            Cancelar
          </Button>
          <Button type="primary" icon="check" className={styles.button} onClick={this.handleSubmit}>
            {isEmpty(selecao) ? 'Criar seleção' : 'Editar seleção'}
          </Button>
        </div>
      ),
    };

    return (
      <Modal
        key={modalKey}
        closable={false}
        footer={null}
        visible={isModalOpen}
        wrapClassName={styles.modal}
      >
        <ConteudoModal config={config} />
      </Modal>
    );
  }
}

const mapStateToProps = () => ({
  isModalOpen: selectors.isModalOpen('criarSelecao'),
  programas: selectors.getMeusProgramas(),
  selecao: selectors.getSelectedSelecao(),
});

export default Form.create()(connect(mapStateToProps)(CriarSelecao));
