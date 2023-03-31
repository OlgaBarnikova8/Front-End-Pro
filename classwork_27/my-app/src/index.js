import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import About from './routes/About';
import Home from './routes/Home';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';
import Products from './routes/Products';
import Product from './routes/Product';
import LoginForm from './routes/LoginForm';
import Categories from './routes/Categories';

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
        path: "about",
        element: <About />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />,
      },    
      {
        path: "categories",
        element: <Categories />,
      },    
    ],      
  },
  {
    path: "login",
    element: <LoginForm />,
  },  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
