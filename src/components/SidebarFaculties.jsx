import React, { useState } from 'react';
import SidebarButton from './SidebarButton';
import { sideBarFac } from '../constants';

const SidebarFaculties = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Set default active index to 1 (second item)

    const handleButtonClick = (index) => {
      setActiveIndex(index);
    };
  
    return (
  
      <>
      <div className="relative md:w-1/5  mx-1 mt-5">
          <div>
          {sideBarFac.map((button, index) => (
              <SidebarButton
              key={button.id}
              dashIcon={button.dashIcon}
              dashText={button.dashText}
              isActive={index === activeIndex}
              onClick={() => handleButtonClick(index)}
              />
          ))}
          </div>
      </div>
      </>
    );
  };

export default SidebarFaculties
