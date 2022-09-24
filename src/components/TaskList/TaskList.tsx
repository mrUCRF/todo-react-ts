import { Fragment, useEffect, useState } from "react";
import { BtnSizeType, BtnStyleType, CustomButton } from "../Button/Button";
import { EditTaskMod } from "../EditTaskMod/EditTaskMod";
import { Task } from "../Task/Task";
import { ITodoList } from "../TodoApp/TodoApp";

interface Props {
  todoList: ITodoList[];
  setTodo: (todo: ITodoList[]) => void;
  filteredTodo: ITodoList[];
}

export const TaskList: React.FC<Props> = ({
  todoList,
  setTodo,
  filteredTodo,
}) => {
  const [editMode, setEditMode] = useState<null | number>(null);
  const [valueEditInput, setValueEditInput] = useState("");

  function completedTodo(id: number) {
    let todo = [...todoList].filter((i) => {
      if (i.id === id) {
        i.status = !i.status;
      }
      return i;
    });
    setTodo(todo);
  }

  return (
    <Fragment>
      <tbody>
        {filteredTodo.map((i: ITodoList) => (
          <tr className="fw-normal" key={i.id}>
            <th>
              <CustomButton
                btnStyle={i.status ? BtnStyleType.SUCCESS : BtnStyleType.DANGER}
                buttonText="+"
                onClick={() => completedTodo(i.id)}
              />
            </th>

            {editMode === i.id ? (
              <EditTaskMod
                setValue={setValueEditInput}
                value={valueEditInput}
                id={i.id}
                todoList={todoList}
                setTodo={setTodo}
                setEditMode={setEditMode}
              />
            ) : (
              <Task
                taskName={i.name}
                id={i.id}
                setEditMode={setEditMode}
                setValueEditInput={setValueEditInput}
                todoList={todoList}
                setTodo={setTodo}
              />
            )}
          </tr>
        ))}
      </tbody>
    </Fragment>
  );
};
