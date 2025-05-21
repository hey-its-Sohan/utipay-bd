import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../pages/Root/Root';
import Login from '../pages/Login/Login';
import Error from '../pages/Error/Error';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,

    children: [
      {
        path: '/',
        loader: () => fetch('../utilityData.json'),
        Component: Home
      },
      {
        path: '/login',
        Component: Login,
      },

      {
        path: '/register',
        Component: Register,
      }
    ]
  },
]);