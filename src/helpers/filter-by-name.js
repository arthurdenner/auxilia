import { filter } from 'lodash/fp';

const acentoRegex = (texto) => {
  texto = texto.replace(/[àáâãäåa]/gi, '[àáâãäåa]');
  texto = texto.replace(/[èéêëẽe]/gi, '[èéêëẽe]');
  texto = texto.replace(/[ìíîïĩi]/gi, '[ìíîïĩi]');
  texto = texto.replace(/[òóôõöøo]/gi, '[òóôõöøo]');
  texto = texto.replace(/[ùúûüu]/gi, '[ùúûüu]');
  texto = texto.replace(/[cç]/gi, '[cç]');
  return texto;
};

const filterByName = (items, busca) => {
  const re = new RegExp(`${acentoRegex(busca)}`, 'gi');
  return filter(item => (re.test(item.nome) || re.test(item.descricao)), items);
};

export default filterByName;
