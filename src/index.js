import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import QuizNavbar from "./views/components/Navbar";
import HomePage from "./views/Home";
import LoginPage from "./views/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);


root.render(
  <React.StrictMode>
    <QuizNavbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);


