import { RouterProvider } from 'react-router-dom';
import { router } from '../pages';
import { SuspenseAppProvider } from './providers/suspense/SuspenseProviders';
import './styles/index.css';

export function App() {
  return (
    <SuspenseAppProvider>
      <RouterProvider router={router} />
    </SuspenseAppProvider>
  );
}
