// src/components/layout/Header.jsx
import React, { useState, useEffect } from "react";
import { Sun, Moon, Download, User, LogOut } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header = ({ activeSection, scrollToSection }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        activeSection !== "home"
          ? darkMode
            ? "bg-[#121212]/90 backdrop-blur-md shadow-md"
            : "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Syphax HADDOU</div>
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Expertise", "Projets", "Contact"].map((item, index) => {
            const sectionId = ["home", "skills", "projects", "contact"][index];
            return (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className={`relative py-2 transition-colors ${
                  activeSection === sectionId
                    ? darkMode
                      ? "text-white"
                      : "text-black"
                    : darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item}
                {activeSection === sectionId && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${
                      darkMode ? "bg-white" : "bg-black"
                    } transition-all duration-300`}
                  ></span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full transition-colors duration-300 ${darkMode ? "bg-white/10 text-yellow-400 hover:bg-white/20" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`p-3 rounded-full transition-colors duration-300 ${darkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                <User size={20} className={darkMode ? "text-white" : "text-gray-600"} />
              </button>

              {showDropdown && (
                <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ${darkMode ? "bg-gray-800" : "bg-white"} ring-1 ring-black ring-opacity-5`}>
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      navigate('/profile');
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${darkMode ? "text-white hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    Profil
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem('token');
                      setIsAuthenticated(false);
                      setShowDropdown(false);
                      navigate('/login');
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${darkMode ? "text-red-400 hover:bg-gray-700" : "text-red-600 hover:bg-gray-100"}`}
                  >
                    <div className="flex items-center gap-2">
                      <LogOut size={16} />
                      Se déconnecter
                    </div>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="">
            </button>
          )}

          <a
            href="/Syphax Haddou CV.pdf"
            download
            className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${darkMode ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90"}`}
          >
            <Download size={16} />
            CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
