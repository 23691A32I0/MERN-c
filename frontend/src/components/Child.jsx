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
const Child = ({name,age,isActive}) => {
  return (
    <div>
        <h1>Name:{name}</h1>
        <h2>Age:{age}</h2>
        <h3>Active Status:{isActive?"Active":"notActive"}</h3>
    </div>
  )
}

export default Child