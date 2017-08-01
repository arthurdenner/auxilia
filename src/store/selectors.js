import { filter, find, get, getOr, isEmpty } from 'lodash/fp';
import { getData } from './configure-store';

// App
export const getSelectedTab = () => getData('app.selectedTab');
export const isLoading = () => getData('app.loading');

// Auth
export const getAuth = () => getData('auth.data');
export const getUser = () => getData('auth.data.usuario', {});
export const isTypeUser = tipo => getUser().tipo === tipo;
export const isLogged = () => !isEmpty(getData('auth.data'));
export const isLogging = () => getData('auth.isLogging');

// Geral
export const isUserCriador = item => get('idCriador', item) === Number(getUser().idCriador);

// Programas
export const getProgramas = () => getData('programas');
export const getMeusProgramas = () => filter(isUserCriador, getProgramas());
export const getPrograma = idPrograma => find({ idPrograma }, getProgramas());

// Seleções
export const getSelecoes = () => getData('selecoes');
// export const getMinhasSelecoes = () => filter(isUserCriador, getSelecoes()); // refazer
export const getSelecao = idSelecao => find({ idSelecao }, getSelecoes());
export const isInSelecao = (selecao) => {
  const participantes = getOr([], 'participantes', selecao);
  return participantes.indexOf(getUser().idCriador) > -1;
};

// Modal
export const isModalOpen = context => getData(`modal.${context}.isOpen`);
export const getSelectedPrograma = () => getPrograma(getData('modal.criarPrograma.idPrograma'));
export const getSelectedSelecao = () => getSelecao(getData('modal.criarSelecao.idSelecao'));
