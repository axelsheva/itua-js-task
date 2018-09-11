export const TOGGLE_PRIORITY = "TOGGLE_PRIORITY";
export const OPEN_TASK_FORM = "OPEN_TASK_FORM";
export const CLOSE_TASK_FORM = "CLOSE_TASK_FORM";
export const CHANGE_FILTER = "CHANGE_FILTER";

export const togglePriority = () => ({ type: TOGGLE_PRIORITY });

export const openTaskForm = () => ({ type: OPEN_TASK_FORM });
export const closeTaskForm = () => ({ type: CLOSE_TASK_FORM });

export const changeFilter = name => ({ type: CHANGE_FILTER, payload: name });
