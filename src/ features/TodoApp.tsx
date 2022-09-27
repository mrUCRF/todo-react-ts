import AddTodoForm from "../components/AddTodoForm/AddTodoForm";
import { useTodoSearch } from "../hooks/useTodoSearch";
import { useAppSelector } from "../app/redux-store/hooks/redux";
import { RootState } from "../app/store";
import SearchTodo from "../components/SearchTodo/SearchTodo";
import TaskHeader from "../components/TaskHeader/TaskHeader";
import { TaskList } from "../components/TaskList/TaskList";

export interface ITodoList {
  id: number;
  name: string;
  status: boolean;
}

export const TodoApp = () => {
  const todoList = useAppSelector((state: RootState) => {
    return state.todo;
  });

  const [searchResult, onSearch] = useTodoSearch(todoList);

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
                  <SearchTodo onSearch={onSearch} />

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