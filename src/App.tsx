import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodoForm/AddTodoForm';

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
    status: true
    },
    {
      id: 2,
      name: 'todo2',
      status: true
    }
  ])

  return (
    <div>
      <AddTodo todoList={todoList} setTodo={setTodo} />
      <TodoList todoList={todoList} setTodo={setTodo} />
    </div>
    
  );
}

export default App;
