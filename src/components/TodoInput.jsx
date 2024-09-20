import { useState } from "react"

export default function TodoInput(props) {

    const {handleAddTodos} = props
    const [currentTodo, setCurrentTodo] = useState('')

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
