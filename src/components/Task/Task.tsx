import { Fragment } from "react";
import { BtnSizeType, BtnStyleType, CustomButton } from "../Button/Button";
import { ITodoList } from "../TodoApp/TodoApp";

export interface ITask {
  taskName: string;
  id: number;
  setEditMode: (e: any) => void;
  setValueEditInput: (e: any) => void;
  todoList: ITodoList[];
  setTodo: (e: any) => void;
}

export const Task: React.FC<ITask> = ({
  taskName,
  id,
  setEditMode,
  setValueEditInput,
  todoList,
  setTodo,
}) => {
  function editTodo(id: number, taskName: string) {
    setEditMode(id);
    setValueEditInput(taskName);
  }

  function deleteTodo(id: number) {
    let todo = [...todoList].filter((i) => i.id !== id);
    setTodo(todo);
  }

  return (
    <Fragment>
      <td className="align-middle col-sm-6">
        <span className="m-2">{taskName}</span>
      </td>
      <td>
        <CustomButton
          buttonText="Edit"
          btnStyle={BtnStyleType.WARNING}
          btnSize={BtnSizeType.EDIT_SAVE_DELETE}
          onClick={() => editTodo(id, taskName)}
        />
      </td>
      <td>
        <CustomButton
          buttonText="Delete"
          btnStyle={BtnStyleType.DANGER}
          btnSize={BtnSizeType.EDIT_SAVE_DELETE}
          onClick={() => deleteTodo(id)}
        />
      </td>
    </Fragment>
  );
};
