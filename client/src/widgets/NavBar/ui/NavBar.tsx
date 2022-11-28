import { useTheme } from "app/styles/useTheme";
import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex h-14 items-center justify-end bg-blue-300 px-3 shadow-sm dark:bg-slate-800 dark:text-green-100">
      <Link to="/">Main</Link>
      <Link className="mx-3" to="/about">
        About
      </Link>
      <button
        className="bg-slate-800 px-3 text-blue-300 dark:bg-blue-300 dark:text-slate-800"
        onClick={toggleTheme}
      >
        {theme === "dark" && "Light"}
        {theme === "light" && "Dark"}
      </button>
    </div>
  );
}

const helloYou    = (name)=> {
  name = 'you' || name   ;
  console.log("hello" + name + "!" )
}