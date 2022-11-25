import { createBrowserRouter, RouterProvider as Provider } from 'react-router-dom';

export function RouterProviders() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);
  return (
    <Provider router={router} />
  );
}
