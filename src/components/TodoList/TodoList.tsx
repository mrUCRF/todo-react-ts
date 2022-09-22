import { useState } from "react";
import { TodoListI } from "../../App";

interface Props {
  todoList: TodoListI[],
  setTodo: (todo: TodoListI[]) => void,
  filteredTodo: TodoListI[]
}
const TodoList: React.FC<Props> = ({todoList, setTodo, filteredTodo}) => {
  const [editMode, setEditMode] = useState<null | number>(null)
  const [valueEditInput, setValueEditInput] = useState('')
  function deleteTodo(id: number) {
    let todo = [...todoList].filter(i => i.id != id)
    setTodo(todo)
  }
  function completedTodo(id: number) {
    let todo = [...todoList].filter(i => {
      if(i.id === id) {
        i.status = !i.status 
      }
      return i
    })
    setTodo(todo)
  }
  function editTodo(id: number, name: string) {

   setEditMode(id)
   setValueEditInput(name)
  }
  function saveChanges(id: number) {
    let newTodo = [...todoList].map(i => {
      if (i.id === id) {
        i.name = valueEditInput
      }
      return i
    })
    setTodo(newTodo)
    setEditMode(null)
  }


    return (
        <div>
         <table className="table text-white mb-0">
              <thead>
                <tr>
                  <th scope="col">Status</th>
                  <th scope="col">Task</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                 {
        filteredTodo.map( (i: TodoListI) => (
          <tr className="fw-normal" key={i.id}>
            {
              i.status 
              ? <th><button  type="button" className="btn btn-success" onClick={() => completedTodo(i.id)}>+</button></th>
              : <th><button type="button" className="btn btn-danger" onClick={() => completedTodo(i.id)}>+</button></th>
            }
            {
              editMode === i.id 
              ? <td><input type="text" className="form-control" 
              onChange={(e) => setValueEditInput(e.target.value)} value={valueEditInput}/></td> 
              : <td className="align-middle col-sm-6"><span className="m-2">{i.name}</span></td>
            }
            {
            editMode === i.id 
            ? <td><button type="button" className="btn btn-warning col-sm-10" onClick={() => saveChanges(i.id)}>Save</button></td> 
            : <><td><button type="button" className="btn btn-warning col-sm-10" onClick={() => editTodo(i.id, i.name)}>Edit</button></td>
            <><td><button type="button" className="btn btn-danger" onClick={() => deleteTodo(i.id)}>Delete</button></td></></>
            }
          </tr>
        ))
      }
              </tbody>
            </table>
    </div>
    )
}

export default TodoList