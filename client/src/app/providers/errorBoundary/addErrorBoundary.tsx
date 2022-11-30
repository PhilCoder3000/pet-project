import { RouteObject } from 'react-router-dom';
import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';

export function addErrorBoundary(routes: RouteObject[]): RouteObject[] {
  return routes.map((r) => ({ ...r, errorElement: <ErrorBoundaryFallback /> }));
}
