import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
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
import Layout from './layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>
)
