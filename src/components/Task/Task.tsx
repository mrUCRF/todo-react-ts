import { Fragment } from "react";
import { BtnSizeType, BtnStyleType, CustomButton } from "../Button/Button";
import { useAppDispatch } from "../../app/hooks";
import { deleteTodo } from "../../ features/todo/TodoSlice";

export interface ITask {
  taskName: string;
  id: number;
  setEditMode: (e: any) => void;
  setValueEditInput: (e: any) => void;
}

export const Task: React.FC<ITask> = ({
  taskName,
  id,
  setEditMode,
  setValueEditInput,
}) => {
  const dispatch = useAppDispatch();

  const editTodo = (id: number, taskName: string) => {
    setEditMode(id);
    setValueEditInput(taskName);
  };

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
          onClick={() => dispatch(deleteTodo(id))}
        />
      </td>
    </Fragment>
  );
};
