import React from 'react'

const FacultyCardRight = (props) => {
  return (
    <>
      <div className="right-card relative flex h-52 bg-gray-200 p-4 justify-between">
        <div className="glassCard w-full items-center justify-center">
            <h1 className='text-3xl text-left font-semibold'>{props.faculty}</h1>
        </div>

          <img src={props.imgUrl} className='absolute right-0 bottom-0' alt="" />
      </div>
    </>
  )
}

export default FacultyCardRight
