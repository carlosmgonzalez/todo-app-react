import { createSlice, prepareAutoBatched } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  tasksDone: [],
  tasksUndone: []
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, {payload}) => {
      state.tasks = [...state.tasks, payload];
      state.tasksUndone = state.tasks.filter(task => task.done == false);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, {payload}) => {
      state.tasks = state.tasks.filter(task => task.id !== payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask: (state, {payload}) => {
      state.tasks = state.tasks.map(task => task.id == payload.id ? payload : task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    doneTask: (state, {payload}) => {
      state.tasks = state.tasks.map(task => task.id == payload.id ? {...payload, done: !payload.done} : task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));

      state.tasksDone = state.tasks.filter(task => task.done == true);
      state.tasksUndone = state.tasks.filter(task => task.done == false);
    },
    initialTasks: (state) => {
      if (JSON.parse(localStorage.getItem("tasks"))) {
        state.tasks = JSON.parse(localStorage.getItem("tasks"));
        state.tasksDone = state.tasks.filter(task => task.done == true);
        state.tasksUndone = state.tasks.filter(task => task.done == false);
      };
    }
  }
});

export const {addTask, deleteTask, updateTask, doneTask, initialTasks} = taskSlice.actions;