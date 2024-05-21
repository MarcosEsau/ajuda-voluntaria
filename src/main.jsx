import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header';
import Index from './index';
import Page from './page';
import ErrorPage from './ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Poggers = () => (
  <>
    <Header />
    <Page />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Poggers />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Index/>
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
