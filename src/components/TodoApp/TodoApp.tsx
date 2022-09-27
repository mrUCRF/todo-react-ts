import { useCallback, useEffect, useId, useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import { useSearch } from "../hook/hook";
import { useAppSelector } from "../redux/hooks/redux";
import { RootState } from "../redux/store/store";
import SearchTodo from "../SearchTodo/SearchTodo";
import TaskHeader from "../TaskHeader/TaskHeader";
import { TaskList } from "../TaskList/TaskList";

export interface ITodoList {
  id: number;
  name: string;
  status: boolean;
}

export const TodoApp = () => {
  const todoList = useAppSelector((state: RootState) => {
    return state.todoReducer;
  });

  const [filtered, setFiltered] = useState<ITodoList[]>([]);
  // const { filteredData, setInputData } = useSearch(todoList);
  useEffect(() => {
    setFiltered(todoList);
  }, [todoList]);

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

                  <AddTodoForm />
                  <SearchTodo setFiltered={setFiltered} todoList={todoList} />

                  <table className="table text-white mb-0">
                    <TaskHeader />
                    <TaskList filteredTodo={filtered} />
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
