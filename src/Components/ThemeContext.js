import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto del tema
const ThemeContext = createContext();

// Hook personalizado para usar el contexto del tema
export function useTheme() {
  return useContext(ThemeContext);
}

// Componente proveedor del contexto del tema
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Tema inicial, puedes cambiarlo según tus necesidades

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Proporcionamos el valor del contexto a través del proveedor
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}