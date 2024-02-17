import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addTask } from "../redux/taskSlice";

export const AddTask = () => {

  const dispatch = useDispatch();
  
  const [isEmpty, setIsEmpty] = useState(false);
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
    id: uuidv4()
  });

  const handlerTask = (event) => {
    const name = event.target.name;
    setTask({
      ...task,
      [name]: event.target.value 
    });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (task.title.length === 0 || task.description.length === 0) {
      return setIsEmpty(truw);
    };

    dispatch(addTask(task));

    setTask({
      title: "",
      description: ""
    });

    navigate("/");
  };

  return (
    <div
      className="flex flex-col gap-2 bg-gray-900 rounded-md p-5"
    >
      <h2 className="text-center text-xl font-medium"> Create New Task </h2>

      <form onSubmit={handlerSubmit} className={`flex flex-col gap-3 justify-center items-center w-full`}>

        <div className={`flex justify-center w-full`} >
          <input className={`bg-gray-800 w-5/6 p-2 rounded-md `}
            type="text" placeholder="Title" value={task.title} name="title" onChange={handlerTask}
          />
        </div>

        <div className={`flex justify-center w-full`} >
          <input className={`bg-gray-800 w-5/6 p-2 rounded-md`}
            type="text" placeholder="Description" value={task.description} name="description" onChange={handlerTask}
           />
        </div>

        <div className={`flex justify-end items-center gap-3 w-5/6`} >
          { isEmpty  ? <p className="font-thin text-xs text-red-500">The title and description are required</p> : "" }

          <button type="submit" className={`bg-green-600 hover:bg-green-700 px-2 py-1 rounded-md`}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
