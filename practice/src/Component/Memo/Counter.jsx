import React from 'react'
import { useState } from 'react'

const Counter = () => {
    console.log("counter")

    const [ct , setCt] = useState(0)

    return(
        <div>
            <p>Counter</p>
            <p>Count : {ct}</p>

            <button onClick={() => setCt(ct + 1)}>Add</button>
            <button onClick={() => setCt(ct - 1)}>Subtract</button>
        </div>
    )
}


export default Counter