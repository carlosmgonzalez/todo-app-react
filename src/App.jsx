import { BrowserRouter } from "react-router-dom";
import { MyRouter } from "./routes/Router";
import { Sidebar } from "./components/Sidebar";

import { useEffect } from "react";
import { initialTasks } from "./redux/taskSlice";
import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialTasks());
  }, []);

  return (
    <BrowserRouter>
      <div className="relative p-1">
        <Sidebar/>
        <MyRouter/>
      </div>
    </BrowserRouter>
  );
};

export default App;
