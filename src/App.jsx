// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import useScrollSpy from "./hooks/useScrollSpy";

// Composants de mise en page
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import DotNavigation from "./components/layout/DotNavigation";

// Sections du portfolio
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import ProjectsSection from "./components/sections/ProjectsSection";
import Contact from "./components/sections/Contact";


// Composant pour le contenu principal du portfolio
const PortfolioContent = () => {
  const { darkMode } = useTheme();
  const sections = ["home", "skills", "projects", "contact"];
  const { activeSection, showScrollTop, scrollToSection, scrollToTop } = useScrollSpy(sections);

  // Animation "reveal" sur le scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add("active");
        }
      });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#0a0a0a] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* === FOND FLUO BLEU/VIOLET ANIMÉ GLOBAL === */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className={`absolute top-20 right-10 w-[500px] h-[500px] ${
            darkMode ? "bg-blue-500/5" : "bg-blue-400/8"
          } rounded-full blur-3xl animate-float`}
        ></div>
        <div
          className={`absolute top-1/3 left-10 w-[600px] h-[600px] ${
            darkMode ? "bg-purple-500/5" : "bg-purple-400/8"
          } rounded-full blur-3xl animate-float`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute bottom-20 right-1/4 w-[400px] h-[400px] ${
            darkMode ? "bg-cyan-500/5" : "bg-cyan-400/8"
          } rounded-full blur-3xl animate-float`}
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10">
        <DotNavigation activeSection={activeSection} scrollToSection={scrollToSection} />
        <Header activeSection={activeSection} scrollToSection={scrollToSection} />

        <main className="flex flex-col w-full">
          <Hero />
          <Skills />
          <ProjectsSection darkMode={darkMode} />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
      </div>

      {/* Animation CSS globale pour le fond flottant */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(20px);
          }
          66% {
            transform: translateY(-15px) translateX(-20px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// === Application principale avec ThemeProvider et routes ===
function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          {/* Page d’accueil / Portfolio */}
          <Route path="/" element={<PortfolioContent />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;