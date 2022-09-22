import { useState } from "react";
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
                status: false
            }]
        )
        setNewTodo('')
   }
    return (
      <div className='form-group row'>
              <div className='form-group mb-2 col-sm-10'>
              <input type="text" className="form-control" placeholder="Enter task.." 
              onChange={(e) => setNewTodo(e.target.value)}  value={newTodoData}></input>
              </div>
              <button className='btn btn-success mb-2 col-sm-2'  onClick={saveTodo}>AddTask</button>
            </div>
    )
}

export default AddTodo