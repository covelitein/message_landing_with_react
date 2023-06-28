const HamburgerIcon = ({ backgroundColor, toggled, toggle, ...props }) => {
  
  return (
    <div {...props} onClick={toggle}>
      <div className={`sub-menu-icon ${toggled ? "active" : ""}`}>
        <span style={{ backgroundColor }}></span>
        <span style={{ backgroundColor }}></span>
      </div>
    </div>
  );
};

export default HamburgerIcon
