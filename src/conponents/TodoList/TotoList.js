
import TodoItem from "../TodoItems/TodoItem";

function TodoList(props) {

  const {todos, changeTodo, deleteTodo} = props

  return (
    <div>
      {todos.map(elem => <TodoItem 
                            key={elem.id}
                            id={elem.id}
                            title={elem.title}
                            completed={elem.completed}
                            changeTodo={changeTodo}
                            deleteTodo={deleteTodo}
                         />)}
    </div>
  );
}

export default TodoList;