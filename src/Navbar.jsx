import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }


  return (
    <div>
      <nav>
        <div className="logo">
          Logo
        </div>
        <div className={`navbar ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; 
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
