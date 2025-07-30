import { Navigate, Outlet, useLocation } from 'react-router-dom';

// Basic token-based protection
const ProtectedRoute = () => {
  const token = localStorage.getItem('token'); // or sessionStorage, or cookie
  const location = useLocation();

  const isTokenValid = token && isJwtValid(token);

  return isTokenValid ? (
    <Outlet />
  ) : (
    <Navigate
      to="/signin"
      replace
      state={{
        from: location,
        message: 'Your session has expired. Please sign in again.',
      }}
    />
  );
};

// Minimal JWT validation (client-side)
const isJwtValid = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const isExpired = Date.now() >= payload.exp * 1000;
    return !isExpired;
  } catch {
    return false;
  }
};

export default ProtectedRoute;
