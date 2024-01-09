import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Navigate, createBrowserRouter } from 'react-router-dom';
import EnterLayout from './Pages/Layout/EnterLayout';
import MainLayout from './Pages/Layout/MainLayoute';
import PublicRoute from './constant/PublicRoute';
import { PATH } from './constant/constant';
import { RouterProvider } from 'react-router-dom'
import PrivateRoute from './constant/PrivateRoute';
const App = () => {
  const roleWiseRouting = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute component={EnterLayout} />,
      children: [
        ...Object.values(PATH.publicRoutes)
          .map(child => ({
            path: child.path,
            element: child.element
          })),
        {
          path: "/",
          element: <Navigate to={PATH.publicRoutes.LOGIN.path} />
        },
      ]
    },
    {
      path: "/",
      element: <PrivateRoute component={MainLayout} />,
      children: [
        ...Object.values(PATH.privateRoutes)
          .map(parent => ({
            path: parent.path,
            element: parent.element,
          })),
        {
          path: "/home",
          element: <Navigate to={PATH.privateRoutes.HOME.path} />
        },
        {
          path: "*",
          element: <Navigate to={PATH.privateRoutes.HOME.path} />
        },
      ]
    },
    {
      path: "*",
      element: <Navigate to="/" />
    },
  ])
  return (
    <>
      <RouterProvider router={roleWiseRouting} />
    </>
  )
}

export default App