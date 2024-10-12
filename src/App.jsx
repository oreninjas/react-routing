import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Products";

import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;