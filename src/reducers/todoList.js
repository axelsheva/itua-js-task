import { TASK_ADD, TASK_UPDATE, TASK_DELETE } from "../actions/todoList";

const initialState = [
  {
    id: 1,
    title: "Купить молоко",
    priority: 2,
    projectName: "Покупки",
    description: "Описание задачи"
  },
  {
    id: 2,
    title: "Продать сахар",
    priority: 1,
    projectName: "Продажи",
    description: "Описание задачи"
  },
  {
    id: 3,
    title: "Выучить английские слова",
    priority: 1,
    projectName: "Обучение",
    description: "amateur, boast, courage, district, generosity"
  }
];

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      const lastId = state.length ? state[state.length - 1].id : 1;
      action.payload.id = lastId + 1;

      return [...state, action.payload];
    case TASK_UPDATE:
      return state.map(task => {
        if (task.id === action.payload.id) {
          return action.payload;
        }

        return task;
      });
    case TASK_DELETE:
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

export default todoList;
