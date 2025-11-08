// ⚠️ VITE utilise import.meta.env, PAS process.env
const API_URL = import.meta.env.VITE_API_URL || '';

export const projectsAPI = {
  getAll: async () => {
    try {
      // Sur Vercel, l'API est au même domaine, donc pas besoin de localhost
      const response = await fetch(`/api/projects`);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Projets récupérés:', data);
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/projects/${id}`);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Erreur lors de la récupération du projet ${id}:`, error);
      throw error;
    }
  }
};