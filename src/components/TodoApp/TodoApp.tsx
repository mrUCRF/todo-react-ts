import { useCallback, useEffect, useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import SearchTodo from "../SearchTodo/SearchTodo";
import TaskHeader from "../TaskHeader/TaskHeader";
import { TaskList } from "../TaskList/TaskList";

export interface ITodoList {
  id: number;
  name: string;
  status: boolean;
}

const initialState = [
  {
    id: 1,
    name: "todo1",
    status: false,
  },
  {
    id: 2,
    name: "todo2",
    status: false,
  },
];

export const TodoApp = () => {
  let [todoList, setTodo] = useState<ITodoList[]>(initialState);
  let [filtered, setFiltered] = useState<ITodoList[]>([]);
  console.log(filtered);
  useEffect(() => {
    setFiltered(todoList);
  }, [todoList]);

  const search = useCallback((value: string) => {
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
  }, []);

  return (
    <div>
      <section className="vh-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">
              <div className="card mask-custom">
                <div className="card-body p-4 text-white">
                  <div className="text-center pt-3 pb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                      alt="Check"
                      width="60"
                    />
                    <h2 className="my-4">Task List</h2>
                  </div>

                  <div className="form-group row">
                    <AddTodoForm todoList={todoList} setTodo={setTodo} />
                  </div>

                  <SearchTodo search={search} />

                  <table className="table text-white mb-0">
                    <thead>
                      <TaskHeader />
                    </thead>
                    <tbody>
                      <TaskList
                        todoList={todoList}
                        setTodo={setTodo}
                        filteredTodo={filtered}
                        setFiltered={setFiltered}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
