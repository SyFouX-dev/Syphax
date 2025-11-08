import React, { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { projectsAPI } from "../../services/api";

const ProjectsSection = ({ darkMode }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await projectsAPI.getAll();
        setProjects(data);
      } catch (err) {
        console.error("Erreur lors du chargement des projets:", err);
        setError("Impossible de charger les projets. Veuillez réessayer.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // === États de chargement et d'erreur ===
  if (loading) {
    return (
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div
            className={`inline-block w-8 h-8 border-2 border-t-transparent rounded-full animate-spin ${
              darkMode ? "border-gray-500" : "border-gray-900"
            }`}
          ></div>
          <p className={`mt-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Chargement des projets...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              darkMode ? "bg-red-700/30" : "bg-red-100"
            }`}
          >
            <span className="text-2xl">⚠️</span>
          </div>
          <h3
            className={`text-xl font-semibold mb-2 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Erreur de chargement
          </h3>
          <p
            className={`mb-4 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-gray-100"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            Réessayer
          </button>
        </div>
      </section>
    );
  }

  // === État vide ===
  if (projects.length === 0) {
    return (
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <span className="text-2xl">📁</span>
          </div>
          <h3
            className={`text-xl font-semibold mb-2 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Aucun projet disponible
          </h3>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Les projets seront bientôt disponibles.
          </p>
        </div>
      </section>
    );
  }

  // === Affichage normal ===
  return (
    <section id="projects" className="py-24 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Projets
          </h2>
          <p
            className={`max-w-2xl mx-auto text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Découvrez quelques-uns de mes projets récents, alliant technologie
            et design pour créer des expériences utilisateur exceptionnelles.
          </p>
        </div>

        {/* Cartes des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className={`rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                darkMode
                  ? "bg-[#111111]/80 backdrop-blur-sm border-gray-800 hover:border-blue-500/40 hover:bg-[#1a1a1a]/80"
                  : "bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-400 hover:bg-gray-50/80"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3
                  className={`text-lg font-semibold truncate ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    darkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  #{index + 1}
                </span>
              </div>

              <p
                className={`text-sm mb-4 line-clamp-3 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      darkMode
                        ? "bg-gray-800 text-gray-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  Voir le projet →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Bouton GitHub */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/SyFouX-dev"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              darkMode
                ? "bg-[#111111]/80 backdrop-blur-sm hover:bg-[#1e1e1e]/80 text-gray-100 border border-gray-800"
                : "bg-gray-100/80 backdrop-blur-sm hover:bg-gray-200/80 text-gray-800"
            }`}
          >
            <Github size={16} />
            Voir plus de projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;