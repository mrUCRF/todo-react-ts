import { Fragment, useState } from "react";
import { BtnStyleType, CustomButton } from "../Button/CustomButton";
import { EditTaskMod } from "../EditTaskMode/EditTaskMode";
import { useAppDispatch } from "../../app/hooks";
import { Task } from "../Task/Task";
import { completedTodo, ITodo } from "../../ features/todo/TodoSlice";

interface Props {
  todos: ITodo[];
}

export const TaskList: React.FC<Props> = ({ todos }) => {
  const dispatch = useAppDispatch();

  const [editMode, setEditMode] = useState<null | string>(null);
  const [valueEditInput, setValueEditInput] = useState("");

  return (
    <Fragment>
      <tbody>
        {todos.map((todo: ITodo) => (
          <tr className="fw-normal" key={todo.id}>
            <th>
              <CustomButton
                btnStyle={
                  todo.status ? BtnStyleType.SUCCESS : BtnStyleType.DANGER
                }
                buttonText="+"
                onClick={() => dispatch(completedTodo(todo.id))}
              />
            </th>

            {editMode === todo.id ? (
              <EditTaskMod
                setValue={setValueEditInput}
                value={valueEditInput}
                id={todo.id}
                setEditMode={setEditMode}
              />
            ) : (
              <Task
                taskName={todo.name}
                id={todo.id}
                setEditMode={setEditMode}
                setValueEditInput={setValueEditInput}
              />
            )}
          </tr>
        ))}
      </tbody>
    </Fragment>
  );
};
