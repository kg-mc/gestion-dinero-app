import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/home/Home";
import Login from "./auth/LoginPage";
import ProtectedLayout from "./layouts/ProtectedLayout";

import PublicLayout from "./layouts/PublicLayout";
import ErrorPage from "./layouts/ErrorPage";
import MenuPrincipalPage from "./pages/MenuPrincipal/MenuPrincipal";
/* 
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
    {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <ProtectedLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]); */




const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedLayout />, // envuelve las rutas hijas
    errorElement: <ErrorPage />, // página de error
    children: [
      {
        path: "home", // => /dashboard/home
        element: <HomePage />,
      },
      {
        path: "", // opcional: índice en /dashboard
        element: <MenuPrincipalPage />,
      },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />, // página de error
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
