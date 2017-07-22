export const programaRules = {
  rules: [{ required: true, message: 'Campo obrigatório' }],
};

export const nomeRules = {
  rules: [
    { required: true, message: 'Campo obrigatório' },
    { min: 10, message: 'O nome deve ter, ao menos, 10 caracteres' },
    { max: 50, message: 'O nome deve ter, no máximo, 50 caracteres' },
  ],
};

export const descricaoRules = {
  rules: [
    { required: true, message: 'Campo obrigatório' },
    { min: 20, message: 'O nome deve ter, ao menos, 20 caracteres' },
    { max: 200, message: 'O nome deve ter, no máximo, 200 caracteres' },
  ],
};

export const dataRules = {
  rules: [{ type: 'object', required: true, message: 'Campo obrigatório' }],
};

export const vagasRules = {
  rules: [{ required: true, message: 'Campo obrigatório' }],
};
