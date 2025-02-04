import { useState } from "react"

export default function ToDoInput(props){
    const {handleTodoList, todoValue, setTodoValue} = props
    
    return(
        <header>
            <input value={todoValue}  onChange={(e) => {
                setTodoValue(e.target.value)
            }}
            placeholder="Enter todo..."/>
            <button onClick={() => {
                handleTodoList(todoValue)
                setTodoValue('')
            }}>Add chore</button>
        </header>
    )
}