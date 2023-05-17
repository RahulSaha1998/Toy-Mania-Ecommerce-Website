import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Blog from './components/Blog/Blog.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import AddToy from './components/AddToy/AddToy.jsx';
import MyToys from './components/MyToys/MyToys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>
      },
      {
        path: '/addToy',
        element: <AddToy></AddToy>
      },
      {
        path: '/myToys',
        element: <MyToys></MyToys>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
