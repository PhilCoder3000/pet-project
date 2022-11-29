import React, { PropsWithChildren } from 'react';

export function Box({ children }: PropsWithChildren) {
  return <div className="h-full w-full ">{children}</div>;
}
