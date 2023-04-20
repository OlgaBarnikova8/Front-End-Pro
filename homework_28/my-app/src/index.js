import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import AuthProvider from './context/auth/AuthProvider';
import Root from './routes/Root';
import Header from './routes/Header';
import Home from './routes/Home';
import Users from './routes/Users';
import User from './routes/User';
import NotFound from './routes/NotFound';
import Hotels from './routes/Hotels';
import LoginForm from './components/LoginForm';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { element } from 'prop-types';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userId",
        element: <User />,
      },      
      {
        path: "hotels",
        element: <NotFound />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
    ]
  } 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>      
        <RouterProvider router={router} />      
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
