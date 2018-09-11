export const TASK_ADD = "TASK_ADD";
export const TASK_UPDATE = "TASK_UPDATE";
export const TASK_DELETE = "TASK_DELETE";

export const addTask = task => ({ type: TASK_ADD, payload: task });

export const updateTask = task => ({ type: TASK_UPDATE, payload: task });

export const deleteTaskById = id => ({ type: TASK_DELETE, payload: id });
