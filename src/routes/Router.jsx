import { Route, Routes } from "react-router-dom";
import { AddTask } from "../pages/AddTask";
import { TaskList } from "../pages/TaskList";
import { DoneTaskList } from "../pages/DoneTasks";
import { EditTask } from "../pages/EditTask";
import { UndoneTaskList } from "../pages/UndoneTasks";

export const MyRouter = () => {
  return (
    <div className={`ml-[80px]`}>
      <Routes>
        <Route path="/" element={ <TaskList/> } />
        <Route path="/add" element={ <AddTask/> } />
        <Route path="/edit/:id" element={ <EditTask/> } />
        <Route path="/done" element={ <DoneTaskList/> } />
        <Route path="/undone" element={ <UndoneTaskList/> } />
        <Route path="*" element={ <h1>Not Found</h1> } />
      </Routes>
    </div>
  );
};