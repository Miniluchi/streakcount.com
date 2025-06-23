import { Navigate, useLocation } from "react-router-dom";
import { authService } from "../services/authService";
import type { JSX } from "react";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = authService.isAuthenticated();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
