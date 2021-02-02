import React, { useState } from 'react'


function FuntionHookCounter() {

    const [count, setCount] = useState(0)    //array destructuring in es6 featuare

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count{count}</button>
        </div>
    )
}

export default FuntionHookCounter
