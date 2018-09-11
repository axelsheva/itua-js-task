export const selectProjectsNames = state =>
  state.todoList
    .map(task => task.projectName)
    .filter((value, index, array) => array.indexOf(value) === index);

export const selectTodoList = state => {
  const todoList = state.control.filterBy
    ? state.todoList.filter(task => task.projectName === state.control.filterBy)
    : state.todoList;

  if (state.control.isPrioritySort) {
    return [...todoList].sort((a, b) => a.priority - b.priority);
  }

  return todoList;
};
