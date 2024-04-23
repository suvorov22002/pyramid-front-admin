import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
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
        link: '/pages/layout/partner',
      },
      {
        title: 'Gestion partenaire',
        link: '/pages/layout/managepartner',
      },
      {
        title: 'Paramétrages',
        link: '/pages/layout/parametrages',
      },
      {
        title: 'Gestion Salle',
        link: '/pages/layout/salle',
      },
      {
        title: 'Gestion Subscription',
        link: '/pages/layout/enroll',
      }
    ],
  },
  {
    title: 'Utilisateurs',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Creation utilisateur',
        link: '/pages/forms/inputs',
      }
    ],
  },
  {
    title: 'Salles',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Creation Salle',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Evenements',
        link: '/pages/ui-features/icons',
      }
    ],
  },
  {
    title: 'Jeux',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
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
