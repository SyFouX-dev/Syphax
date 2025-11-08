// api.js

// Environnement local = "http://localhost:5000"
// Environnement production (Vercel) = ""  (chemin relatif)
const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "";

export const projectsAPI = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_URL}/api/projects`, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Projets récupérés:", data);
      return data;
    } catch (error) {
      console.error("❌ Erreur lors de la récupération des projets:", error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/projects/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log(`✅ Projet ${id} récupéré:`, data);
      return data;
    } catch (error) {
      console.error(`❌ Erreur lors de la récupération du projet ${id}:`, error);
      throw error;
    }
  },
};