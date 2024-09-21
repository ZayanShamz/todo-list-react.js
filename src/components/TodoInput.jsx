export default function TodoInput(props) {

    const {handleAddTodos, currentTodo, setCurrentTodo} = props
    

  return (
    <header>
        <input value={currentTodo} onChange={(e) => {
            setCurrentTodo(e.target.value)
        }} placeholder="Enter To-do..."/>

        <button onClick={() => {
            handleAddTodos(currentTodo)
            setCurrentTodo('')
        }}>ADD</button>
    </header>
  )
}
