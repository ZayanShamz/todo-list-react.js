import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrentTodo] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList}))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
    persistData(newTodoList)
  }


  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
    persistData(newTodoList)
  }

  function handleEditTodo(index){
    const EditingValue = todos[index]
    setCurrentTodo(EditingValue)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  
  return (
    <>
      <TodoInput 
      handleAddTodos={handleAddTodos}
      currentTodo={currentTodo}
      setCurrentTodo={setCurrentTodo}/>

      <TodoList 
      todos={todos}
      handleEditTodo={handleEditTodo}
      handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
