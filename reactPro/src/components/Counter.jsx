import React from 'react'
export default function Counter(){
    const [count, setCount] = React.useState(0)
    const [incrementBy,setIncrementBy]=React.useState(1);
    function increamint(){
        setCount(count + incrementBy)
    }
    function decreamint(){
        setCount(count - incrementBy)
    }
    function reset(){
        setCount(0)
    }
    function increaseincreament(){
        
        setIncrementBy(incrementBy+1)
    }
    function decreaseincreament(){
        
        setIncrementBy(incrementBy-1)
    }
    
    return (

        <div>
            <h1>
                Your value is:{count}
            </h1>
            <button onClick={increamint}>+</button>
            <button onClick={decreamint}>-</button>
                        <h1>increased by {incrementBy}</h1>

            <button onClick={increaseincreament}>increasBy</button>
            <h1>decreasedBy{incrementBy}</h1>
            <button onClick={decreaseincreament}>decreaseBy</button>
            <br />
            <h1>reset bellow</h1>
            <button onClick={reset}>Reset</button>


        </div>
    )
}
