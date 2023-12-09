import { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = ({
  title,
  icon,
  badge,
  badgeColor,
  hasSubMenu,
  outerSubMenuItems,
  // innerSubMenuItems,
}) => {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);
  const [innerSubMenuIsOpen, setInnerSubMenuIsOpen] = useState(false);

  const toggleSubMenu = (e) => {
    e.preventDefault();
    const subMenu = e.target.nextElementSibling;

    setSubMenuIsOpen(!subMenuIsOpen);
    subMenu.style.display = subMenuIsOpen ? 'none' : 'block';
  };

  const toggleInnerSubMenu = (e) => {
    e.preventDefault();
    const subMenu = e.target.nextElementSibling;

    setInnerSubMenuIsOpen(!innerSubMenuIsOpen);
    subMenu.style.display = innerSubMenuIsOpen ? 'none' : 'block';
  };

  return (
    <Fragment>
      {hasSubMenu ? (
        <li className="menu-item sub-menu">
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
          <div className="sub-menu-list">
            <ul>
              {outerSubMenuItems.map((outerItem, outerIndex) =>
                outerItem.hasSubMenu ? (
                  <li key={outerIndex} className="menu-item sub-menu">
                    <a href="#" onClick={toggleInnerSubMenu}>
                      <span className="menu-title">{outerItem.title}</span>
                    </a>

                    <div className="sub-menu-list">
                      <ul>
                        {outerItem.innerSubMenuItems.map(
                          (innerItem, innerIndex) => (
                            <li key={innerIndex} className="menu-item">
                              <a href="#" onClick={toggleInnerSubMenu}>
                                <span className="menu-title">
                                  {innerItem.title}
                                </span>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={outerIndex} className="menu-item">
                    <a href="#">
                      <span className="menu-title">{outerItem.title}</span>
                    </a>
                  </li>
                )
              )}

              {/* <li className="menu-item">
                <a href="#">
                  <span className="menu-title">Grid</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#">
                  <span className="menu-title">Layout</span>
                </a>
              </li>

              <li className="menu-item sub-menu">
                <a href="#">
                  <span className="menu-title">Forms</span>
                </a>
                <div className="sub-menu-list">
                  <ul>
                    <li className="menu-item">
                      <a href="#">
                        <span className="menu-title">Input</span>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#">
                        <span className="menu-title">More</span>
                      </a>
                      <div className="sub-menu-list">
                        <ul>
                          <li className="menu-item">
                            <a href="#">
                              <span className="menu-title">CheckBox</span>
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="#">
                              <span className="menu-title">Radio</span>
                            </a>
                          </li>
                          <li className="menu-item sub-menu">
                            <a href="#">
                              <span className="menu-title">Want more ?</span>
                              <span className="menu-suffix">&#x1F914;</span>
                            </a>
                            <div className="sub-menu-list">
                              <ul>
                                <li className="menu-item">
                                  <a href="#">
                                    <span className="menu-prefix">&#127881;</span>
                                    <span className="menu-title">
                                      You made it
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
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
