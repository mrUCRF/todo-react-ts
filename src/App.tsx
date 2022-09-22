import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodoForm/AddTodoForm';
import SearchTodo from './components/SearchTodo/SearchTodo';

export interface TodoListI {
  id: number,
  name: string,
  status: boolean
}

function App() {

  let [todoList, setTodo] = useState<TodoListI[]>([
    {
      id: 1,
    name: 'todo1',
    status: false
    },
    {
      id: 2,
      name: 'todo2',
      status: false
    }
  ])
  let [filtered, setFiltered] = useState<TodoListI[]>([])
  useEffect(()  => {
      setFiltered(todoList)
    },
    [todoList]
  );
  const search = (value: string) => {
    let currentTodos = []
    let newList = []
    if(value !== '') {
      currentTodos = todoList
      newList = currentTodos.filter(todo => {
        const lc = todo.name.toLowerCase()
        const filter = value.toLowerCase()
        return lc.includes(filter)
      })
    } else {
      newList = todoList
    }
    setFiltered(newList)
  }
  return (
    <div>
       <section className="vh-100 gradient-custom-2">
       <div className="container py-5 h-100">
       <div className="row d-flex justify-content-center align-items-center h-100">
       <div className="col-md-12 col-xl-10">
       <div className="card mask-custom">
       <div className="card-body p-4 text-white">
       <div className="text-center pt-3 pb-2">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                alt="Check" width="60"/>
              <h2 className="my-4">Task List</h2>
            </div>

      <AddTodo todoList={todoList} setTodo={setTodo} />
      <SearchTodo search={search}/>
      <TodoList todoList={todoList} setTodo={setTodo} filteredTodo={filtered}/>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>



      
    </div>
      
    
  );
}

export default App;
