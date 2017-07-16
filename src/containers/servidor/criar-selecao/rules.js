export const nomeRules = {
  rules: [
    { required: true, message: 'Campo obrigatório' },
    { min: 10, message: 'O nome deve ter, ao menos, 10 caracteres' },
    { max: 100, message: 'O nome deve ter, no máximo, 100 caracteres' },
  ],
};

export const descricaoRules = {
  rules: [
    { required: true, message: 'Campo obrigatório' },
    { min: 50, message: 'O nome deve ter, ao menos, 50 caracteres' },
    { max: 500, message: 'O nome deve ter, no máximo, 500 caracteres' },
  ],
};
