import React, { useState } from 'react'

const State = () => {
    const[count,setCount]=useState(0);
    const handledecrement=()=>{
      setCount(count-1);
    }
     const handlereset=()=>{
      setCount(0);
    }
     const handleincrement=()=>{
      setCount(count+1);
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handledecrement}>Decrement</button>
        <button onClick={handlereset}>Reset</button>
        <button onClick={handleincrement}>Increment</button>
        {/* <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increment</button> */}
    </div>
  )
}

export default State