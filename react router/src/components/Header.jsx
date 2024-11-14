// Navbar.js
import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom'
import ContactPage from './Contact';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 p-4 flex items-center justify-between">
      <div className="text-white text-xl font-bold">MyApp</div>
      <button
        className="text-white text-2xl md:hidden"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex space-x-4 mt-4 md:mt-0`}
      >
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
        <NavLink to='/' className={({isActive}) => `text-white ${isActive ? "text-red-400" : "text-white"}`}>about</NavLink>

        </li>
        <li>
        <NavLink to='/'>contact us</NavLink>

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
