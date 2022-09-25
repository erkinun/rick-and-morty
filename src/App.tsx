import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';
import ErrorPage from './pages/ErrorPage';
import Locations from './pages/Locations';
import Root from './pages/Root';

// TODO add eslintrc for unused variables
// TODO lint-staged
// TODO build a comparison view
// TODO view locations
// TODO view episodes
// TODO relations between chars, locations, episodes
// TODO deploy to production

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
]);

const Router = () => <RouterProvider router={router} />;
export default Router;
