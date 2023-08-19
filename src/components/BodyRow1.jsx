import React, { useState, useEffect } from 'react';

const BodyRow1 = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check and event listener setup
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="lg:mx-10 flex justify-between w-[97%] items-center">
        <div className="flex ">
          <div className="search flex bg-white items-center px-4 rounded-[20px]">
            <input type="text" placeholder='Search' className='serch box active:border-none' />
            <div className="icon bg-amber-100 rounded-[10px] p-2">
              <img src="./search.png" alt="" />
            </div>
          </div>
          <div className="filter items-center mx-2 flex bg-black md:px-6 md:py-1 rounded-[20px]">
            {/* small screen only show image */}
            {isSmallScreen && (
              <div className="icon bg-white rounded-[10px] p-2 shadow-md">
                <img src="./filter.png" alt="" />
              </div>
            )}
            {/* small hidden and md visible */}
            {!isSmallScreen && (
              <>
              <div className="icon bg-white rounded-[10px] p-2">
                <img src="./filter.png" alt="" />
              </div>
              <h2 className='text-white font-semibold px-2 sm:text-sm'>Filter</h2>
              </>
            )}

          </div>
        </div>
        <div className="upload items-center flex bg-black md:px-6 md:py-1 rounded-[20px]">
          {/* small screen only show image */}
          {isSmallScreen && (
            <div className="icon bg-white rounded-[10px] p-2 shadow-md">
              <img src="./upload.png" alt="" />
            </div>
          )}
          {/* small hidden and md visible */}
          {!isSmallScreen && (
            <>
              <div className="icon bg-white rounded-[10px] p-2">
                <img src="./upload.png" alt="" />
              </div>
              <h2 className='text-white sm:text-sm md:font-semibold px-2 '>Upload File</h2>
            </>
          )}

        </div>
      </div>
    </>
  );
}

export default BodyRow1;
