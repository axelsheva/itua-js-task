import { combineReducers } from "redux";
import todoList from "./todoList";
import control from "./control";
import taskForm from "./taskForm";

export default combineReducers({
  todoList,
  control,
  taskForm
});
