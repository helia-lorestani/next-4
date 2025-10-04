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
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        cursor: "pointer",
        background: "transparent",
        marginLeft: "20px",
      }}
    >
      {theme === "light" ? " Dark Mode" : " Light Mode"}
    </button>
  );
}
