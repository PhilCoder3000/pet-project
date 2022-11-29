import { NotFoundPage } from 'pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';
import { addSuspense } from '../app/providers/suspense/addSuspense';
import { AboutPage } from './About';
import { MainPage } from './Main';

export const router = createBrowserRouter(
  addSuspense([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]),
);
