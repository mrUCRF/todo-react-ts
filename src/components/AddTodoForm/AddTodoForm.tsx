import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    todoList: any,
    setTodo: any
  }

const AddTodo: React.FC<Props> = ({todoList, setTodo}) => {
   let [newTodoData, setNewTodo] = useState('')
   
   
    function saveTodo() {
        setTodo(
            [...todoList, {
                id: uuidv4(), 
                name: newTodoData,
                status: true
            }]
        )
        setNewTodo('')
   }
    return (
        <div className="todo-list">
      <input placeholder="Добавьте задачу" onChange={(e) => setNewTodo(e.target.value)}  value={newTodoData}/>
      <button onClick={saveTodo}>Сохранить</button>
    </div>
    )
}

export default AddTodo