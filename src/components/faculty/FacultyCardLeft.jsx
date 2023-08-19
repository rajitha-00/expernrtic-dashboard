import React from 'react'

const FacultyCardLeft = (props) => {
  return (
    <>
      <div className="left-card flex h-52 relative bg-gray-200 p-4">
        <img src={props.imgUrl} className='absolute left-0 bottom-0' alt="" />
        <div className="glassCard w-full">
            <h1 className='text-3xl font-semibold text-right'>{props.faculty}</h1>
        </div>
      </div>
    </>
  )
}

export default FacultyCardLeft
