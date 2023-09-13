
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contacto from "./Routes/Contact";
import Favoritos from "./Routes/Favs";
import Detail from "./Routes/Detail";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> 
          <Route path="/contacto" element={<Contacto />} /> 
          <Route path="/favoritos" element={<Favoritos />} /> 
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/" element={<Home />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
