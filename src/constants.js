export const DEV = process.env.NODE_ENV !== 'production';

export const Cache = {
  KEY: DEV ? 'AUXILIA_DEV' : 'AUXILIA_PROD',
};

export const url = 'http://clevison.pythonanywhere.com/api';

export const menuOptions = [
  {
    key: 'item_1',
    route: '/',
    name: 'Programas',
    icon: 'appstore-o',
  },
  {
    key: 'item_2',
    route: '/selecoes',
    name: 'Seleções',
    icon: 'calendar',
  },
];
