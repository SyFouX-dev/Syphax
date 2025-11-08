import { useState, useEffect } from 'react';

const useScrollSpy = (sections) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher/masquer le bouton de retour en haut
      setShowScrollTop(window.scrollY > 500);

      // Trouver la section active
      const sectionElements = sections.map(section =>
        document.getElementById(section)
      );

      const currentSection = sectionElements.find((element, index) => {
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const isLastSection = index === sections.length - 1;

        // Pour la dernière section, on vérifie si on est proche du bas de la page
        if (isLastSection) {
          return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
        }

        // Pour les autres sections, on vérifie si elles sont visibles dans le viewport
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(sections[sectionElements.indexOf(currentSection)]);
      }
    };

    // Ajouter les écouteurs d'événements
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Ajustement pour le header fixe
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return {
    activeSection,
    showScrollTop,
    scrollToSection,
    scrollToTop
  };
};

export default useScrollSpy;