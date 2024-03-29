import { Fragment, useEffect } from "react";
import { CustomInput, InputStyleType } from "../Input/Input";
import { ITodoList } from "../TodoApp/TodoApp";

interface Props {
  todoList: ITodoList[];
  setFiltered: (e: any) => void;
}

const SearchTodo: React.FC<Props> = ({ todoList, setFiltered }) => {
  useEffect(() => {
    setFiltered(todoList);
  }, [setFiltered, todoList]);

  const search = (value: string) => {
    let currentTodos = [];
    let newList = [];
    if (value !== "") {
      currentTodos = todoList;
      newList = currentTodos.filter((todo) => {
        const lc = todo.name.toLowerCase();
        const filter = value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = todoList;
    }
    setFiltered(newList);
  };

  return (
    <Fragment>
      <CustomInput
        style={InputStyleType.SEARCH_INPUT}
        onChange={({ target: { value } }) => search(value)}
        placeholder="Search"
      />
    </Fragment>
  );
};

export default SearchTodo;
