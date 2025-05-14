import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:3000/api/v1/protected", {
          withCredentials: true,
        });
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading)
    return <div className="text-xl font-bold text-center p-6">Loading...</div>;

  if (!isAuthenticated) return <Navigate to={"/login"} replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
