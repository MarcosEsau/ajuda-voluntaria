import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './layout'
import Index from './index';
import ErrorPage from './ErrorPage';
import Sobre from './page';
import Doar from './doar';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/sobre',
        element: <Sobre/>,
      },
      {
        path: '/doar',
        element: <Doar/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
)
