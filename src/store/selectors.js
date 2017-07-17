import { filter, find, get, isEmpty } from 'lodash/fp';
import { getData } from './configure-store';

// App
export const getSelectedTab = () => getData('app.selectedTab');

// Auth
export const getAuth = () => getData('auth.data');
export const getUser = () => getData('auth.data.usuario', {});
export const isTypeUser = tipo => getUser().tipo === tipo;
export const isLogged = () => !isEmpty(getData('auth.data'));
export const isLogging = () => getData('auth.isLogging');

// Programas
export const isUserCriador = programa => get('criador._id', programa) === getUser()._id;
export const getProgramas = () => getData('programas');
export const getMeusProgramas = () => filter(isUserCriador, getProgramas());
export const getPrograma = _id => find({ _id }, getProgramas());

// Seleções
export const geSelecoes = () => getData('selecoes');
export const getMinhasSelecoes = () => getData('selecoes');

// Modal
export const isModalOpen = context => getData(`modal.${context}.isOpen`);
export const getSelectedPrograma = (context) => {
  const _id = getData(`modal.${context}.idPrograma`);
  return getPrograma(_id);
};
