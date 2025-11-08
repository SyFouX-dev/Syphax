// src/components/sections/Hero.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import avatarImage from "../../assets/avatar.jpg";

const Hero = () => {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Liste des réseaux sociaux directement dans le composant Hero
  const socialNetworks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/syphax-haddou-44ab02257/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      ),
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "GitHub",
      url: "https://github.com/SyFouX-dev",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
        </svg>
      ),
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      name: "Twitter",
      url: "https://x.com/SyFouX",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
        </svg>
      ),
      color: "bg-blue-400 hover:bg-blue-500"
    },
  ];
  
  return (
    <section
      id="home"
      className={`section-content min-h-screen flex items-center justify-center p-8 py-24 ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 reveal" style={{ transform: isVisible ? 'translateZ(0)' : 'translateY(20px) translateZ(-100px)', opacity: isVisible ? 1 : 0, transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)' }}>
        <div 
          className="w-64 h-64 lg:w-96 lg:h-96 relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:scale-105 hover-effect"
          style={{ 
            transform: isVisible ? 'translateY(0) translateZ(50px) rotateX(0deg)' : 'translateY(50px) translateZ(-50px) rotateX(-10deg)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            transformStyle: 'preserve-3d'
          }}
        >
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              darkMode ? "opacity-30" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(circle at center, rgba(123, 97, 255, 0.3) 0%, rgba(123, 97, 255, 0) 70%)",
            }}
          ></div>
          <img
            src={avatarImage}
            alt="Syphax HADDOU"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div 
          className="max-w-xl text-center lg:text-left"
          style={{
            transform: isVisible ? 'translateY(0) translateZ(30px)' : 'translateY(50px) translateZ(-30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
            transformStyle: 'preserve-3d'
          }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Syphax{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              HADDOU
            </span>
          </h1>
          <h2
            className={`text-xl lg:text-2xl mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Développeur Full Stack & Designer UI/UX
          </h2>
          <p
            className={`text-lg mb-10 leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Je transforme des idées complexes en expériences numériques
            élégantes et intuitives. Passionné par l'innovation et le design,
            je crée des solutions web qui marquent les esprits.
          </p>
          
          {/* Liens sociaux directement intégrés */}
          <div className="flex items-center space-x-4 justify-center lg:justify-start">
            {socialNetworks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 text-white ${social.color}`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;