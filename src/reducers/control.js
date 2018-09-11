import {
  TOGGLE_PRIORITY,
  CHANGE_FILTER,
  OPEN_TASK_FORM,
  CLOSE_TASK_FORM
} from "../actions/control";
import { EDIT_TASK } from "../actions/taskForm";

const initialState = {
  isFormOpen: false,
  isPrioritySort: false,
  filterBy: ""
};

const control = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PRIORITY:
      return { ...state, isPrioritySort: !state.isPrioritySort };
    case CHANGE_FILTER:
      return { ...state, filterBy: action.payload };
    case OPEN_TASK_FORM:
    case EDIT_TASK:
      return { ...state, isFormOpen: true };
    case CLOSE_TASK_FORM:
      return { ...state, isFormOpen: false };
    default:
      return state;
  }
};

export default control;
