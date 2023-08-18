import React from 'react'
import BodyRow1 from './BodyRow1'
import FileView from './FileView'
import { files } from '../constants';
const DocumentsBody = () => {
  return (
    <>
    <div className="relative w-[85%] ">

      <BodyRow1 />
      {files.map((file, i) => (
        <FileView 
            key = {file.id}
            fileName = {file.fileName}
            date = {file.date}

        />
      ))}
     
    </div>
    </>
  )
}

export default DocumentsBody
