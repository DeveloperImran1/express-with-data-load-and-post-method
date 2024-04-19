import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Phones from './Components/Phones.jsx';
import Phone from './Components/Phone.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader: () => fetch('http://localhost:4000/phones')
      },
      {
        path: "/phones/:id",
        element: <Phone></Phone>,
        loader: ({params}) => fetch(`http://localhost:4000/phones/${params.id}`)
      },
      {
        path: "/users",
        element: <Users></Users>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
