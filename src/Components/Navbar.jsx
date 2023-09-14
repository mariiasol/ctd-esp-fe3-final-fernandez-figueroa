import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useTheme } from './ThemeContext'; 


const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); 

  const navClasses = `nav ${theme === 'dark' ? 'dark-theme':'' }`;
  

  return (
    <nav className={navClasses}>
      <ul>
        <li >
          <Link to="/">Inicio</Link>
        </li>
        <li >
          <Link to="/contacto">Contacto</Link>
        </li>
        <li >
          <Link to="/favoritos">Favoritos</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>Cambiar tema</button>
      
    </nav>
  );
};

export default Navbar;