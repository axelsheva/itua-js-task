import React from "react";
import { connect } from "react-redux";

import Task from "./Task";
import { selectTodoList } from "../selectors/todoList";

const TodoList = ({ todoList }) => (
  <div className="todo-list">
    {todoList.map(task => (
      <Task key={task.id} {...task} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  todoList: selectTodoList(state)
});

export default connect(mapStateToProps)(TodoList);
