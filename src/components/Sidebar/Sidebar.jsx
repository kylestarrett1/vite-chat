import { useState } from 'react';

import SidebarHeader from './Layout/SidebarHeader';
import SidebarContent from './Layout/SidebarContent';
import SidebarFooter from './Layout/SidebarFooter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [addCollapsed, setAddCollapsed] = useState('');

  const toggleCollapse = (e) => {
    if (addCollapsed === '') {
      setAddCollapsed('collapsed');
      e.target.classList.add('collapsed');
    } else {
      setAddCollapsed('');
    }
  };

  return (
    <div className="layout has-sidebar fixed-sidebar fixed-header">
      <aside id="sidebar" className={`sidebar break-point-sm ${addCollapsed}`}>
        <a
          id="btn-collapse"
          className="sidebar-collapser"
          onClick={toggleCollapse}
        >
          <FontAwesomeIcon className="icon" icon={faChevronLeft} />
        </a>
        <div className="sidebar-layout">
          <SidebarHeader />
          <SidebarContent />
          <SidebarFooter />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;