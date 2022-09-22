import { useState } from "react";
import { TodoListI } from "../../App";

interface Props {
  todoList: any,
  setTodo: any
}
const TodoList: React.FC<Props> = ({todoList, setTodo}) => {
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
        todoList.map( (i: TodoListI) => (
          <tr className="fw-normal" key={i.id}>
            {
              i.status 
              ? <th><button  type="button" className="btn btn-success" onClick={() => completedTodo(i.id)}>+</button></th>
              : <th><button type="button" className="btn btn-dunger" onClick={() => completedTodo(i.id)}>+</button></th>
            }
           
            {
              editMode === i.id 
              ? <div><input type="text" onChange={(e) => setValueEditInput(e.target.value)} value={valueEditInput} /></div> 
              : <><td className="align-middle"><span>{i.name}</span></td></>
            }
          {
            editMode === i.id 
            ? <><td><button onClick={() => saveChanges(i.id)}>Сохранить</button></td> </>
            : <>
            <td><button type="button" className="btn btn-warning" onClick={() => editTodo(i.id, i.name)}>Edit</button></td>
            <td><button type="button" className="btn btn-danger" onClick={() => deleteTodo(i.id)}>Delete</button></td>
            
            </>
          }
          
          </tr>
        ))
      }
                <tr className="fw-normal">
                  <th>
                    <span className="ms-2">Alice Mayer</span>
                  </th>
                  <td className="align-middle">
                    <span>Call Sam For payments</span>
                  </td>
                  <td className="align-middle">
                    <h6 className="mb-0"><span className="badge bg-danger">High priority</span></h6>
                  </td>
                </tr>
              </tbody>
            </table>
    </div>
    )
}

export default TodoList