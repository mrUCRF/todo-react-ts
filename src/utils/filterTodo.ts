import { ITodoList } from "../ features/todo/TodoSlice";

export enum FilterType {
  ACTIVE = "active",
  COMPLETED = "completed",
  ALL = "all",
}

export const filterTodo = (taskList: ITodoList[], value: FilterType) => {
  let activeTask = [];

  switch (value) {
    case FilterType.ACTIVE:
      activeTask = taskList.filter((i: ITodoList) => !i.status);
      return activeTask;
    case FilterType.COMPLETED:
      activeTask = taskList.filter((i: ITodoList) => i.status);
      return activeTask;
    case FilterType.ALL:
      return taskList;
  }
};
