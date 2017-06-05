// import keyMirror from 'keymirror';

export const url = 'https://api.auxilia.com';

// export const Menu = keyMirror({
//   INFORMATIVOS: null,
//   PROGRAMAS: null,
//   SELECOES: null,
// });

export const MenuOptions = [
  {
    id: 0,
    route: '/',
    name: 'Informativos',
    icon: 'info-circle-o',
  },
  {
    id: 1,
    route: '/programas',
    name: 'Programas',
    icon: 'appstore-o',
  },
  {
    id: 2,
    route: '/selecoes',
    name: 'Seleções',
    icon: 'calendar',
  },
];
