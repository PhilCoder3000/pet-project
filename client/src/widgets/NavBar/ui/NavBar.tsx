import { useTheme } from 'app/providers/themeProvider/useTheme';
import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/classNames/classNames';
// import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const toggleTheme = useTheme();
  return (
    <div>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>theme</button>
    </div>
  );
}
