import { useTheme } from "app/styles/useTheme";
import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "widgets/NavBar";

interface MainPageProps {
  uuid?: string;
}

function MainPage({ uuid }: MainPageProps) {
  const toggleTheme = useTheme();
  return (
    <div>
      <NavBar />
      Main
    </div>
  );
}

export default MainPage;
