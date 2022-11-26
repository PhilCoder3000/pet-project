import { useCallback, useState } from 'react';

type AccessibleValue =
  | string
  | number
  | boolean
  | Array<string | number | boolean>;

type GetItem<T> = (key: string) => T | null

export function useLocalStorage<T>() {
  const getItem: GetItem<T> = useCallback((key: string) => {
    const item = window.localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }, []);

  const setItem = useCallback(
    (key: string, value: AccessibleValue | Record<string, AccessibleValue>) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [],
  );
  return {
    getItem,
    setItem,
  }
}
