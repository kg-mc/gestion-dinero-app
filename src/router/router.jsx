import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../utils/useAuth";
const PrivateRoute = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return <p className="text-amber-50">Cargado...</p>;
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
