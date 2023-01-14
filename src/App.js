import React from 'react'
import HomePage from './components/HomePage'
import Main from './components/BookingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/BookingPage" element={<Main/>}/>
      </Routes>
  </Router>
  );
}

export default App;

