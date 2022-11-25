import { PropsWithChildren, Suspense } from 'react';

export function SuspenseProvider({ children }: PropsWithChildren) {
  return <Suspense fallback={<div>loading</div>}>{children}</Suspense>;
}
