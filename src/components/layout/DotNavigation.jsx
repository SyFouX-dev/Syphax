// src/components/layout/DotNavigation.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const DotNavigation = ({ activeSection, scrollToSection }) => {
  const { darkMode } = useTheme();
  const sections = ["home", "skills", "projects", "contact"];
  
  return (
    <nav
      className={`fixed top-1/2 -translate-y-1/2 right-8 z-50 hidden lg:flex flex-col gap-6 ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
    >
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === section
              ? `${darkMode ? "bg-white scale-150" : "bg-black scale-150"}`
              : `${darkMode ? "bg-gray-600" : "bg-gray-300"} hover:scale-125`
          }`}
          aria-label={`Navigate to ${section}`}
        />
      ))}
    </nav>
  );
};

export default DotNavigation;