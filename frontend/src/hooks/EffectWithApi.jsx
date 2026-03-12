import React, {useState,useEffect} from 'react';
const EffectWithApi = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setData(data))
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <ul>
            {data.map((value,index)=>(
            <li key={index}>
                <p>Name:{value.name}</p>
                <p>email:{value.email}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default EffectWithApi