import { filter, get, isEmpty } from 'lodash/fp';
import { getData } from './configure-store';

// App
export const getSelectedTab = () => getData('app.selectedTab');

// Auth
export const getAuth = () => getData('auth.data');
export const getUser = () => getData('auth.data.usuario', {});
export const getTypeUser = () => getUser().tipo;
export const isLogged = () => !isEmpty(getData('auth.data'));
export const isLogging = () => getData('auth.isLogging');

// Modal
export const isModalOpen = context => getData(`modal.${context}.isOpen`);

// Programas
export const isUserCriador = programa => get('criador._id', programa) === getUser()._id;
export const getProgramas = () => getData('programas');
export const getMeusProgramas = () => filter(isUserCriador, getProgramas());
export const getPrograma = _id => filter({ _id }, getProgramas());

// Seleções
export const geSelecoes = () => getData('selecoes');
export const getMinhasSelecoes = () => getData('selecoes');
