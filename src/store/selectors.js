import { filter, isEmpty } from 'lodash/fp';
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
export const getProgramas = () => getData('programas');
export const getMeusProgramas = () => filter({ criador: getUser()._id }, getProgramas());
