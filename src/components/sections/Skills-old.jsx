// src/components/sections/Skills.jsx
import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const Skills = () => {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState(0);

  const Braces = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M7 8H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4"></path>
      <path d="M17 16h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4"></path>
    </svg>
  );

  const Server = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="8" rx="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2"></rect>
    </svg>
  );

  const Globe = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Braces />,
      color: "text-blue-500",
      bgColor: "bg-blue-500",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
    },
    {
      title: "Backend",
      icon: <Server />,
      color: "text-green-500",
      bgColor: "bg-green-500",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
        { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      ],
    },
    {
      title: "Outils",
      icon: <Globe />,
      color: "text-purple-500",
      bgColor: "bg-purple-500",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 right-10 w-72 h-72 ${darkMode ? 'bg-blue-500/5' : 'bg-blue-500/10'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-20 left-10 w-96 h-96 ${darkMode ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl`}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Titre */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technologies
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Stack technique moderne et performante
          </p>
        </div>

        {/* Onglets - Version mobile optimisée */}
        <div className="flex justify-center mb-8 sm:mb-10 overflow-x-auto pb-2">
          <div className={`inline-flex gap-2 p-1.5 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeCategory === index
                    ? `${category.bgColor} text-white shadow-md`
                    : darkMode
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {category.icon}
                <span className="text-sm">{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grille d'icônes - Responsive */}
        <div className="relative min-h-[280px] sm:min-h-[320px]">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`transition-all duration-500 ${
                activeCategory === catIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 absolute inset-0 pointer-events-none translate-y-4'
              }`}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`group flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-5 rounded-xl transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50'
                        : 'bg-white hover:bg-gray-50 border border-gray-200'
                    } shadow-sm hover:shadow-lg`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain transition-transform group-hover:rotate-6"
                      />
                    </div>
                    <span className={`text-xs font-medium text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;