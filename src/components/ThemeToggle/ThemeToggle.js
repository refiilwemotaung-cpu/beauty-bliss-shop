import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <button
      className={`theme-toggle ${isDarkMode ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
