import { useContext } from "react";
import TodoItem from "../TodoItems/TodoItem";
import { TodoContext } from "../Context/TodoContext"; 

function TodoList() {
  const { todos, changeTodo, deleteTodo } = useContext(TodoContext); 

  return (
    <div>
      {todos.map((elem) => (
        <TodoItem
          key={elem.id}
          id={elem.id}
          title={elem.title}
          completed={elem.completed}
          changeTodo={changeTodo} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </div>
  );
}

export default TodoList;
