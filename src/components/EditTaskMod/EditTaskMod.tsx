import React, { Fragment } from "react";
import { BtnSizeType, BtnStyleType, CustomButton } from "../Button/Button";
import { CustomInput, InputStyleType } from "../Input/Input";
import { ITodoList } from "../TodoApp/TodoApp";

export interface IEditTaskMod {
  setValue: (e: string) => void;
  value: string;
  id: number;
  todoList: ITodoList[];
  setTodo: (todo: ITodoList[]) => void;
  setEditMode: (e: null) => void;
}

export const EditTaskMod: React.FC<IEditTaskMod> = ({
  setValue,
  value,
  id,
  todoList,
  setTodo,
  setEditMode,
}) => {
  function saveChanges(id: number) {
    let newTodo = [...todoList].map((i) => {
      if (i.id === id) {
        i.name = value;
      }
      return i;
    });
    setTodo(newTodo);
    setEditMode(null);
  }

  return (
    <Fragment>
      <td>
        <CustomInput
          style={InputStyleType.DEFAULT}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </td>
      <td>
        <CustomButton
          btnSize={BtnSizeType.EDIT_SAVE_DELETE}
          buttonText="Save"
          btnStyle={BtnStyleType.SUCCESS}
          onClick={() => saveChanges(id)}
        />
      </td>
    </Fragment>
  );
};
