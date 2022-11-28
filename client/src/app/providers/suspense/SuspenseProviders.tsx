import { PropsWithChildren, Suspense } from 'react';

export function SuspenseAppProvider({ children }: PropsWithChildren) {
  return <Suspense fallback={<div>loading App</div>}>{children}</Suspense>;
}

export function SuspensePageProvider({ children }: PropsWithChildren) {
  return <Suspense fallback={<div>loading page</div>}>{children}</Suspense>;
}
