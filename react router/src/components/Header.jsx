// Navbar.js
import React, { useState } from 'react';

import ContactPage from './contact';
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
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="./about" className="text-white hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
