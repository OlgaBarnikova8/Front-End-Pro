import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartProvider from './context/cart/CartProvider';
import Root from './routs/Root';
import Products from './routs/Products';
import Cart from './routs/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '',
        element: <Products />,
      },
      {
        path: 'cart',
        element: <Cart />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
