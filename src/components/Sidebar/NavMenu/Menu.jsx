import React, { Fragment } from 'react';

import MENU_ITEMS from './menuItems';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem/MenuItem';

export const MenuContext = React.createContext();

export default function Menu() {
  const componentsMenu = MENU_ITEMS[0];
  const chartsMenu = MENU_ITEMS[1];
  const eCommerceMenu = MENU_ITEMS[2];
  const documentationMenu = MENU_ITEMS[3];
  const calendarMenu = MENU_ITEMS[4];

  return (
    <Fragment>
      <nav className="menu open-current-submenu">
        <ul>
          <MenuHeader text="_USERNAME" />

          <MenuItem
            key={0}
            id={componentsMenu.id}
            title={componentsMenu.title}
            icon={componentsMenu.icon}
            badge={componentsMenu.badge}
            badgeColor={componentsMenu.badgeColor}
            hasSubMenu={componentsMenu.hasSubMenu}
            outerSubMenuItems={componentsMenu.outerSubMenuItems}
          />

          <MenuItem
            key={1}
            id={chartsMenu.id}
            title={chartsMenu.title}
            icon={chartsMenu.icon}
            badge={chartsMenu.badge}
            badgeColor={chartsMenu.badgeColor}
            hasSubMenu={chartsMenu.hasSubMenu}
            outerSubMenuItems={chartsMenu.outerSubMenuItems}
          />

          <MenuItem
            key={2}
            id={eCommerceMenu.id}
            title={eCommerceMenu.title}
            icon={eCommerceMenu.icon}
            badge={eCommerceMenu.badge}
            badgeColor={eCommerceMenu.badgeColor}
            hasSubMenu={eCommerceMenu.hasSubMenu}
            outerSubMenuItems={eCommerceMenu.outerSubMenuItems}
          />

          <MenuHeader text="_EXTRA" />

          <MenuItem
            key={3}
            id={documentationMenu.id}
            title={documentationMenu.title}
            icon={documentationMenu.icon}
            badge={documentationMenu.badge}
            badgeColor={documentationMenu.badgeColor}
            hasSubMenu={documentationMenu.hasSubMenu}
            outerSubMenuItems={documentationMenu.outerSubMenuItems}
          />

          <MenuItem
            key={4}
            id={calendarMenu.id}
            title={calendarMenu.title}
            icon={calendarMenu.icon}
            badge={calendarMenu.badge}
            badgeColor={calendarMenu.badgeColor}
            hasSubMenu={calendarMenu.hasSubMenu}
            outerSubMenuItems={calendarMenu.outerSubMenuItems}
          />
        </ul>
      </nav>
    </Fragment>
  );
}

// const mapsMenu = MENU_ITEMS[3];
// const themeMenu = MENU_ITEMS[4];
// const examplesMenu = MENU_ITEMS[7];

{
  /* <MenuItem
  key={3}
  id={mapsMenu.id}
  title={mapsMenu.title}
  icon={mapsMenu.icon}
  badge={mapsMenu.badge}
  badgeColor={mapsMenu.badgeColor}
  hasSubMenu={mapsMenu.hasSubMenu}
  outerSubMenuItems={mapsMenu.outerSubMenuItems}
/> */
}

{
  /* <MenuItem
  key={4}
  id={themeMenu.id}
  title={themeMenu.title}
  icon={themeMenu.icon}
  badge={themeMenu.badge}
  badgeColor={themeMenu.badgeColor}
  hasSubMenu={themeMenu.hasSubMenu}
  outerSubMenuItems={themeMenu.outerSubMenuItems}
/> */
}

{
  /* <MenuItem
  key={7}
  id={examplesMenu.id}
  title={examplesMenu.title}
  icon={examplesMenu.icon}
  badge={examplesMenu.badge}
  badgeColor={examplesMenu.badgeColor}
  hasSubMenu={examplesMenu.hasSubMenu}
  outerSubMenuItems={examplesMenu.outerSubMenuItems}
/> */
}
