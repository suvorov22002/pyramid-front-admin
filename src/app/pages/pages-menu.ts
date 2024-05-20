import { NbMenuItem } from '@nebular/theme';
import { LoginComponent, hasRoles } from '../auth/login/login.component';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'DASHBOARD',
    group: true,
  },
  {
    title: 'Partner Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
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
        hidden: hasRoles(['SUPERADMIN'])
      },
      {
        title: 'Gestion partenaire',
        link: '/pages/partners/managepartner',
        hidden: hasRoles(['SUPERADMIN', 'ADMIN'])
      },
      {
        title: 'Paramétrages',
        link: '/pages/partners/parametrages',
        hidden: hasRoles(['SUPERADMIN', 'ADMIN'])
      },
      {
        title: 'Gestion Salle',
        link: '/pages/partners/salle',
        hidden: hasRoles(['SUPERADMIN', 'ADMIN'])
      },
      {
        title: 'Gestion Subscription',
        link: '/pages/partners/enroll',
        hidden: hasRoles(['SUPERADMIN', 'ADMIN'])
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
        hidden: hasRoles(['SUPERADMIN', 'ADMIN'])
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
        hidden: hasRoles(['SUPERADMIN'])
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
    hidden: hasRoles(['SUPERADMIN'])
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
        title: 'Mouvement des tickets',
        link: '/pages/betting/managebets',
      },
      {
        title: 'Rapport caisse',
        link: '/pages/betting/reports',
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
