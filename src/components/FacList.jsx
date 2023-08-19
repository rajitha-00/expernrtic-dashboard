import React from 'react';
import FacultyCardLeft from './faculty/FacultyCardLeft';
import FacultyCardRight from './faculty/FacultyCardRight';

const faculties = [
    {id:1, imgUrl: './cs.png', faculty: 'Faculty of Computer Science'},
    {id:2, imgUrl: './hrm.png', faculty: 'Faculty of HRM'},
    {id:3, imgUrl: './eng.png', faculty: 'Faculty of Engineering'},
    {id:4, imgUrl: './doc.png', faculty: 'Faculty of Medicine'},
    {id:5, imgUrl: './mgr.png', faculty: 'Faculty of Business Management'},
    {id:6, imgUrl: './music.png', faculty: 'Faculty of Arts'},
];


const FacList = () => {

  return (
    <>
      <div className="main-paper w-[85%] mt-5 ml-5 px-7 py-3">
        <h1 className='text-xl font-semibold'>Faculty List</h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <FacultyCardLeft
                imgUrl="./cs.png"
                faculty="Faculty of Computer Science"
            />
            <FacultyCardRight
                imgUrl="./hrm.png"
                faculty="Faculty of HRM"
            />
            <FacultyCardRight
                imgUrl="./eng.png"
                faculty="Faculty of Engineering"
            />
            <FacultyCardLeft
                imgUrl="./doc.png"
                faculty="Faculty of Medicine"
            />
            <FacultyCardLeft
                imgUrl="./mgr.png"
                faculty="Faculty of Business Management"
            />
            <FacultyCardRight
                imgUrl="./music.png"
                faculty="Faculty of Arts"
            />

        </div>

       
      </div>
    </>
  );
}

export default FacList;
