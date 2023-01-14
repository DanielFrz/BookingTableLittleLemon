import React from 'react';
import HomePage from './components/HomePage';
import Main from './components/BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/React.createElement(HomePage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/BookingPage",
    element: /*#__PURE__*/React.createElement(Main, null)
  })));
}
export default App;