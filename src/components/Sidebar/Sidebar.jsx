import { useState } from 'react';

import SidebarHeader from './Layout/SidebarHeader';
import SidebarContent from './Layout/SidebarContent';
import SidebarFooter from './Layout/SidebarFooter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapseHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`layout has-sidebar fixed-sidebar fixed-header ${
        collapsed ? 'collapsed' : ''
      }`}
    >
      <aside
        id="sidebar"
        className={`sidebar break-point-sm ${collapsed ? 'collapsed' : ''}`}
      >
        <a
          id="btn-collapse"
          className="sidebar-collapser"
          onClick={toggleCollapseHandler}
        >
          <FontAwesomeIcon className="icon" icon={faChevronLeft} />
        </a>
        <div className="sidebar-layout">
          <SidebarHeader />
          <SidebarContent isCollapsed={collapsed} />
          <SidebarFooter />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
