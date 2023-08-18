import React from 'react'

const FileView = (props) => {
  return (
    <>
      <div className="rowWhite mt-5 hover:shadow-md  bg-white py-2 rounded-[10px] mx-10 px-7 flex justify-between w-[97%] items-center">
        <div className="flex items-center justify-between ">
            <div className="file ">
                <img src="./pdf.png" alt="pdf" />
            </div>
            <div className="fileName">
                <p className='font-semibold px-5'>{props.fileName}</p>
            </div>
        </div>
        <div className="date">
            <p className='bg-gray-200 py-1 px-5 rounded-[10px]'>{props.date}</p>
        </div>
        <div className="flex">
            <div className="download">
                <button className='hover:font-semibold flex items-center bg-green-200 hover:bg-green-300 py-1 px-5 rounded-[10px]'>
                    <img src="./download.png" alt="download" className='bg-white p-1 rounded-[10px]' />
                    <p className='pl-3 '>Download</p>
                </button>
            </div>
            <div className="delete pl-5 ">
                <button className='hover:font-semibold flex items-center bg-red-200 hover:bg-red-300 py-1 px-5 rounded-[10px]'>
                    <img src="./delete.png" alt="download" className='bg-white p-1 rounded-[10px]' />
                    <p className='pl-3 '>Delete</p>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default FileView
