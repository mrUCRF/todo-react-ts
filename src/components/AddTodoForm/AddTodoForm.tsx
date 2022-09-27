import { Fragment, useState } from "react";
import { BtnSizeType, BtnStyleType, CustomButton } from "../Button/Button";
import { CustomInput, InputStyleType } from "../Input/Input";
import { useAppDispatch } from "../../app/redux-store/hooks/redux";
import { TodoSlice } from "../../ features/TodoSlice";

const AddTodo: React.FC = () => {
  let [newTodoData, setNewTodo] = useState("");

  const { addTodo } = TodoSlice.actions;
  const dispatch = useAppDispatch();

  const addNewTodo = () => {
    dispatch(addTodo(newTodoData));
    setNewTodo("");
  };
  return (
    <Fragment>
      <div className="form-group row">
        <div className="form-group mb-2 col-sm-10">
          <CustomInput
            style={InputStyleType.DEFAULT}
            placeholder="Enter task..."
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodoData}
          />
        </div>
        <CustomButton
          buttonText="AddTask"
          btnStyle={BtnStyleType.SUCCESS}
          btnSize={BtnSizeType.ADD_TASK}
          onClick={addNewTodo}
        />
      </div>
    </Fragment>
  );
};

export default AddTodo;
