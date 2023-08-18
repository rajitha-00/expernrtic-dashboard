import React from 'react'
import Accodion from './Accodion'

const FolderPaper = () => {
  return (
    <>
      <div className="bg-white w-1/4 min-h-96 rounded-[20px]">
        <div className="flex items-center justify-between">
            <h2 className='text-teal-600'>New Folder</h2>
        </div>
        <Accodion/>
      </div>
    </>
  )
}

export default FolderPaper
