import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cashContext, setCashContext] = useState(0);

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  function updateCashContext() {
    setCashContext((prev) => prev + 1);
  }

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, cashContext, updateCashContext }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
