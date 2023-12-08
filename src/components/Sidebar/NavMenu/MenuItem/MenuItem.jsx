import React, { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const MenuItem = () => {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  const toggleSubMenu = (e) => {
    e.preventDefault();
    const subMenu = e.target.nextElementSibling;

    setSubMenuIsOpen(!subMenuIsOpen);
    subMenu.style.display = subMenuIsOpen ? 'none' : 'block';
  };

  return (
    <Fragment>
      {/* Menu Header USERNAME */}
      {/* Menu Item COMPONENTS */}

      <li className="menu-item sub-menu">
        <a href="#" onClick={toggleSubMenu}>
          <span className="menu-icon">
            <FontAwesomeIcon className="icon" icon={faGem} />
          </span>
          <span className="menu-title">Components</span>
          <span className="menu-suffix">
            <span className="badge primary">Hot</span>
          </span>
        </a>
        <div className="sub-menu-list">
          <ul>
            <li className="menu-item">
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
            </li>
          </ul>
        </div>
      </li>

      {/* Menu Item CHARTS */}

      <li className="menu-item sub-menu">
        <a href="#">
          <span className="menu-icon">
            <FontAwesomeIcon className="icon" icon={faChartColumn} />
          </span>
          <span className="menu-title">Charts</span>
        </a>
        <div className="sub-menu-list">
          <ul>
            <li className="menu-item">
              <a href="#">
                <span className="menu-title">Pie chart</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <span className="menu-title">Line chart</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <span className="menu-title">Bar chart</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* Menu Item E-COMMERCE */}

      <li className="menu-item sub-menu">
        <a href="#">
          <span className="menu-icon">
            <FontAwesomeIcon className="icon" icon={faCartShopping} />
          </span>
          <span className="menu-title">E-commerce</span>
        </a>
        <div className="sub-menu-list">
          <ul>
            <li className="menu-item">
              <a href="#">
                <span className="menu-title">Products</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <span className="menu-title">Orders</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <span className="menu-title">credit card</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* Menu Item MAPS */}

      <li className="menu-item sub-menu">
        <a href="#">
          <span className="menu-icon">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
          </span>
          <span className="menu-title">Maps</span>
        </a>
        <div className="sub-menu-list">
          <ul>
            <li className="menu-item">
              <a href="#">
                <span className="menu-title">Google maps</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <span className="menu-title">Open street map</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* Menu Item THEME */}

      <li className="menu-item sub-menu">
        <a href="#">
          <span className="menu-icon">
            <FontAwesomeIcon className="icon" icon={faPaintRoller} />
          </span>
          <span className="menu-title">Theme</span>
        </a>
        <div className="sub-menu-list">
          <ul>
            <li className="menu-item">
              <a href="#">
                <span className="menu-title">Dark</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <span className="menu-title">Light</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      {/* Menu Header EXTRA */}

      {/* Menu Item DOCUMENTATION */}
      <li className="menu-item">
        <a href="#">
          <span className="menu-icon">
            <FontAwesomeIcon className="icon" icon={faBook} />
          </span>
          <span className="menu-title">Documentation</span>
          <span className="menu-suffix">
            <span className="badge secondary">Beta</span>
          </span>
        </a>
      </li>

      {/* Menu Item CALENDAR */}
      <li className="menu-item">
        <a href="#">
          <span className="menu-icon">
            <FontAwesomeIcon className="icon" icon={faCalendar} />
          </span>
          <span className="menu-title">Calendar</span>
        </a>
      </li>

      {/* Menu Item EXAMPLES */}
      <li className="menu-item">
        <a href="#">
          <span className="menu-icon">
            <FontAwesomeIcon className="icon" icon={faHandshake} />
          </span>
          <span className="menu-title">Examples</span>
        </a>
      </li>
    </Fragment>
  );
};

export default MenuItem;
