import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ThemeProvider, useTheme } from './ThemeContext'; // Importa el contexto del tema correctamente


const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Obtén el theme y la función toggleTheme del contexto

  const navClasses = `nav ${theme === 'dark' ? 'dark-theme':'light-theme' }`;
 

  return (
    <nav className={navClasses}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>Cambiar tema</button>
       {/* Agrega el botón y llama a toggleTheme cuando se hace clic */}
    </nav>
  );
};

export default Navbar;