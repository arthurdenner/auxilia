import { getData } from './configure-store';
import { isEmpty } from 'lodash';

// App
export const getSelectedTab = () => getData('app.selectedTab');

// Auth
export const getAuth = () => getData('auth.data');
export const getUser = () => getData('auth.data.userInfo', {});
export const isLogged = () => !isEmpty(getData('auth.data'));
export const isLogging = () => getData('auth.isLogging');
