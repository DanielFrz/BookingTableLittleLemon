import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import Logo from '../assets/Logo.svg';
const Navbar = () => {
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-ul"
  }, /*#__PURE__*/React.createElement("li", {
    className: "logo-li"
  }, /*#__PURE__*/React.createElement("img", {
    src: Logo,
    className: "logo",
    alt: "Logo"
  })), /*#__PURE__*/React.createElement("li", {
    className: "links-li"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(NavLink, {
    to: "/"
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(NavLink, {
    to: "/BookingPage"
  }, "Booking")))))));
};
export default Navbar;