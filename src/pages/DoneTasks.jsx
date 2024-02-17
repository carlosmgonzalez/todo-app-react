import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteTask, doneTask, initialTasks } from "../redux/taskSlice";
import { useEffect } from "react";

export const DoneTaskList = () => {

  const {tasksDone} = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2 bg-gray-900 rounded-md p-5 " >
      <h2 className="text-center text-xl font-medium" >
        Task List
      </h2>

      {
        tasksDone.length === 0 || tasksDone[0] === ""
          ? <h2 className={`text-center text-red-400 text-md bg-slate-800 py-2 rounded-md `}>there are not tasks</h2> 
          : ""
      }

      {tasksDone.map(task => (
          <div 
            key={task.id}
            className={
              `flex flex-col justify-between gap-y-2 px-3 py-2 bg-gray-800 rounded-md
               sm:flex-row sm:items-center`
            }
          >
            <div
              className={`flex flex-col items-start justify-between`}
            >
              <h5
                className={
                  `font-medium text-xl  border-r-indigo-600
                  ${task.done && "line-through"}`
                }
              >{task.title}</h5>
              <p
                className={
                  `font-light
                  ${task.done && "line-through"}`
                }
              >{task.description}</p>
            </div>

            <div
              className={
                `flex gap-3 self-end 
                 sm:self-auto`
              }
            >
              <Link
                to={`/edit/${task.id}`}
                className={`bg-sky-700 hover:bg-sky-800 px-2 py-1 rounded-md `}
              >Edit</Link>
              <button
                className={`bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md`}
                onClick={() => dispatch(doneTask(task))}
              >{task.done ? "Undone" : "Done"}</button>
              <button
                className={`bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md`}
                onClick={() => dispatch(deleteTask(task.id))}
              >Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  );
};
