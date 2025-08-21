import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/home/Home";
import Login from "./auth/LoginPage";
import ProtectedLayout from "./layouts/ProtectedLayout";
import DashboardPage from "./pages/dashboard/Dashboard";
import PublicLayout from "./layouts/PublicLayout";
import ErrorPage from "./layouts/ErrorPage";
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
        path: "dashboard", // opcional: índice en /dashboard
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
