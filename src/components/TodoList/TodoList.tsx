import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { isTemplateExpression } from "typescript";
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
      {
        todoList.map( (i: TodoListI) => (
          <div key={i.id}>
            {
              editMode === i.id ? <div><input type="text" onChange={(e) => setValueEditInput(e.target.value)} value={valueEditInput} /></div> : <div>{i.name}</div>
            }
          {
            editMode === i.id 
            ? <div><button onClick={() => saveChanges(i.id)}>Сохранить</button> </div>
            : <div><button onClick={() => deleteTodo(i.id)}>Удалить</button>
            <button onClick={() => editTodo(i.id, i.name)}>Редактировать</button>
            <button onClick={() => completedTodo(i.id)}>Изменить статус</button></div>
          }
          

          </div>
        ))
      }
    </div>
    )
}

export default TodoList