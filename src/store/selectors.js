import { filter, find, get, isEmpty } from 'lodash/fp';
import { getData } from './configure-store';

// App
export const getSelectedTab = () => getData('app.selectedTab');

// Auth
export const getAuth = () => getData('auth.data');
export const getUser = () => getData('auth.data.usuario', {});
export const isTypeUser = tipo => getUser().tipo === tipo;
// export const isLogged = () => !isEmpty(getData('auth.data'));
export const isLogged = () => false;
export const isLogging = () => getData('auth.isLogging');

// Geral
export const isUserCriador = item => (
  get('criador', item) === getUser()._id ||
  get('criador._id', item) === getUser()._id
);

// Programas
export const getProgramas = () => getData('programas');
export const getMeusProgramas = () => filter(isUserCriador, getProgramas());
export const getPrograma = _id => find({ _id }, getProgramas());

// Seleções
export const getSelecoes = () => getData('selecoes');
export const getMinhasSelecoes = () => filter(isUserCriador, getSelecoes());
export const getSelecao = _id => find({ _id }, getSelecoes());

// Modal
export const isModalOpen = context => getData(`modal.${context}.isOpen`);
export const getSelectedPrograma = () => getPrograma(getData('modal.criarPrograma.idPrograma'));
export const getSelectedSelecao = () => getSelecao(getData('modal.criarSelecao.idSelecao'));
