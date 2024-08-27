import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ui/ProtectedRoute';
import AppLayout from './components/ui/AppLayout';
import { ThemeProvider } from './context/ThemeContext.ts';
import { useEffect, useState } from 'react';

function App() {
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  const [ThemeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
    console.log(ThemeMode);
  };
  const lightTheme = () => {
    setThemeMode('light');
    console.log(ThemeMode);
  };

  useEffect(() => {
    document.querySelector('html')?.classList.remove('dark', 'light');
    document.querySelector('html')?.classList.add(ThemeMode);
  }, [ThemeMode]);
  return (
    <>
      <ThemeProvider value={{ ThemeMode, darkTheme, lightTheme }}>
        <Routes>
          {/* Unauthorized Routes */}
          {!isLoggedIn && (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Login />} />
            </>
          )}

          {/* protected Routes */}
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Home />} />
            <Route path="/client" element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
