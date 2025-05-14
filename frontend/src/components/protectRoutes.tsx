import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = sessionStorage.getItem("token") !== null;

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
