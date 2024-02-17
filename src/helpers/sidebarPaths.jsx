import { iconsHelper } from "./iconsHelper";

const {
  BiMessageSquareAdd,
  MdOutlineDoneAll, 
  MdRemoveDone,
  BsFillArrowRightCircleFill,
  LuListOrdered,
  SiTask
} = iconsHelper()


export const siderbarPaths = [
  
  {
    name: "New Task",
    icon: <BiMessageSquareAdd className="w-[30px] h-[30px]"/>,
    path: "/add",
    id: 2
  },
  {
    name: "Task List",
    icon: <LuListOrdered className="w-[30px] h-[30px]"/>,
    path: "/",
    id: 1
  },
  {
    name: "Tasks Done",
    icon: <MdOutlineDoneAll className="w-[30px] h-[30px]" />,
    path: "/done",
    id: 3
  },
  {
    name: "Tasks Undone",
    icon: <MdRemoveDone className="w-[30px] h-[30px]" />,
    path: "/undone",
    id: 4
  },
];