import { useEffect } from "react";
import { useState } from "react";
import { ITodoList } from "../ features/todo/TodoApp";

type TodoSearchTuple = [
  string,
  ITodoList[] | null,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

export const useTodoSearch = (todoList: ITodoList[]): TodoSearchTuple => {
  const [searchQ, setSearch] = useState<string>("");

  const [searchResult, setSearchResult] = useState<ITodoList[]>([]);

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
