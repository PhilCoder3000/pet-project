import { createBrowserRouter } from 'react-router-dom';
import { addErrorBoundary } from 'app/providers/errorBoundary';
import { NotFoundPage } from 'pages/NotFound';
import { addSuspense } from '../app/providers/suspense/addSuspense';
import { AboutPage } from './About';
import { MainPage } from './Main';

export const router = createBrowserRouter(
  addErrorBoundary(
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
  ),
);
