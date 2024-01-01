import {
  faDungeon,
  faEnvelope,
  faUsers,
  faIdCard,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
// import { faGem } from '@fortawesome/free-regular-svg-icons';

export default [
  {
    id: 0,
    title: 'Rooms',
    icon: faDungeon,
    badge: 'Hot',
    badgeColor: 'primary',
    hasSubMenu: true,
    outerSubMenuItems: [
      { title: 'Grid', hasSubMenu: false },
      { title: 'Layout', hasSubMenu: false },
      {
        title: 'Forms',
        hasSubMenu: true,
        innerSubMenuItems: [
          { title: 'Input', hasSubMenu: false },
          { title: 'Select', hasSubMenu: false },
          { title: 'More', hasSubMenu: true },
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'Messages',
    icon: faEnvelope,
    badge: null,
    badgeColor: null,
    hasSubMenu: true,
    outerSubMenuItems: [
      { title: 'Pie chart', hasSubMenu: false },
      { title: 'Line chart', hasSubMenu: false },
      { title: 'Bar chart', hasSubMenu: false },
    ],
  },
  {
    id: 2,
    title: 'Members',
    icon: faUsers,
    badge: null,
    badgeColor: null,
    hasSubMenu: true,
    outerSubMenuItems: [
      { title: 'Products', hasSubMenu: false },
      { title: 'Orders', hasSubMenu: false },
      { title: 'Credit card', hasSubMenu: false },
    ],
  },

  {
    id: 3,
    title: 'Profile',
    icon: faIdCard,
    badge: 'Beta',
    badgeColor: 'secondary',
    hasSubMenu: false,
    outerSubMenuItems: [],
  },
  {
    id: 4,
    title: 'Settings',
    icon: faGear,
    badge: null,
    badgeColor: null,
    hasSubMenu: false,
    outerSubMenuItems: [],
  },
];

// {
//   id: 3,
//   title: 'Maps',
//   icon: faGlobe,
//   badge: null,
//   badgeColor: null,
//   hasSubMenu: true,
//   outerSubMenuItems: [
//     { title: 'Google maps', hasSubMenu: false },
//     { title: 'Open street map', hasSubMenu: false },
//   ],
// },
// {
//   id: 4,
//   title: 'Theme',
//   icon: faPaintRoller,
//   badge: null,
//   badgeColor: null,
//   hasSubMenu: true,
//   outerSubMenuItems: [
//     { title: 'Dark', hasSubMenu: false },
//     { title: 'Light', hasSubMenu: false },
//   ],
// },

// {
//   id: 7,
//   title: 'Examples',
//   icon: faHandshake,
//   badge: null,
//   badgeColor: null,
//   hasSubMenu: false,
//   outerSubMenuItems: [],
// },
