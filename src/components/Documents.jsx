import React from 'react';
import FolderPaper from './FolderPaper';
import DocumentsBody from './DocumentsBody';

const Documents = () => {
  return (
    <>
      <div className="main-paper w-full mt-5 ml-5 px-7 py-3">
        <h1 className='text-xl font-semibold'>Documents</h1>
        {/* Apply responsive flex classes */}
        <div className="flex mt-2 lg:flex-row sm:flex-col ">
          <FolderPaper />
          <DocumentsBody />
        </div>
      </div>
    </>
  );
}

export default Documents;
