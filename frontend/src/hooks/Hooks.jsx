import React from 'react'
import{Link,Outlet} from 'react-router-dom'
import './Hooks.css'
const Hooks = () => {
  return (
    <div>
        <ul className='nestedList'>
            <li><Link to="useState" className='nestedLink'>useState</Link></li>
            <li><Link to="form" className='nestedLink'>form</Link></li>
            <li><Link to="effect" className='nestedLink'>Effect</Link></li>
            <li><Link to="effectwithapi" className='nestedLink'>Effectap</Link></li>
        </ul>
        <Outlet/>
    </div>
  )
}
export default Hooks