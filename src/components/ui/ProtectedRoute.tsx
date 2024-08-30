import { Navigate } from 'react-router-dom';

type childrenType = {
  children: JSX.Element;
};

function ProtectedRoute({ children }: childrenType) {
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  return isLoggedIn === 'true' ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
