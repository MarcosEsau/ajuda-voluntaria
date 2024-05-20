import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/header';
import Index from './index';
import ErrorPage from './ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
