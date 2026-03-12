import React, { useState } from 'react'

const Signup = () => {
  const[user,setUser]=useState({
    name:'',
    email:'',
    password:''
  })
  const handleLogin=(e)=>{
    e.preventDefault()
    console.log(user)
  }
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <form>
        <label>name:</label>
        <input type="text" onChange={handleChange} placeholder='enter the name' name='name'/>
        <br />
        <br />
        <label>email:</label>
        <input type="email" onChange={handleChange} placeholder='enter the email' name='name'/>
        <br />
        <br />
        <label>password:</label>
        <input type="password" onChange={handleChange} placeholder='enter the password' name='name'/>
        <br />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Signup