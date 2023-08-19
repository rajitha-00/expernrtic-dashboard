import React from 'react'

const FacultyCardRight = (props) => {
  return (
    <>
      <div className="right-card relative flex h-52 hover:shadow-lg bg-gray-200 p-4 justify-between">
        <div className="glassCard flex w-full items-center justify-center">
          <div>
            <h1 className='text-3xl text-start font-semibold pr-20'>Faculty of {props.faculty}</h1>
          </div>
        </div>

          <img src={props.imgUrl} className='absolute right-0 bottom-0 ' alt="" />
      </div>
    </>
  )
}

export default FacultyCardRight
