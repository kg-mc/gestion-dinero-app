
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../utils/AuthProvider";


const PublicLayout = () => (
  <AuthProvider>
    <Outlet />
  </AuthProvider>
);

export default PublicLayout;
