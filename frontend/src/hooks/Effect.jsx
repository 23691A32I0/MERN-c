import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount]=useState(0);
    const [value,setValue]=useState(0);
    //syntax
    // useEffect(callback Function,[dependence array]);
    // useEffect(()=>{
        //statement
    // },[dependence]);
//with dependence
    useEffect(()=>{
        console.log("useEffect Mounted")
    },[count])
    const handleIncrement=()=>{
        setCount((count)=>count+1);
        setCount((count)=>count+1);
        setCount((count)=>count+1);
    }
  return (
    <div>
        <h1>Count :{count}</h1>
        <button onClick={handleIncrement}>inc</button>
        <h1>Value :{value}</h1>
        <button onClick={()=>setValue(value+1)}>inc</button>
    </div>
  )
}

export default Effect