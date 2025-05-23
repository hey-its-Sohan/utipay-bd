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
import BillDetails from '../pages/BillDetails/BillDetails';
import MyBills from '../pages/MyBills/MyBills';
import PrivateRouts from '../components/PrivateRouts/PrivateRouts';
import UserProfile from '../pages/UserProfile/UserProfile';
import UpdateProfile from '../pages/UpdateProfile/UpdateProfile';



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
      },
      {
        path: '/my-bills',
        loader: () => fetch('../utilityData.json'),
        element: <PrivateRouts><MyBills></MyBills></PrivateRouts>

      },
      {
        path: '/bill-details/:id',
        loader: () => fetch('../utilityData.json'),
        Component: BillDetails,
      },
      {
        path: '/update-profile',

        Component: UpdateProfile,
      },

      {
        path: '/my-profile',

        element: <PrivateRouts><UserProfile></UserProfile></PrivateRouts>,
      },

    ]
  },
]);