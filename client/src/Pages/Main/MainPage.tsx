import { useTheme } from "app/providers/themeProvider/useTheme";
import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "widgets/NavBar";
// import classes from "./MainPage.module.scss";

interface MainPageProps {
  uuid?: string;
}

function MainPage({ uuid }: MainPageProps) {
  const toggleTheme = useTheme();
  return (
    <div>
      <NavBar />
      Main
      <div className="flex bg-sky-500 p-4 text-black hover:bg-sky-700">
        tailwind
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default MainPage;
