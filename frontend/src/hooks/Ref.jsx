import React,{useState,useEffect,useRef} from 'react'
const Ref = () => {
    const [count,setcount]=useState(0);
    const like =useRef(0);
    const inputRef=useRef(null);
    //example 1
    // useEffect(()=>{
    //     console.log("components re-rendenered")
    // })
    // const handleLike=()=>{
    //     like.current=like.current+1;
    // }
    //example 2
    // useEffect(()=>{
    //     like.current=like.current+1;
    //     console.log("component Re-rendered")
    // })

    //example 3
    const handleClick=()=>{
        inputRef.current.focus();
        inputRef.current.style.color = "red"
    }
  return (
    <div>
        {/* {example 3} */}
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>focus</button>
        {/* {example 2}
        <h1>Count:{count}</h1>
        <button onClick={()=>setcount(count+1)}>Inc</button>
        <h1>Like :{like.current}</h1> */}
        {/* {example 1}
        <h1>Count:{count}</h1>
        <button onClick={()=>setcount(count+1)}>Inc</button>
        <h1>Like :{like.current}</h1>
        <button onClick={handleLike}>👍</button> */}
    </div>
  )
}

export default Ref