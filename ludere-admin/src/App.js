import './App.css';
import React, { useState, useEffect } from 'react';

import Login from './components/login'
import NavBar from './components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {



  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

