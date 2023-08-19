import React from 'react'
import SidebarFaculties from '../components/SidebarFaculties'
import FacList from '../components/FacList'

const Faculties = () => {
  return (
    <>
      <div className="flex mx-auto max-w-[1800px] px-4">
        <SidebarFaculties
        className="w-1/3"
        />
        <FacList
        className="w-2/3"
        />
      </div>
    </>
  )
}

export default Faculties
