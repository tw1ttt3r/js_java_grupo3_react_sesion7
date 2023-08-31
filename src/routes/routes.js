import { createBrowserRouter } from 'react-router-dom';
import About from '../views/about/About';
import Contact from '../views/contact/Contact';
import App from '../App';
import NotFound from '../views/404/NotFound';
import ErrorAbout from '../views/Error/ErrorAbout';
import ErrorUser from '../views/Error/ErrorUser';
import Users from '../views/users/Users';
import User from '../views/users/User';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorAbout />
      },
    ]
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: 'users',
    element: <Users />,
    children: [
      {
        path: ':id',
        element: <User />,
        errorElement: <ErrorAbout />
      },
      {
        path: 'errorUser',
        element: <ErrorUser />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default routes;