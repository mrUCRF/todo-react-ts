import { ITodoList } from "../ features/todo/TodoSlice";

export const filterTodo = (taskList: ITodoList[], value: string) => {
  let activeTask = [];
  if (value) {
    if (value === "active") {
      activeTask = taskList.filter((i: ITodoList) => !i.status);
      return activeTask;
    } else if (value === "completed") {
      activeTask = taskList.filter((i: ITodoList) => i.status);
      return activeTask;
    } else if (value === "all") {
      return taskList;
    }
  }
  return taskList;
};
