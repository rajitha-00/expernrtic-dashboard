
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"
import SidebarSelect from "../SidebarSelect"

const SidebarContext = createContext()

const SideBarResponsive = ({ children }) => {

    const [expanded, setExpanded] = useState(true)
  
    return (
      <aside className="h-screen">
        <nav className=" flex flex-col bg-white  ">
            {/* <SidebarSelect /> */}
            <SidebarContext.Provider value={{ expanded }}>
                <ul className="flex-1 px-3">{children}</ul>
            </SidebarContext.Provider>
            <div className="p-4 pb-2 flex justify-end items-center">

                <button
                onClick={() => setExpanded((curr) => !curr)}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                >
                {expanded ? <ChevronFirst /> : <ChevronLast />}
                </button>
            </div>
    
  
        </nav>
      </aside>
  )
}

export default SideBarResponsive

export function SidebarItem({ dashIcon, dashText, isActive, alert }) {
    const { expanded } = useContext(SidebarContext)
    
    return (
      <li
        className={`
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            isActive
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          }
      `}
      >
        <div className="icon mr-2">
            <img src={dashIcon} className="w-8" alt="" />
        </div>
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-80 ml-3" : "w-0"
          }`}
        >
          {dashText}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
  
        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {dashText}
          </div>
        )}
      </li>
    )
  }