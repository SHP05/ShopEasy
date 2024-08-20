import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute() {
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  return isLoggedIn === 'true' ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
