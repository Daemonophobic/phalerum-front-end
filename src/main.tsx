import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ErrorPage from './pages/ErrorPage';
import LogoutPage from './pages/LogoutPage';
import AgentsPage from './pages/AgentsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/agents",
    element: <AgentsPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  }, 
  {
    path: "/auth/logout",
    element: <LogoutPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
