import SidebarHeader from './Layout/SidebarHeader';
import SidebarContent from './Layout/SidebarContent';
import SidebarFooter from './Layout/SidebarFooter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="layout has-sidebar fixed-sidebar fixed-header">
      <aside id="sidebar" className="sidebar break-point-sm">
        <a id="btn-collapse" className="sidebar-collapser">
          <FontAwesomeIcon className="icon" icon={faArrowLeft} />
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
