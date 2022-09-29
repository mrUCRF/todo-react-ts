import React, { Fragment } from "react";
import { BtnSizeType, BtnStyleType, CustomButton } from "../Button/Button";
import { CustomInput, InputStyleType } from "../Input/Input";
import { useAppDispatch } from "../../app/hooks";
import { editTodo } from "../../ features/todo/TodoSlice";

export interface IEditTaskMod {
  setValue: (e: string) => void;
  value: string;
  id: string;
  setEditMode: (e: null) => void;
}

export const EditTaskMod: React.FC<IEditTaskMod> = ({
  setValue,
  value,
  id,
  setEditMode,
}) => {
  const dispatch = useAppDispatch();

  function saveChanges(id: string) {
    dispatch(editTodo({ id, value }));
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
