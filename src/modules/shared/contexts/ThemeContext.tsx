import React, { FC, createContext, useState } from 'react';

const initialState = {
  isDarkMode: false,
  toggleTheme: () => {
    console.info('toggleTheme');
  },
  cashContext: 0,
  updateCashContext: () => {
    console.info('updateCashContext');
  },
};

export const ThemeContext = createContext<typeof initialState>(initialState);

export const ThemeProvider: FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [cashContext, setCashContext] = useState<number>(0);

  function toggleTheme(): void {
    setIsDarkMode(prev => !prev);
  }

  function updateCashContext(): void {
    setCashContext(prev => prev + 1);
  }

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, cashContext, updateCashContext }}>
      {children}
    </ThemeContext.Provider>
  );
};
