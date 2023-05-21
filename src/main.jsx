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
import Details from './components/Details/Details.jsx';
import Update from './components/Update/Update.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

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
        path: '/blogs',
        element: <Blog></Blog>
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
        element: <AllToys></AllToys>,
        loader: () => fetch('https://toy-marketplace-server-side-jet.vercel.app/toys')
      },
      {
        path: '/addToy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-marketplace-server-side-jet.vercel.app/toys/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-marketplace-server-side-jet.vercel.app/toys/${params.id}`)
      },

    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
