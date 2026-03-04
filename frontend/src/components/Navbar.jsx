import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li className="list">
                    <Link to="/home" className="link">Home</Link>
                </li>
                <li className="list">
                    <Link to="/about" className="link">About</Link>
                </li>
                <li className="list">
                    <Link to="/contact" className="link">Contact</Link>
                </li>
                <li className="list">
                    <Link to="/services" className="link">Services</Link>
                </li>
                <li className="list">
                    <Link to="/Hooks" className="link">Hooks</Link>
                </li>
                <li className="list">
                    <Link to="/login" className="link">Login</Link>
                </li>
                <li className="list">
                    <Link to="/signup" className="link">Signup</Link>
                </li>
                {/* syntax: <Link to="path">name</Link>*/}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar