import { useState } from "react";

const MenuIcon = ({ expandPanel, setExpandPanel }) => {
  const [isClosed, setClosed] = useState(true);

  const handleClick = (e) => {
    e.stopPropagation();
    setExpandPanel(!expandPanel);
    setClosed(!isClosed);
  };

  return (
    <div
      className={`laptop:hidden ml-3 menu-icon-container ${
        isClosed ? "" : "change"
      }`}
      onClick={handleClick}
    >
      <div className="menu-icon-bar1"></div>
      <div className="menu-icon-bar2"></div>
      <div className="menu-icon-bar3"></div>
    </div>
  );
};

export default MenuIcon;
