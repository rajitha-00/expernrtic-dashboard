import React, { useState } from 'react';
// import expandIcon from '../../public/ExpandArrow.png';
// import collapseIcon from '../assets/collapse.png';

const NestedAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" active:bg-green-200  rounded-[10px] p-2 mb-2">
      <div
        className="flex  items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <span className="text-gray-500">
          {isOpen ? (
            <img src='./ExpandArrow.png' alt="Collapse" />
          ) : (
            <img src='./CollapseArrow.png' alt="Expand" />
          )}
        </span>
        <img src='./Folder.png' alt="Folder" className='pl-3' />
        <h2 className="pl-3 text-lg font-semibold">{title}</h2>
      </div>
      {isOpen && (
        <div className="ml-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default NestedAccordion;
