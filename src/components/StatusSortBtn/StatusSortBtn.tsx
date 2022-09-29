import { ITodoList } from "../../ features/todo/TodoSlice";
import { filterTodo, FilterType } from "../../utils/filterTodo";

interface Props {
  todoList: ITodoList[];
  setSortData: (e: ITodoList[]) => void;
}

export const StatusSortBtn: React.FC<Props> = ({ todoList, setSortData }) => {
  const getSort = (value: FilterType) => {
    let result = filterTodo(todoList, value);
    setSortData(result);
  };

  return (
    <div>
      sorting to:
      <div>
        <div
          className="btn-group mb-2"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger mr-2"
            onClick={() => getSort(FilterType.ACTIVE)}
          >
            Active
          </button>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={() => getSort(FilterType.ALL)}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-success mr-2"
            onClick={() => getSort(FilterType.COMPLETED)}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};
