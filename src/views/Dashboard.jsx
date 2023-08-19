import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import Documents from '../components/Documents'
import SideBarResponsive, { SidebarItem } from '../components/dashboard/SideBarResponsive'
import { sideBarDash } from '../constants';

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="flex md:flex-row justify-between mx-auto max-w-[1920px] px-4 ">
        <SideBarResponsive >
          <SidebarItem text="Hi" />
          {sideBarDash.map((button, index) => (
            <SidebarItem
            key={button.id}
            dashIcon={button.dashIcon}
            dashText={button.dashText}
            isActive={index === activeIndex}
            onClick={() => handleButtonClick(index)}
            />
        ))}
        </SideBarResponsive>
        <Documents />
      </div>
    </>
  )
}

export default Dashboard
