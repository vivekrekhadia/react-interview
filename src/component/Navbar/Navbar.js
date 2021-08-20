//Used React router dom
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='nav-list'>
                    <ul className="nav-menu">
                        <li className="nav-i">
                            <NavLink exact to="/" className="N-links">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-i">
                            <NavLink exact to="/User" className="N-links">
                                User
                            </NavLink>
                        </li>
                        <li className="nav-i">
                            <NavLink exact to="/Company" className="N-links">
                                Company
                            </NavLink>
                        </li>
                        <li className="nav-i">
                            <NavLink exact to="/Contact" className="N-links">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
