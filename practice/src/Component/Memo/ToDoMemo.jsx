import React, { memo, useState } from 'react'

const ToDoMemo = () => {
    console.log("TodoMemo")
    const [name , setName] = useState("")
    const [numb , setNumb] = useState("")
    const [todo , setTodo] = useState([])

    const handleAdd = () => {
        const data = {
            name, numb
        }
        // todo.push(data)
        setTodo(...todo, data)
    }

    return(
        <div>
            <p>ToDoMemo</p>

            <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='number' onChange={(e) => setNumb(e.target.value)}/>
            <button onClick={() => handleAdd()}>Add</button>
        </div>
    )
}

export default memo(ToDoMemo);