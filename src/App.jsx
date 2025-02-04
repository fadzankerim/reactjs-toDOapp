import { useState, useEffect } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"


function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function handleTodoList(newTodo){
    const newToDoList = [...todos, newTodo]
    setTodos(newToDoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo,todoIndex) => {
      return todoIndex !== index
   })
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }
  
  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTods = localStorage.getItem('todos')

    if(!localTods){
      return
    }

    localTods = JSON.parse(localTods).todos
    setTodos(localTods)


  }, [])


  return (
    <div>

      <ToDoInput handleTodoList={handleTodoList} todoValue={todoValue} setTodoValue={setTodoValue}>
      </ToDoInput>

      <ToDoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}>
      </ToDoList>

    </div>
  )
}

export default App
