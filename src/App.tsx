import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { stringify } from 'querystring';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import TodoList from './pages/TodoList';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/todolist" element={<TodoList />} />

      </Routes>
    </Router>
  );
    
     
}

export default App;
