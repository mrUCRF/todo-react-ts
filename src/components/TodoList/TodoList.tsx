import { VscChromeClose } from "react-icons/vsc";
import { TodoListI } from "../../App";

interface Props {
  todoList: any,
  setTodo: any
}
const TodoList: React.FC<Props> = ({todoList, setTodo}) => {
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


    return (
        <div>
      {
        todoList.map( (i: TodoListI) => (
          <div key={i.id}>
          <div>{i.name}</div>
          <button onClick={() => deleteTodo(i.id)}>Удалить</button>
          <button onClick={() => completedTodo(i.id)}>Изменить статус</button>

          </div>
        ))
      }
    </div>
    )
}

export default TodoList