import { Fragment, useEffect, useState } from "react";
import { BtnSizeType, BtnStyleType, CustomButton } from "../Button/Button";
import { EditTaskMod } from "../EditTaskMod/EditTaskMod";
import { useAppDispatch } from "../redux/hooks/redux";
import { TodoSlice } from "../redux/reducers/TodoSlice";
import { Task } from "../Task/Task";
import { ITodoList } from "../../ Features/TodoApp/TodoApp";

interface Props {
  searchResult: any;
}

export const TaskList: React.FC<Props> = ({ searchResult }) => {
  const { completedTodo } = TodoSlice.actions;
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
