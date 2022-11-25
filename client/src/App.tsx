import React, { lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { classNames } from './helpers/classNames/classNames';
import { AboutPage } from './Pages/About';
import { MainPage } from './Pages/Main';
import './styles/index.scss';

interface AppProps {
  uuid?: string;
}

export function App({ uuid }: AppProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
