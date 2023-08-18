import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { departments } from '../constants';

const SidebarSelect = () => {
    const [selected, setSelected] = useState(departments[0])
    return (
        <>
            <Listbox value={selected} onChange={setSelected} >
            {({ open }) => (
                <>
                <div className="relative">
                    <Listbox.Button className="relative flex items-center justify-between w-full cursor-default rounded-[20px] bg-black px-8 py-4">
                    <span className="flex items-center">
                        <span className=" block truncate text-white">{selected.name}</span>
                    </span>
                    <span className="pointer-events-none pl-3 ">
                        <img src='./downSelect.png' className="h-5 w-5" aria-hidden="true" />
                    </span>
                    </Listbox.Button>

                    <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-96 w-full overflow-auto rounded-[20px] bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {departments.map((depart) => (
                        <Listbox.Option
                            key={depart.id}
                            value={depart}
                        >
                            {({ selected, active }) => (
                            <>
                                <div className="flex items-center">
                                <span
                                className='text-white px-8 py-2'
                                >
                                    {depart.name}
                                </span>
                                </div>

                             
                            </>
                            )}
                        </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    </Transition>
                </div>
                </>
            )}
            </Listbox>
        </>
    )
}

export default SidebarSelect
