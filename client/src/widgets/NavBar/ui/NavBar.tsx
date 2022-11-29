import { useTheme } from 'app/styles/useTheme';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'shared/buttons/Button';

export function NavBar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex h-14 items-center justify-end bg-blue-300 px-3 shadow-sm dark:bg-slate-800 dark:text-green-100">
      <Link to="/">Main</Link>
      <Link className="mx-3" to="/about">
        About
      </Link>
      <Button color="primary" onClick={toggleTheme}>
        {theme === 'dark' && 'Light'}
        {theme === 'light' && 'Dark'}
      </Button>
    </div>
  );
}
