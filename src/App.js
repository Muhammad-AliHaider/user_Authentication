import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './components/pages/Shop';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Blog from './components/pages/Blog';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
