const SidebarFooter = () => {
  return (
    <div className="sidebar-footer">
      <div className="footer-box">
        <div>
          <img
            className="react-logo"
            src="https://user-images.githubusercontent.com/25878302/213938106-ca8f0485-3f30-4861-9188-2920ed7ab284.png"
            alt="react"
          />
        </div>
        <div style={{ paddingTop: '10px' }}>
          <span style={{ display: 'block', marginBottom: '10px' }}>
            Pro sidebar is also available as a react package
          </span>
          <div style={{ marginBottom: '15px' }}>
            <img
              alt="preview badge"
              src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
            />
          </div>
          <div>
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              rel="noreferrer"
              target="_blank"
            >
              Check it out!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;
