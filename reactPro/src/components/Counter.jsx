import React from 'react'
export default function Counter(){
    const [count, setCount] = React.useState(0)
    function increamint(){
        setCount(count + 1)
    }
    function decreamint(){
        setCount(count - 1)
    }
    function reset(){
        setCount(0)
    }
    return (

        <div>
    <h1>Your value is:{count}</h1>

            <button onClick={increamint}>+</button>
            <button onClick={decreamint}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
