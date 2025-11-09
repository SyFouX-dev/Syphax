// Configuration de l'URL de l'API
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Log pour vérifier la configuration (utile pour le debug)
console.log('🔗 API configurée sur:', API_URL);

// Service pour gérer les appels API vers le backend
export const projectsAPI = {
  // Récupérer tous les projets
  getAll: async () => {
    try {
      console.log('📡 Appel API GET /api/projects');
      
      const response = await fetch(`${API_URL}/api/projects`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important pour CORS avec credentials
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Erreur HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('✅ Projets récupérés:', data.length);
      return data;
      
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des projets:', error);
      throw error;
    }
  },

  // Récupérer un projet spécifique par son ID
  getById: async (id) => {
    try {
      console.log(`📡 Appel API GET /api/projects/${id}`);
      
      const response = await fetch(`${API_URL}/api/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Erreur HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(`✅ Projet ${id} récupéré`);
      return data;
      
    } catch (error) {
      console.error(`❌ Erreur lors de la récupération du projet ${id}:`, error);
      throw error;
    }
  }
};

export default projectsAPI;