import React from 'react'
import SidebarFaculties from '../components/SidebarFaculties'
import FacList from '../components/FacList'

const Faculties = () => {
  return (
    <>
      <div className="flex mx-auto max-w-[1800px] px-4">
        <SidebarFaculties/>
        <FacList/>
      </div>
    </>
  )
}

export default Faculties
