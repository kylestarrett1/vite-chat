import React, { Fragment } from 'react';

const MenuHeader = ({ text }) => {
  return (
    <Fragment>
      <li className="menu-header">
        <span>{text}</span>
      </li>
    </Fragment>
  );
};

export default MenuHeader;
