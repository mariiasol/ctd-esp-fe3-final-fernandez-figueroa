import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contacto from "./Routes/Contact";
import Favoritos from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { FavoritesProvider } from "./Routes/FavoritesContext"; // Importa tu contexto de favoritos
import { ThemeProvider } from "./Components/ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
      <div className="App">
        <Navbar />
        <FavoritesProvider> {/* Envuelve tu aplicación con el contexto de favoritos */}
          <Routes> 
            <Route path="/contacto" element={<Contacto />} /> 
            <Route path="/favoritos" element={<Favoritos />} /> 
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/" element={<Home />} /> 
          </Routes>
        </FavoritesProvider> {/* Cierra el contexto de favoritos */}
        <Footer />
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;