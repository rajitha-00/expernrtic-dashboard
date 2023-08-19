import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Accodion from './Accodion'

const FolderPaper = () => {
  return (
    <>
      <div className="bg-white w-1/4 min-h-96 rounded-[20px]">
        <div className="mt-5 flex items-center justify-between container w-[90%] mx-5 p-4 bg-amber-100 rounded-[20px]">
            <div className="flex items-center">
                <Popover className="relative">
                  <Popover.Button>

                      <img src="./select.png" alt="" />
                  </Popover.Button>
                  <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                  >
                      <Popover.Panel className="absolute bg-white shadow-md min-h-[50vh] items-center rounded-[20px] justify-center z-10 mt-5 flex w-screen max-w-max translate-x px-4">
                          <p>New Folder Creations Here</p>
                      </Popover.Panel>
                  </Transition>
                </Popover> 
                <h2 className='font-semibold text-teal-600 px-2'>New Folder</h2>
            </div>
            <img src="./colormenu.png" alt="" />
        </div>
        <Accodion/>
      </div>
    </>
  )
}

export default FolderPaper
