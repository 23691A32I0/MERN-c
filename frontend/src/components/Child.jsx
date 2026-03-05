import React from 'react'

// const Child = (props) => {
//   return (
//     <div>
//         <h1>Name:{props.name}</h1>
//         <h2>Age:{props.age}</h2>
//         <h3>Active Status:{props.isActive?"Active":"notActive"}</h3>
//     </div>
//   )

// }

// export default Child

//destructure
const Child = ({name,age,isActive,food,contact,sendMessage}) => {
  return (
    <div>

        <h1>Name:{name}</h1>
        <h2>Age:{age}</h2>
        <h3>Active Status:{isActive?"Active":"notActive"}</h3>
        <br />
        <hr />
        <h1>Fav food</h1>
        <ul>
          {food.map((value,index)=>(
            <li key={index}>{value}</li>
          ))}
        </ul>
        <h1>Contact details</h1>
        <p>Mobile.no:{contact.mobile}</p>
        <p>Email:{contact.email}</p>
        <br />
        <hr />
        <button onClick={()=>{sendMessage("Message from child")}}>sendMessage</button>
    </div>
  )
}

export default Child