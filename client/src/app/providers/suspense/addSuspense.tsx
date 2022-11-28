import { RouteObject } from 'react-router-dom';
import { SuspensePageProvider } from './SuspenseProviders';

export function addSuspense(routes: RouteObject[]): RouteObject[] {
  return routes.map((r) => ({ ...r, element: <SuspensePageProvider>{r.element}</SuspensePageProvider> }));
}
