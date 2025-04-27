import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Industry Insights Blog</h1>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;