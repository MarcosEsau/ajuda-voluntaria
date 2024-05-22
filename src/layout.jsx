import Header from './components/Header';
import Index from './index';
import ErrorPage from './ErrorPage';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
    ],
  },
]);


export default function Layout() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}
