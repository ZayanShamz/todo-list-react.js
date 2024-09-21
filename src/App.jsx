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

  // function handleEditTodo(index){
  //   const EditingValue = todos[index]
  //   setCurrentTodo(EditingValue)
  //   handleDeleteTodo(index)
  // }


  function handleEditTodo(index) {
    // Confirm if there's an unsaved todo
    if (currentTodo.trim() && !window.confirm("You have unsaved changes. Do you want to discard them?")) {
      return; // Exit if the user does not want to discard changes
    }
  
    // Save the current todo if there's a value
    if (currentTodo.trim()) {
      handleAddTodos(currentTodo);
    }
  
    // Set the todo to edit
    const editingValue = todos[index];
    setCurrentTodo(editingValue);
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
