import React, { Fragment } from "react";
import { BtnSizeType, BtnStyleType, CustomButton } from "../Button/Button";

export interface IEditTaskMod {
  setValue: (e: string) => void;
  value: string;
  saveChanges: (e: any) => void;
  id: number;
}

export const EditTaskMod: React.FC<IEditTaskMod> = ({
  setValue,
  value,
  id,
  saveChanges,
}) => {
  return (
    <Fragment>
      <td>
        <input
          type="text"
          className="form-control"
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
