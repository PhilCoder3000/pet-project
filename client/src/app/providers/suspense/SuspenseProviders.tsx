import { Fallback } from './Fallback';
import { PropsWithChildren, Suspense } from 'react';

export function SuspenseAppProvider({ children }: PropsWithChildren) {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
}

export function SuspensePageProvider({ children }: PropsWithChildren) {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
}
