import React from 'react'
import FolderPaper from './FolderPaper'

const Documents = () => {
  return (
    <>
      <div className="main-paper w-[85%] mt-5 ml-5 px-7 py-3">
        <h1 className='text-xl font-semibold'>Documents </h1>
        <div className="flex mt-2">
            <FolderPaper />
        </div>
      </div>
    </>
  )
}

export default Documents
