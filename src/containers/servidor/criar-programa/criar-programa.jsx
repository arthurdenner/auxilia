import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, notification } from 'antd';
import FlexElement from '~/components/flex-element';
import ConteudoModal from '~/components/conteudo-modal';
import Modal from '~/components/modal';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import styles from './criar-programa.less';

class CriarPrograma extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
  };

  handleClose = () => this.props.dispatch(actions.hideModalCriarPrograma());

  criarPrograma = () => {
    const { dispatch } = this.props;
    const notify = () => notification.success({
      message: 'Sucesso!',
      description: 'O programa foi criado com sucesso!',
      placement: 'bottomRight',
    });

    // dispatch(actions.addPrograma());
    dispatch(actions.hideModalCriarPrograma());
    notify();
  }

  render() {
    const { isModalOpen } = this.props;

    const content = (
      <FlexElement column style={{ padding: '1em' }}>
        FORMULÁRIO
      </FlexElement>
    );

    const footer = (
      <div>
        <Button onClick={this.handleClose}>
          Cancelar
        </Button>
        <Button type="primary" icon="check" className={styles.button} onClick={this.criarPrograma}>
          Criar Programa
        </Button>
      </div>
    );

    const config = {
      title: 'Criar Programa',
      handleClose: this.handleClose,
      content,
      footer,
    };

    return (
      <Modal closable={false} footer={null} visible={isModalOpen} wrapClassName={styles.modal}>
        <ConteudoModal config={config} />
      </Modal>
    );
  }
}

const mapStateToProps = () => ({
  isModalOpen: selectors.isModalOpen('criarPrograma'),
});

export default connect(mapStateToProps)(CriarPrograma);
