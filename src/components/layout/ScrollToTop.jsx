// src/components/layout/ScrollToTop.jsx
import React from "react";
import { ArrowUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ScrollToTop = ({ showScrollTop, scrollToTop }) => {
  const { darkMode } = useTheme();
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 ${
        showScrollTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      } ${
        darkMode
          ? "bg-white/10 hover:bg-white/20 text-white"
          : "bg-gray-800 hover:bg-black text-white"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;