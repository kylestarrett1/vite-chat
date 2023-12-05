import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCartShopping,
  faGlobe,
  faPaintRoller,
  faBook,
  faCalendar,
  faHandshake,
  faChartColumn,
} from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
  return (
    <div className="layout has-sidebar fixed-sidebar fixed-header">
      <aside id="sidebar" className="sidebar break-point-sm">
        <a id="btn-collapse" className="sidebar-collapser">
          <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        </a>
        <div className="sidebar-layout">
          <div className="sidebar-header">
            <div className="room-logo">
              <p>R</p>
              <h5>Room Number</h5>
            </div>
          </div>

          <div className="sidebar-content">
            <nav className="menu open-current-submenu">
              <ul>
                <li className="menu-header">
                  <span> USERNAME </span>
                </li>
                <li className="menu-item sub-menu">
                  <a href="#">
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
                                      <span className="menu-title">
                                        CheckBox
                                      </span>
                                    </a>
                                  </li>
                                  <li className="menu-item">
                                    <a href="#">
                                      <span className="menu-title">Radio</span>
                                    </a>
                                  </li>
                                  <li className="menu-item sub-menu">
                                    <a href="#">
                                      <span className="menu-title">
                                        Want more ?
                                      </span>
                                      <span className="menu-suffix">
                                        &#x1F914;
                                      </span>
                                    </a>
                                    <div className="sub-menu-list">
                                      <ul>
                                        <li className="menu-item">
                                          <a href="#">
                                            <span className="menu-prefix">
                                              &#127881;
                                            </span>
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

                <li className="menu-header" style={{ paddingTop: '20px' }}>
                  <span> EXTRA </span>
                </li>

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

                <li className="menu-item">
                  <a href="#">
                    <span className="menu-icon">
                      <FontAwesomeIcon className="icon" icon={faCalendar} />
                    </span>
                    <span className="menu-title">Calendar</span>
                  </a>
                </li>

                <li className="menu-item">
                  <a href="#">
                    <span className="menu-icon">
                      <FontAwesomeIcon className="icon" icon={faHandshake} />
                    </span>
                    <span className="menu-title">Examples</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="sidebar-footer">
            <div className="footer-box">
              <div></div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
