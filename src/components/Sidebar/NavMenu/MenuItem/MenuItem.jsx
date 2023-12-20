import { Fragment, useRef, useState, useEffect } from 'react';
import { slideUp, slideDown } from '../../../Utilities/slideFunctions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuItem({
  id,
  title,
  icon,
  badge,
  badgeColor,
  hasSubMenu,
  outerSubMenuItems,
}) {
  const subMenuListRef = useRef(null);
  const subMenuListRefs = useRef({ subMenuListRef });
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  const [innerSubMenuIsOpen, setInnerSubMenuIsOpen] = useState(false);

  const targetElement = subMenuListRef.current;

  const toggleSubMenu = (e) => {
    e.stopPropagation();

    setSubMenuIsOpen(!subMenuIsOpen);
  };

  const toggleInnerSubMenu = (e) => {
    e.stopPropagation();
    setInnerSubMenuIsOpen(!innerSubMenuIsOpen);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  // useEffect(() => {
  //   if (targetElement) {
  //     if (subMenuIsOpen) {
  //       slideDown(targetElement, 300);
  //     } else {
  //       slideUp(targetElement, 300);
  //     }
  //   }
  // }, [subMenuIsOpen, targetElement]);

  useEffect(() => {
    Object.entries(subMenuListRefs.current).forEach(([refId, ref]) => {
      if (refId !== id) {
        console.log(ref);
        // ref.current.className = 'sub-menu-list hide';
      }
    });

    if (targetElement) {
      if (subMenuIsOpen) {
        slideDown(targetElement, 300);
      } else {
        slideUp(targetElement, 300);
      }
    }
  }, [id, subMenuIsOpen, targetElement]);

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
          <div
            className={`sub-menu-list ${subMenuIsOpen ? 'show' : 'hide'}`}
            ref={subMenuListRef}
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
                      <div className="sub-menu-list" onClick={stopPropagation}>
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
}
