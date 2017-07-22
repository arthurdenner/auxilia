import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash/fp';
import { Button, Form, notification } from 'antd';
import ConteudoModal from '~/components/conteudo-modal';
import Modal from '~/components/modal';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import FormPrograma from './form';
import styles from './criar-programa.less';

class CriarPrograma extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    programa: PropTypes.object,
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
    const { dispatch, form: { validateFields }, programa } = this.props;
    const notify = () => notification.success({
      message: 'Sucesso!',
      description: `O programa foi ${isEmpty(programa) ? 'criado' : 'atualizado'} com sucesso!`,
      placement: 'bottomRight',
    });

    validateFields((err, values) => {
      if (!err) {
        if (isEmpty(programa)) {
          dispatch(actions.addPrograma(values));
        } else {
          dispatch(actions.updatePrograma({ ...programa, ...values }));
        }
        this.handleClose();
        notify();
      }
    });
  }

  render() {
    const { form: { getFieldDecorator }, isModalOpen, programa } = this.props;
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
          <Button type="primary" icon="check" className={styles.button} onClick={this.handleSubmit}>
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
  isModalOpen: selectors.isModalOpen('criarPrograma'),
  programa: selectors.getSelectedPrograma(),
});


export default Form.create()(connect(mapStateToProps)(CriarPrograma));
