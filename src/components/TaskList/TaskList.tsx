import { Fragment, useEffect, useState } from "react";
import { BtnSizeType, BtnStyleType, CustomButton } from "../Button/Button";
import { EditTaskMod } from "../EditTaskMode/EditTaskMode";
import { useAppDispatch } from "../../app/hooks";
import { Task } from "../Task/Task";
import { ITodoList } from "../../ features/todo/TodoApp";
import { completedTodo } from "../../ features/todo/TodoSlice";

interface Props {
  searchResult: any;
}

export const TaskList: React.FC<Props> = ({ searchResult }) => {
  const dispatch = useAppDispatch();

  const [editMode, setEditMode] = useState<null | number>(null);
  const [valueEditInput, setValueEditInput] = useState("");

  return (
    <Fragment>
      <tbody>
        {searchResult.map((i: ITodoList) => (
          <tr className="fw-normal" key={i.id}>
            <th>
              <CustomButton
                btnStyle={i.status ? BtnStyleType.SUCCESS : BtnStyleType.DANGER}
                buttonText="+"
                onClick={() => dispatch(completedTodo(i.id))}
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
