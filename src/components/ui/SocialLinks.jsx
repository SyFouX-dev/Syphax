import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = ({ darkMode, size = 24, className = '' }) => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      label: 'GitHub Profile'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn Profile'
    },
    {
      icon: Mail,
      href: 'mailto:your.email@example.com',
      label: 'Send Email'
    }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`p-2 rounded-full transition-colors ${darkMode
              ? 'text-gray-400 hover:text-white hover:bg-white/10'
              : 'text-gray-600 hover:text-black hover:bg-gray-100'
            }`}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;