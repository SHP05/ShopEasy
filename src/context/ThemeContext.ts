import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  ThemeMode: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// hook for use the theme
export default function useTheme() {
  return useContext(ThemeContext);
}
