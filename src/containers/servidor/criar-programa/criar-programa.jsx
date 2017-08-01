import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash/fp';
import { Button, Form } from 'antd';
import ConteudoModal from '~/components/conteudo-modal';
import Modal from '~/components/modal';
import notification from '~/helpers/notification';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import FormPrograma from './form';
import styles from './criar-programa.less';

class CriarPrograma extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    programa: PropTypes.object,
    usuario: PropTypes.object.isRequired,
  };

  static defaultProps = {
    programa: {},
  };

  state = {
    modalKey: new Date().toJSON(),
  };

  handleClose = () => {
    this.props.dispatch(actions.hideModalCriarPrograma());
    this.setState({ modalKey: new Date().toJSON() });
  };

  handleSubmit = () => {
    const { dispatch, form: { validateFields }, programa, usuario } = this.props;

    validateFields((err, values) => {
      if (!err) {
        if (isEmpty(programa)) {
          dispatch(actions.programas.add.request({
            data: { ...values, ...usuario },
            onSuccess: () => {
              notification('success', 'O programa foi criado!');
              this.handleClose();
            },
            onError: () => {
              notification('error', 'Houve um erro na requisição!');
            },
          }));
        } else {
          dispatch(actions.programas.update.request({
            data: { ...programa, ...values },
            onSuccess: () => {
              notification('success', 'O programa foi atualizado!');
              this.handleClose();
            },
            onError: () => {
              notification('error', 'Houve um erro na requisição!');
            },
          }));
        }
      }
    });
  }

  render() {
    const { form: { getFieldDecorator }, isLoading, isModalOpen, programa } = this.props;
    const { modalKey } = this.state;

    const config = {
      title: isEmpty(programa) ? 'Criar programa' : 'Editar programa',
      handleClose: this.handleClose,
      content: (
        <FormPrograma
          getFieldDecorator={getFieldDecorator}
          programa={programa}
        />
      ),
      footer: (
        <div>
          <Button onClick={this.handleClose}>
            Cancelar
          </Button>
          <Button
            type="primary"
            icon="check"
            className={styles.button}
            onClick={this.handleSubmit}
            loading={isLoading}
          >
            {isEmpty(programa) ? 'Criar programa' : 'Editar programa'}
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
  usuario: selectors.getUser(),
  isLoading: selectors.isLoading(),
  isModalOpen: selectors.isModalOpen('criarPrograma'),
  programa: selectors.getSelectedPrograma(),
});

export default Form.create()(connect(mapStateToProps)(CriarPrograma));
