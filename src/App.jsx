import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GeotekProducts from './pages/GeotekPage';
import Contact from './pages/Contact';
import RZProducts from './pages/RZPage';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geotek" element={<GeotekProducts />} />
        <Route path="/rz" element={<RZProducts />} />
        <Route path="/product/:brand/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
