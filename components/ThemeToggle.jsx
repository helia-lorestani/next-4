"use client";
import { useEffect, useState } from "react";

export default function ThemeToggleSimple() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="dark-btn">
      {theme === "light" ? " Dark Mode" : " Light Mode"}
    </button>
  );
}
