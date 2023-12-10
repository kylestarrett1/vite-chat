import { Fragment } from 'react';

import {
  faCartShopping,
  faGlobe,
  faPaintRoller,
  faBook,
  faCalendar,
  faHandshake,
  faChartColumn,
} from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';

import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
  const menuItems = [
    {
      title: 'Components',
      icon: faGem,
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
      title: 'Charts',
      icon: faChartColumn,
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
      title: 'E-commerce',
      icon: faCartShopping,
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
      title: 'Maps',
      icon: faGlobe,
      badge: null,
      badgeColor: null,
      hasSubMenu: true,
      outerSubMenuItems: [
        { title: 'Google maps', hasSubMenu: false },
        { title: 'Open street map', hasSubMenu: false },
      ],
    },
    {
      title: 'Theme',
      icon: faPaintRoller,
      badge: null,
      badgeColor: null,
      hasSubMenu: true,
      outerSubMenuItems: [
        { title: 'Dark', hasSubMenu: false },
        { title: 'Light', hasSubMenu: false },
      ],
    },
    {
      title: 'Documentation',
      icon: faBook,
      badge: 'Beta',
      badgeColor: 'secondary',
      hasSubMenu: false,
      outerSubMenuItems: [],
    },
    {
      title: 'Calendar',
      icon: faCalendar,
      badge: null,
      badgeColor: null,
      hasSubMenu: false,
      outerSubMenuItems: [],
    },
    {
      title: 'Examples',
      icon: faHandshake,
      badge: null,
      badgeColor: null,
      hasSubMenu: false,
      outerSubMenuItems: [],
    },
  ];

  const componentsMenu = menuItems[0];
  const chartsMenu = menuItems[1];
  const eCommerceMenu = menuItems[2];
  const mapsMenu = menuItems[3];
  const themeMenu = menuItems[4];
  const documentationMenu = menuItems[5];
  const calendarMenu = menuItems[6];
  const examplesMenu = menuItems[7];

  return (
    <Fragment>
      <nav className="menu open-current-submenu">
        <ul>
          <MenuHeader text="_USERNAME" />

          <MenuItem
            key={0}
            title={componentsMenu.title}
            icon={componentsMenu.icon}
            badge={componentsMenu.badge}
            badgeColor={componentsMenu.badgeColor}
            hasSubMenu={componentsMenu.hasSubMenu}
            outerSubMenuItems={componentsMenu.outerSubMenuItems}
          />

          <MenuItem
            key={1}
            title={chartsMenu.title}
            icon={chartsMenu.icon}
            badge={chartsMenu.badge}
            badgeColor={chartsMenu.badgeColor}
            hasSubMenu={chartsMenu.hasSubMenu}
            outerSubMenuItems={chartsMenu.outerSubMenuItems}
          />

          <MenuItem
            key={2}
            title={eCommerceMenu.title}
            icon={eCommerceMenu.icon}
            badge={eCommerceMenu.badge}
            badgeColor={eCommerceMenu.badgeColor}
            hasSubMenu={eCommerceMenu.hasSubMenu}
            outerSubMenuItems={eCommerceMenu.outerSubMenuItems}
          />

          <MenuItem
            key={3}
            title={mapsMenu.title}
            icon={mapsMenu.icon}
            badge={mapsMenu.badge}
            badgeColor={mapsMenu.badgeColor}
            hasSubMenu={mapsMenu.hasSubMenu}
            outerSubMenuItems={mapsMenu.outerSubMenuItems}
          />

          <MenuItem
            key={4}
            title={themeMenu.title}
            icon={themeMenu.icon}
            badge={themeMenu.badge}
            badgeColor={themeMenu.badgeColor}
            hasSubMenu={themeMenu.hasSubMenu}
            outerSubMenuItems={themeMenu.outerSubMenuItems}
          />

          <MenuHeader text="_EXTRA" />

          <MenuItem
            key={5}
            title={documentationMenu.title}
            icon={documentationMenu.icon}
            badge={documentationMenu.badge}
            badgeColor={documentationMenu.badgeColor}
            hasSubMenu={documentationMenu.hasSubMenu}
            outerSubMenuItems={documentationMenu.outerSubMenuItems}
          />

          <MenuItem
            key={6}
            title={calendarMenu.title}
            icon={calendarMenu.icon}
            badge={calendarMenu.badge}
            badgeColor={calendarMenu.badgeColor}
            hasSubMenu={calendarMenu.hasSubMenu}
            outerSubMenuItems={calendarMenu.outerSubMenuItems}
          />

          <MenuItem
            key={7}
            title={examplesMenu.title}
            icon={examplesMenu.icon}
            badge={examplesMenu.badge}
            badgeColor={examplesMenu.badgeColor}
            hasSubMenu={examplesMenu.hasSubMenu}
            outerSubMenuItems={examplesMenu.outerSubMenuItems}
          />
        </ul>
      </nav>
    </Fragment>
  );
};

export default Menu;
