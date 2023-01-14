import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import Logo from '../assets/Logo.svg'





const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-ul">
          <li className="logo-li">
            <img src={Logo} className="logo" alt="Logo" />
          </li>
          <li className="links-li">
            <ul>
              <li>
              <NavLink to="/">Home</NavLink>
              </li>
            <li>
<NavLink  to="/BookingPage">Booking</NavLink>
              </li>
            </ul>
          </li>
        </ul>
   
      </div>
    </nav>
  );
};

export default Navbar;



