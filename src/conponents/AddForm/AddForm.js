function AddForm(props) {

const {addTodo} = props

  function addHandle(e){
    if (e.key === 'Enter'){
      addTodo(e.target.value)
    }
  }

  return (
    <div className="input_elem">
      <input onKeyDown={addHandle}/>
    </div>
  );
}

export default AddForm;