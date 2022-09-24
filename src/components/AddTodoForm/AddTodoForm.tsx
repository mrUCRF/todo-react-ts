import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BtnSizeType, BtnStyleType, CustomButton } from "../Button/Button";
import { CustomInput, InputStyleType } from "../Input/Input";

interface Props {
  todoList: any;
  setTodo: any;
}

const AddTodo: React.FC<Props> = ({ todoList, setTodo }) => {
  let [newTodoData, setNewTodo] = useState("");

  function saveTodo() {
    setTodo([
      ...todoList,
      {
        id: uuidv4(),
        name: newTodoData,
        status: false,
      },
    ]);
    setNewTodo("");
  }
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
          onClick={saveTodo}
        />
         
      </div>
    </Fragment>
  );
};

export default AddTodo;
