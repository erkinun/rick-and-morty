import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Episodes from './pages/Episodes';
import ErrorPage from './pages/ErrorPage';
import Locations from './pages/Locations';
import Root from './pages/Root';

// TODO add eslintrc for unused variables
// TODO lint-staged
// TODO build a comparison view
// TODO relations between chars, locations, episodes
// TODO add entity by id page for each category, like click out from a character to see their episodes
// TODO add advanced search for each category, like status or season for episodes

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/locations',
    element: <Locations />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/episodes',
    element: <Episodes />,
    errorElement: <ErrorPage />,
  },
]);

const Router = () => <RouterProvider router={router} />;
export default Router;
