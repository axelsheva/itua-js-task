export const TASK_FORM_INPUT_CHANGE = "TASK_FORM_INPUT_CHANGE";
export const EDIT_TASK = "EDIT_TASK";

export const changeTaskFormInput = (name, value) => ({
  type: TASK_FORM_INPUT_CHANGE,
  payload: { name, value }
});

export const editTask = task => ({ type: EDIT_TASK, payload: task });
