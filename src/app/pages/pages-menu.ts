import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'DASHBOARD',
    group: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Partenaires',
    icon: 'layout-outline',
    children: [
      {
        title: 'Creer partenaire',
        link: '/pages/partners/partner',
      },
      {
        title: 'Gestion partenaire',
        link: '/pages/partners/managepartner',
      },
      {
        title: 'Paramétrages',
        link: '/pages/partners/parametrages',
      },
      {
        title: 'Gestion Salle',
        link: '/pages/partners/salle',
      },
      {
        title: 'Gestion Subscription',
        link: '/pages/partners/enroll',
      }
    ],
  },
  {
    title: 'Utilisateurs',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Creation utilisateur',
        link: '/pages/users/manageusers',
      }
    ],
  },
  {
    title: 'Salles',
    icon: 'keypad-outline',
    children: [
      {
        title: 'Creation Salle',
        link: '/pages/rooms/managerooms',
      },
      {
        title: 'Comptabilite',
        link: '/pages/rooms/account',
      }
    ],
  },
  {
    title: 'Jeux',
    icon: 'browser-outline',
    children: [
      {
        title: 'Gestion jeux',
        link: '/pages/games/managegames',
      },
    ],
  },
  {
    title: 'Turnover',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
    ],
  },
  {
    title: 'Gestion Tickets',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
    ],
  },
  {
    title: 'Comptabilité',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
];
