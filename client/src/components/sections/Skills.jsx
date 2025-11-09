import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import SmoothScroll from "../layout/SmoothScroll";
import Card3D from "../ui/Card3D";
import { motion } from "framer-motion";

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
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background avec effet parallax */}
      <SmoothScroll parallaxIntensity={50} opacityEffect={false}>
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-20 right-10 w-72 h-72 ${darkMode ? 'bg-blue-500/5' : 'bg-blue-500/10'} rounded-full blur-3xl animate-float`}></div>
          <div className={`absolute bottom-20 left-10 w-96 h-96 ${darkMode ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl`} style={{ animationDelay: '1s' }}></div>
        </div>
      </SmoothScroll>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Titre avec animation */}
        <SmoothScroll className="text-center mb-12" parallaxIntensity={30}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-4xl md:text-5xl font-bold mb-3 text-gradient-animate ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Technologies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Stack technique moderne et performante
          </motion.p>
        </SmoothScroll>

        {/* Onglets avec effet glass */}
        <SmoothScroll className="flex justify-center mb-10" parallaxIntensity={20}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex gap-2 p-1.5 rounded-xl ${darkMode ? 'glass' : 'bg-white shadow-lg'}`}
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeCategory === index
                    ? `${category.bgColor} text-white shadow-lg animate-glow`
                    : darkMode
                    ? 'text-gray-400 hover:text-white hover:bg-white/10'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category.icon}
                <span className="text-sm">{category.title}</span>
              </motion.button>
            ))}
          </motion.div>
        </SmoothScroll>

        {/* Grille d'icônes avec Card3D */}
        <div className="relative min-h-[320px]">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={false}
              animate={{
                opacity: activeCategory === catIndex ? 1 : 0,
                y: activeCategory === catIndex ? 0 : 20,
                display: activeCategory === catIndex ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: skillIndex * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <Card3D intensity={5}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className={`group flex flex-col items-center gap-3 p-5 rounded-xl transition-all duration-300 ${
                          darkMode
                            ? 'glass hover:bg-white/10'
                            : 'bg-white hover:bg-gray-50 shadow-lg'
                        } hover:shadow-2xl`}
                      >
                        <div className="w-12 h-12 flex items-center justify-center">
                          <motion.img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                        <span className={`text-xs font-medium text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {skill.name}
                        </span>
                      </motion.div>
                    </Card3D>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
