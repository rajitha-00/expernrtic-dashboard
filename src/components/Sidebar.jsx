import React, { useState } from 'react';
import SidebarButton from './SidebarButton';
import { sideBarDash } from '../constants';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Set default active index to 1 (second item)

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {sideBarDash.map((button, index) => (
        <SidebarButton
          key={button.id}
          dashIcon={button.dashIcon}
          dashText={button.dashText}
          isActive={index === activeIndex}
          onClick={() => handleButtonClick(index)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
