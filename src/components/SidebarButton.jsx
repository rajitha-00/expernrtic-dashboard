import React from 'react';

const SidebarButton = ({ dashIcon, dashText, isActive, onClick }) => {
  return (
    <div
      className={`items-center w-full flex mt-5 ${
        isActive ? 'bg-amber-200' : ''
      } rounded-[20px] px-5 py-2`}
      onClick={onClick}
    >
      <div className="icon mr-2">
        <img src={dashIcon} className="w-8" alt="" />
      </div>
      <h2 className="text-gray-700 font-semibold">{dashText}</h2>
    </div>
  );
};

export default SidebarButton;
