import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Ici, vous pouvez ajouter la logique d'envoi du formulaire
      console.log("Form submitted:", formData);
      // Réinitialiser le formulaire
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Effacer l'erreur lorsque l'utilisateur commence à taper
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const inputClassName = `w-full px-4 py-2 rounded-lg border ${darkMode
    ? "bg-gray-800 border-gray-700 text-white focus:border-blue-500"
    : "bg-white border-gray-300 focus:border-blue-600"} focus:outline-none transition-colors`;

  const errorClassName = "text-red-500 text-sm mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          className={inputClassName}
        />
        {errors.name && <p className={errorClassName}>{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          className={inputClassName}
        />
        {errors.email && <p className={errorClassName}>{errors.email}</p>}
      </div>

      <div>
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
          className={inputClassName}
        />
        {errors.subject && <p className={errorClassName}>{errors.subject}</p>}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={inputClassName}
        />
        {errors.message && <p className={errorClassName}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-medium transition-colors ${darkMode
          ? "bg-blue-600 hover:bg-blue-700 text-white"
          : "bg-blue-500 hover:bg-blue-600 text-white"}`}
      >
        <Send size={18} />
        Envoyer le message
      </button>
    </form>
  );
};

export default ContactForm;