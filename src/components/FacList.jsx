import React from 'react';
import FacultyCardLeft from './faculty/FacultyCardLeft';
import FacultyCardRight from './faculty/FacultyCardRight';


const FacList = () => {

  return (
    <>
      <div className="main-paper md:w-4/5 mt-5 ml-5 px-7 py-3">
        <div className="flex justify-between items-center">

            <h1 className='text-xl font-semibold'>Faculty List</h1>
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
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">

            <FacultyCardLeft
                imgUrl="./cs.png"
                faculty="Computer Science"
            />
            <FacultyCardRight
                imgUrl="./hrm.png"
                faculty="HRM"
            />
            <FacultyCardRight
                imgUrl="./eng.png"
                faculty="Engineering"
            />
            <FacultyCardLeft
                imgUrl="./doc.png"
                faculty="Medicine"
            />
            <FacultyCardLeft
                imgUrl="./mgr.png"
                faculty="Business Management"
            />
            <FacultyCardRight
                imgUrl="./music.png"
                faculty="Arts"
            />

        </div>

       
      </div>
    </>
  );
}

export default FacList;
