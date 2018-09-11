import React from "react";

import TodoList from "./containers/TodoList";
import ControlPanel from "./containers/ControlPanel";
import TaskForm from "./containers/TaskForm";

const App = () => (
  <div className="app">
    <TodoList />
    <ControlPanel />
    <TaskForm />
  </div>
);

export default App;
