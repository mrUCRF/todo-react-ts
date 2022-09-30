import { useEffect, useMemo } from "react";
import { useState } from "react";
import { ITodo } from "../ features/todo/TodoSlice";

type TodoSearchTuple = [
  string,
  ITodo[],
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

export const useTodoSearch = (todoList: ITodo[]): TodoSearchTuple => {
  const [searchQ, setSearch] = useState<string>("");

  const [searchResult, setSearchResult] = useState<ITodo[]>([]);

  const todos = useMemo(() => {
    if (searchQ !== "") {
      return searchResult;
    }
    return todoList;
  }, [todoList, searchQ, searchResult]);


  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let currentTodos = [];
    let newList = [];

    if (value !== "") {
      currentTodos = todos;
      newList = currentTodos.filter((todo: { name: string }) => {
        const lc = todo.name.toLowerCase();
        const filter = value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = todos;
    }
    setSearch(value);
    setSearchResult(newList);
  };

  return [searchQ, todos, onSearch];
};
