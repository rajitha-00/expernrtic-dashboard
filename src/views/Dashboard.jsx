import React from 'react'
import Sidebar from '../components/Sidebar'
import Documents from '../components/Documents'

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between mx-auto max-w-[1920px] px-4 ">
        <Sidebar />
        <Documents />
      </div>
    </>
  )
}

export default Dashboard
