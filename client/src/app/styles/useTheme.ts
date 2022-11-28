import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../features/storages/useLocalStorage';

type Theme = 'dark' | 'light';

const getBrowserTheme = (): Theme => {
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return isDark ? 'dark' : 'light';
};

export const useTheme = () => {
  const { getItem, setItem } = useLocalStorage<Theme>();

  const [theme, setTheme] = useState<Theme>(getItem('theme') || getBrowserTheme());

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return { theme, toggleTheme };
};
