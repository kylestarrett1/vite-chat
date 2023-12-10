import { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = ({
  title,
  icon,
  badge,
  badgeColor,
  hasSubMenu,
  outerSubMenuItems,
}) => {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
  const [innerSubMenuIsOpen, setInnerSubMenuIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuIsOpen(!subMenuIsOpen);
  };

  const toggleInnerSubMenu = (e) => {
    e.stopPropagation();
    setInnerSubMenuIsOpen(!innerSubMenuIsOpen);
  };

  const stopPropagation = (e) => {
    e.stopPropagation(); // Stop propagation of the click event
  };

  return (
    <Fragment>
      {hasSubMenu ? (
        <li className="menu-item sub-menu" onClick={toggleSubMenu}>
          <a href="#">
            <span className="menu-icon">
              <FontAwesomeIcon className="icon" icon={icon} />
            </span>
            <span className="menu-title">{title}</span>

            {badge !== null && (
              <span className="menu-suffix">
                <span className={`badge ${badgeColor}`}>{badge}</span>
              </span>
            )}
          </a>
          {subMenuIsOpen && (
            <div
              className="sub-menu-list"
              style={{ display: 'block' }}
              onClick={stopPropagation}
            >
              <ul>
                {outerSubMenuItems.map((outerItem, outerIndex) =>
                  outerItem.hasSubMenu ? (
                    <li
                      key={outerIndex}
                      className="menu-item sub-menu"
                      onClick={toggleInnerSubMenu}
                    >
                      <a href="#">
                        <span className="menu-title">{outerItem.title}</span>
                      </a>
                      {innerSubMenuIsOpen && (
                        <div
                          className="sub-menu-list"
                          style={{ display: 'block' }}
                          onClick={stopPropagation}
                        >
                          <ul>
                            {outerItem.innerSubMenuItems.map(
                              (innerItem, innerIndex) => (
                                <li
                                  key={innerIndex}
                                  className="menu-item"
                                  onClick={toggleSubMenu}
                                >
                                  <a href="#">
                                    <span className="menu-title">
                                      {innerItem.title}
                                    </span>
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </li>
                  ) : (
                    <li key={outerIndex} className="menu-item">
                      <a href="#">
                        <span className="menu-title">{outerItem.title}</span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </li>
      ) : (
        <li className="menu-item">
          <a href="#" onClick={toggleSubMenu}>
            <span className="menu-icon">
              <FontAwesomeIcon className="icon" icon={icon} />
            </span>
            <span className="menu-title">{title}</span>

            {badge !== null && (
              <span className="menu-suffix">
                <span className={`badge ${badgeColor}`}>{badge}</span>
              </span>
            )}
          </a>
        </li>
      )}
    </Fragment>
  );
};

export default MenuItem;