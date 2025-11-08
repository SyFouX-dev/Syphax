// src/components/sections/Contact.jsx
import React from "react";
import ContactForm from "../ui/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  
  // Réseaux sociaux directement intégrés
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
      id="contact"
      className="section-content min-h-screen flex items-center justify-center p-8 py-24"
    >
      <div className="max-w-7xl mx-auto w-full reveal" style={{ transformStyle: 'preserve-3d' }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p
            className={`max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour
            discuter de la façon dont nous pourrions collaborer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" style={{ perspective: '1000px' }}>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Parlons de votre projet
            </h3>
            <p
              className={`text-lg mb-8 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Je suis toujours ouvert aux nouvelles opportunités et aux
              projets passionnants. N'hésitez pas à me contacter pour discuter
              de vos idées.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className={`p-4 rounded-full transition-all duration-300 ${
                    darkMode
                      ? "bg-white/10 text-blue-400"
                      : "bg-blue-50 text-blue-500"
                  }`}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:Syphax.haddou@epitech.eu"
                    className={`hover:underline ${
                      darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    Syphax.haddou@epitech.eu
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`p-4 rounded-full transition-all duration-300 ${
                    darkMode
                      ? "bg-white/10 text-green-400"
                      : "bg-green-50 text-green-500"
                  }`}
                >
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Téléphone</h4>
                  <a
                    href="tel:+33758686381"
                    className={`hover:underline ${
                      darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    +33 7 58 68 63 81
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`p-4 rounded-full transition-all duration-300 ${
                    darkMode
                      ? "bg-white/10 text-purple-400"
                      : "bg-purple-50 text-purple-500"
                  }`}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Localisation</h4>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    Paris, France
                  </p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux directement intégrés */}
            <div className="pt-6">
              <h4 className="font-semibold mb-4">Réseaux sociaux</h4>
              <div className="flex items-center space-x-4">
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

          <ContactForm darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default Contact;