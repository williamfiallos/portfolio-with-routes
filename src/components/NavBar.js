import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// NavLink replaced Link

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
        <NavLink
            exact
            activeStyle={{ fontWeight: 'bold', color: 'red' }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeStyle={{ fontWeight: 'bold', color: 'red' }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li>
      </ul>
    </nav>
  )
}

export default navbar;