import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Récupérer le thème initial depuis le localStorage ou utiliser le thème clair par défaut
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? JSON.parse(savedTheme) : true;
    } catch (error) {
      // En cas d'erreur de parsing, on utilise le thème clair par défaut
      localStorage.removeItem('theme');
      return true;
    }
  });

  // Mettre à jour le localStorage quand le thème change
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode));
    // Mettre à jour la classe du document pour le thème
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};