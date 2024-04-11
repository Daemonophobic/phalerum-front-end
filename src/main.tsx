import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/LoginPage';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
    // errorElement: <ErrorPage />,
  }, 
  // {
  //   path: "/auth/register",
  //   element: <Register />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/auth/login",
  //   element: <Login />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/auth/logout",
  //   element: <Logout />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/agents",
  //   element: <Agents />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/configs",
  //   element: <Configurations />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/admin",
  //   element: <Admin />,
  //   errorElement: <ErrorPage />,
  // }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
