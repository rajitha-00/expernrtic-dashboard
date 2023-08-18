import React from 'react'

const BodyRow1 = () => {
  return (
    <>
    <div className="mx-10 flex justify-between w-[97%] items-center">
      <div className="flex ">
        <div className="search flex bg-white  items-center px-4 rounded-[20px]">
            <input type="text" placeholder='Search' className='serch box active:border-none' />
            <div className="icon bg-amber-100 rounded-[10px] p-2">
                <img src="./search.png" alt="" />
            </div>
        </div>
        <div className="filter items-center mx-2 flex bg-black px-6 py-1 rounded-[20px]">
            <div className="icon bg-white rounded-[10px] p-2">
                <img src="./filter.png" alt="" />
            </div>
            <h2 className='text-white font-semibold px-2'>Filter</h2>
        </div>
      </div>
      <div className="upload items-center flex bg-black px-6 py-1 rounded-[20px]">
        <div className="icon bg-white rounded-[10px] p-2">
            <img src="./upload.png" alt="" />
        </div>
        <h2 className='text-white font-semibold px-2'>Upload File</h2>
      </div>
    </div>
    </>
  )
}

export default BodyRow1
