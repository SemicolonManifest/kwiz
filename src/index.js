import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import QuizNavbar from "./views/components/Navbar";
import HomePage from "./views/Home/show";
import LoginPage from "./views/User/Login";
import ShowQuiz from './views/Quiz/show';
import FulfillQuiz from "./views/Quiz/fulfill";

const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/quizzes/:id",
    element: <ShowQuiz />,
  },
  {
    path: "/quizzes/:id/fulfill",
    element: <FulfillQuiz />,
  }
]);


root.render(
  <React.StrictMode>
    <QuizNavbar />
      <RouterProvider router={router} />
  </React.StrictMode>
);


