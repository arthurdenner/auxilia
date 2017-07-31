import isCPFValid from '~/helpers/validate-cpf';

export const cpfRules = {
  rules: [
    { required: true, message: 'Campo obrigatório' },
    { validator: (rule, value, callback) => {
      if (isCPFValid(value)) {
        callback();
        return;
      }

      callback('CPF Inválido');
    } },
  ],
};

export const generalRules = {
  rules: [{ required: true, message: 'Campo obrigatório' }],
};
