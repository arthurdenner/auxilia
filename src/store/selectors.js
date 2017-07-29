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

// Geral
export const isUserCriador = item => get('id_criador', item) === Number(getUser().id_criador);

// Programas
export const getProgramas = () => getData('programas');
export const getMeusProgramas = () => filter(isUserCriador, getProgramas());
export const getPrograma = id_programa => find({ id_programa }, getProgramas());

// Seleções
export const getSelecoes = () => getData('selecoes');
export const getMinhasSelecoes = () => filter(isUserCriador, getSelecoes());
export const getSelecao = _id => find({ _id }, getSelecoes());
export const isInSelecao = (selecao) => {
  const participantes = get('participantes', selecao, []);
  return participantes.indexOf(getUser().id_criador) > -1;
};

// Modal
export const isModalOpen = context => getData(`modal.${context}.isOpen`);
export const getSelectedPrograma = () => getPrograma(getData('modal.criarPrograma.idPrograma'));
export const getSelectedSelecao = () => getSelecao(getData('modal.criarSelecao.idSelecao'));
