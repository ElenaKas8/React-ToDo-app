function TodoItem(props) {

  const {id, title, completed, changeTodo, deleteTodo} = props

  return (
    <div 
      className="todo_item"
      onClick={() => changeTodo(id)}
      onDoubleClick={() => deleteTodo(id)}
      style={{backgroundColor: (completed) ? '#6bbe22' : '#ffdfbb'}}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default TodoItem;
