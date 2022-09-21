import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

interface Props {
    todoList: any,
    setTodo: any
  }

const AddTodo: React.FC<Props> = ({todoList, setTodo}) => {
   const [newTodoData, setNewTodo] = useState('')
   
   
    function saveTodo() {
        setTodo(
            [...todoList], {
                id: todoList.id + 1, 
                name: newTodoData,
                status: true
            }
        )
   }
    return (
        <div className="todo-list">
      <input placeholder="Добавьте задачу" onChange={(e) => setNewTodo(e.target.value)}  value={newTodoData}/>
      <button onClick={saveTodo}>Сохранить</button>
    </div>
    )
}

export default AddTodo