import { useEffect } from "react";
import { useState } from "react";
import { ITodoList } from "../ features/TodoApp";

export const useTodoSearch = (todoList: ITodoList[]) => {
  const [searchResult, setSearchResult] = useState<ITodoList[]>([]);

  useEffect(() => {
    setSearchResult(todoList);
  }, [todoList]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let currentTodos = [];
    let newList = [];
    if (value !== "") {
      currentTodos = todoList;
      newList = currentTodos.filter((todo: { name: string }) => {
        const lc = todo.name.toLowerCase();
        const filter = value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = todoList;
    }
    setSearchResult(newList);
  };

  return [searchResult, onSearch];
};
