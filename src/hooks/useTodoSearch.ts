import { useEffect } from "react";
import { useState } from "react";
import { ITodo } from "../ features/todo/TodoSlice";

type TodoSearchTuple = [
  string,
  ITodo[],
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

export const useTodoSearch = (todoList: ITodo[]): TodoSearchTuple => {
  const [searchQ, setSearch] = useState<string>("");

  const [searchResult, setSearchResult] = useState<ITodo[]>(todoList);
  useEffect(() => {
    setSearchResult(todoList);
  }, [todoList]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
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
    setSearch(value);
    setSearchResult(newList);
  };

  return [searchQ, searchResult, onSearch];
};
