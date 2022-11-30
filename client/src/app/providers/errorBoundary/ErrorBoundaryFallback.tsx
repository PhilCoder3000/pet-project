import React from 'react';
import { useRouteError } from 'react-router-dom';

export function ErrorBoundaryFallback() {
  const error = useRouteError();
  console.error(error);
  return <h1>Site is undergoing technical work</h1>;
}
