import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
    const [task,setTask]=useState('');
    const [todos,setTodos]=useState([]);
    const[edit,setEdit]=useState(null);
    const api=`http://localhost:4000/api/todo`
    const fetchTodo=async()=>{
        const res= await axios.get(`http://localhost:4000/api/todo`)
        setTodos(res.data)
    }
    useEffect(()=>{
        
        fetchTodo()
    },[])
    const handleAddoredit=async()=>{
        if(edit){
            await axios.put(`http://localhost:4000/api/todo/update/${edit}`,{task})
            setEdit(null);
        }
        else{
            await axios.post(`http://localhost:4000/api/todo/create`,{task})
        }
        setTask('');
        fetchTodo();
    };
    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:4000/api/todo/delete/${id}`)
        fetchTodo();
    };
    const handleToggleStatus=async(todo)=>{
        await axios.put(`http://localhost:4000/api/todo/update/${todo._id}`,{
            completed:!todo.completed
        })
        fetchTodo();
    };
  return (
    <div>
        <h1>Todo</h1>
        <label>Task</label>
        <input type="text" 
        placeholder='Enter the task'
        value={task} 
        onChange={(e)=>setTask(e.target.value)} />
        <button onClick={(e)=>handleAddoredit(e)}>{(edit||edit===0)?"update":"add"}</button>
        <ul>
            {todos.map((todo)=>(
                <li key={todo._id}>
                    <span style={{cursor:'pointer',textDecoration:todo.completed?"line-through":"none"}}
                    onClick={()=>handleToggleStatus(todo)}>{todo.task}</span>
                    <button onClick={()=>{
                        setTask(todo.task);
                        setEdit(todo._id);
                    }}>🖋️</button>
                    <button onClick={()=>handleDelete(todo._id)}>🩻</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo