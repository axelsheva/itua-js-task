import { TASK_FORM_INPUT_CHANGE, EDIT_TASK } from "../actions/taskForm";
import { CLOSE_TASK_FORM } from "../actions/control";

const initialState = {
  id: "",
  title: "",
  projectName: "",
  priority: 1,
  description: ""
};

const taskForm = (state = initialState, action) => {
  switch (action.type) {
    case TASK_FORM_INPUT_CHANGE:
      return { ...state, [action.payload.name]: action.payload.value };
    case EDIT_TASK:
      return { ...state, ...action.payload };
    case CLOSE_TASK_FORM:
      return initialState;
    default:
      return state;
  }
};

export default taskForm;
