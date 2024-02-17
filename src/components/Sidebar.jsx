import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { siderbarPaths, iconsHelper } from "../helpers";

const { BsFillArrowRightCircleFill, SiTask } = iconsHelper();


export const Sidebar = () => {

  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();

  return (
   <div
    className={
      `fixed top-1 left-1 h-calc bg-sky-700 rounded-md p-3
       ${open ? "w-48" : "w-16" } duration-300 `
    }
   >
    
      <div
        className={
          `absolute -right-3 top-6 cursor-pointer
          ${open && " rotate-180 duration-300"}`
        }
        onClick={() => setOpen(!open)}
      >
        <BsFillArrowRightCircleFill className="w-[25px] h-[25px] bg-black rounded-full" />
      </div>

      <div
        className={
          `flex items-center gap-x-2 mt-1`
        }
      >
        <div>
          <SiTask className={`w-[40px] h-[40px] ${open && "rotate-[360deg]"} duration-300`}/>
        </div>
        
        <h1 className={`${!open && "hidden"} font-medium text-lg`}>TASK APP</h1>
      </div>


      <ul 
        className={`flex flex-col gap-y-4 mt-10`}
      >
        {
          siderbarPaths.map(path => {
            return (
              <li 
                key={path.id}
                className={
                  `${pathname === path.path && "bg-sky-800 rounded-md"}`
                }
              >
                <Link 
                  to={path.path}
                  className={`flex items-center gap-x-3 p-1`}
                >
                  <div>
                    {path.icon}
                  </div>
                  <span
                    className={
                      `${!open && "hidden"}
                      duration-400 origin-left w-full
                      font-light text-lg`
                    }
                  >{path.name}</span>
                </Link>
              </li>
            )
          })
        }
      </ul>
   </div>
  );
};
