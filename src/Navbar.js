import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import img from './assets/logo.jpg';
import './App.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <img src={img} alt='Rajasatellite' className='logo' />
      <div className={`navitem ${isOpen ? 'open' : ''}`}>
        <NavLink to='/' className='navitems'>Home</NavLink>
        <NavLink to='/about' className='navitems'>About</NavLink>
        <NavLink to='/contact' className='navitems'>Contact</NavLink>
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </div>
  );
}
