import React, { useMemo, useState } from 'react'

const Memo = () => {
    const[count,setCount]=useState(0);
    const[number,setNumber]=useState(0);
    const cubeNum=(num)=>{
        console.log("calculation done")
        return Math.pow(number,3);
    }
    const result= useMemo(()=>{
        return cubeNum(number);
    },[number]);
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick ={()=>setCount(count+1)}>count++</button>
        <h1>cube:{result}</h1>
        <input type="number" onChange={(e)=>setNumber(e.target.value)} />
    </div>
  )
}

export default Memo