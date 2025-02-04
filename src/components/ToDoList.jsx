import { React } from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
    const {todos} = props

    return (
      <ul className='main'>
        {todos.map((todo, todoindex)=>{
            return(
                <ToDoCard {...props} key={todoindex} index={todoindex}>
                    <p>{todo}</p>
                </ToDoCard>
            )
        })}
      </ul>
    )
}
