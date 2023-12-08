import { Fragment } from 'react';

import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
  return (
    <Fragment>
      <nav className="menu open-current-submenu">
        <ul>
          <MenuHeader text="DYNAMICALLY-SET__USERNAME" />

          <MenuItem />
        </ul>
      </nav>
    </Fragment>
  );
};

export default Menu;
