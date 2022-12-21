import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function header() {
  return (
    <header>
        <Link to="/">
            <h1 className='main-title'>Poetry API</h1>
        </Link>

        <nav className='navbar'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Authors">Authors</NavLink>
            <NavLink to="/About">About</NavLink>
        </nav>
    </header>
  )
}

export default header;