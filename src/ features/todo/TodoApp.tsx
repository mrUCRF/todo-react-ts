import AddTodoForm from "../../components/AddTodoForm/AddTodoForm";
import { useTodoSearch } from "../../hooks/useTodoSearch";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import SearchTodo from "../../components/SearchTodo/SearchTodo";
import TaskHeader from "../../components/TaskHeader/TaskHeader";
import { TaskList } from "../../components/TaskList/TaskList";
import { useNavigate } from "react-router-dom";
import { StatusSortBtn } from "../../components/StatusSortBtn/StatusSortBtn";
import { useEffect, useState } from "react";
import { ITodo } from "./TodoSlice";

export const TodoApp = () => {
  const todoList = useAppSelector((state: RootState): ITodo[] => {
    return state.todo.todos;
  });

  const [sortData, setSortData] = useState(todoList);
  useEffect(() => {
    setSortData(todoList);
  }, [todoList]);
  const [searchQ, searchResult, onSearch] = useTodoSearch(sortData);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

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
                    <button onClick={handleClick} type="button">
                      goToLoginPage
                    </button>
                  </div>
                  <StatusSortBtn
                    todoList={todoList}
                    setSortData={setSortData}
                  />
                  <AddTodoForm />
                  <SearchTodo onSearch={onSearch} searchQ={searchQ} />

                  <table className="table text-white mb-0">
                    <TaskHeader />
                    <TaskList searchResult={searchResult} />
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
