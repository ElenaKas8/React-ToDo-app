import { useEffect, useState } from "react";
import TodoList from "./conponents/TodoList/TodoList";
import AddForm from "./conponents/AddForm/AddForm";

import {TodoContext} from "./conponents/Context/TodoContext";
function App() {

  // Реализуйте механизмы чтения и записи данных задач внутри LocalStorage

  const start_todo = [
    {id: 1, title: 'Помыть руки', completed: true},
    {id: 2, title: 'Сделать зарядку', completed: false},
    {id: 3, title: 'Наконец изучить React', completed: true}
  ]

  // Оператор нулевого слияния
  // https://learn.javascript.ru/nullish-operators
  let defaultState = JSON.parse(localStorage.getItem('todos')) ?? start_todo

  const [todos, setTodos] = useState(defaultState)

  function changeTodo(id){
    let changedTodos = todos.map(elem => {
      if (elem.id === id){
        elem.completed = !elem.completed
      }
      return elem
    })
    setTodos(changedTodos)
  }

  function deleteTodo(id){
    let filteredTodos = todos.filter(elem => elem.id !== id)
    setTodos(filteredTodos)
  }

  function addTodo(title){
    let newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  // Чтение данных из LS 
  // Упрощен (см внутри useState)
  // useEffect(() => {
  //   let savedTodos = JSON.parse(localStorage.getItem('todos'))
  //   setTodos(savedTodos)
  // }, [])

  // Запись данных в LS
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContext.Provider value={{todos, changeTodo, deleteTodo}}>
    <div>
      <AddForm addTodo={addTodo}/>
      <TodoList/>
    </div>
    </TodoContext.Provider>
  );
}

export default App;