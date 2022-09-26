import { Fragment, useEffect, useState } from "react";
import { BtnSizeType, BtnStyleType, CustomButton } from "../Button/Button";
import { EditTaskMod } from "../EditTaskMod/EditTaskMod";
import { useAppDispatch, useAppSelector } from "../redux/hooks/redux";
import { TodoSlice } from "../redux/reducers/TodoSlice";
import { Task } from "../Task/Task";
import { ITodoList } from "../TodoApp/TodoApp";

interface Props {
  filteredTodo: ITodoList[];
}

export const TaskList: React.FC<Props> = ({ filteredTodo }) => {
  const { completedTodo1 } = TodoSlice.actions;
  const dispatch = useAppDispatch();

  const [editMode, setEditMode] = useState<null | number>(null);
  const [valueEditInput, setValueEditInput] = useState("");

  return (
    <Fragment>
      <tbody>
        {filteredTodo.map((i: ITodoList) => (
          <tr className="fw-normal" key={i.id}>
            <th>
              <CustomButton
                btnStyle={i.status ? BtnStyleType.SUCCESS : BtnStyleType.DANGER}
                buttonText="+"
                onClick={() => dispatch(completedTodo1(i.id))}
              />
            </th>

            {editMode === i.id ? (
              <EditTaskMod
                setValue={setValueEditInput}
                value={valueEditInput}
                id={i.id}
                setEditMode={setEditMode}
              />
            ) : (
              <Task
                taskName={i.name}
                id={i.id}
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
