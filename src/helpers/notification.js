import { notification } from 'antd';

const messages = {
  error: 'Erro',
  info: 'Aviso',
  success: 'Sucesso',
  warning: 'Atenção',
};

const CustomNotification = (type, description) => (
  notification[type]({
    message: messages[type],
    description,
    placement: 'bottomRight',
  })
);

export default CustomNotification;
