import { useTheme } from 'app/styles/useTheme';
import React from 'react';
import { NavBar } from 'widgets/NavBar';

interface MainPageProps {
  uuid?: string;
}

function MainPage() {
  const toggleTheme = useTheme();

  return (
    <div>
      <NavBar />
      Main
    </div>
  );
}

export default MainPage;
