import React from 'react';
import { ImSpinner } from 'react-icons/im';

export function Fallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ImSpinner className="animate-spin" />
    </div>
  );
}
