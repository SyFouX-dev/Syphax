import express from 'express';
import cors from 'cors';
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration CORS
const allowedOrigins = [
  'http://localhost:3000',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes('*')) {
      callback(null, true);
    } else {
      console.log('❌ Origin non autorisée:', origin);
      callback(null, true);
    }
  },
  credentials: true
}));

app.use(express.json());

const sql = neon(process.env.DATABASE_URL);

// Route de test
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Backend fonctionnelle !',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Récupérer tous les projets
app.get('/api/projects', async (req, res) => {
  try {
    console.log('📥 Requête reçue pour /api/projects');
    console.log('🔗 Origin:', req.headers.origin);
    
    const projects = await sql`
      SELECT 
        id,
        title,
        description,
        image,
        tags,
        link,
        created_at
      FROM projects
      ORDER BY created_at DESC
    `;
    
    console.log(`✅ ${projects.length} projets récupérés`);
    res.json(projects);
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des projets:', error);
    res.status(500).json({ 
      error: 'Erreur lors de la récupération des projets',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Récupérer un projet par ID
app.get('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`📥 Requête pour le projet ID: ${id}`);
    
    const project = await sql`
      SELECT * FROM projects WHERE id = ${id}
    `;
    
    if (project.length === 0) {
      console.log(`❌ Projet ${id} non trouvé`);
      return res.status(404).json({ error: 'Projet non trouvé' });
    }
    
    console.log(`✅ Projet ${id} récupéré`);
    res.json(project[0]);
  } catch (error) {
    console.error('❌ Erreur:', error);
    res.status(500).json({ 
      error: 'Erreur lors de la récupération du projet',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Gestion des routes 404 - DOIT ÊTRE EN DERNIER
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route non trouvée',
    path: req.originalUrl 
  });
});

// Démarrage du serveur
app.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('🚀 ========================================');
  console.log(`   Serveur API démarré sur le port ${PORT}`);
  console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('🚀 ========================================');
  console.log('');
  console.log('📊 Routes disponibles:');
  console.log(`   GET  http://localhost:${PORT}/`);
  console.log(`   GET  http://localhost:${PORT}/health`);
  console.log(`   GET  http://localhost:${PORT}/api/projects`);
  console.log(`   GET  http://localhost:${PORT}/api/projects/:id`);
  console.log('');
  console.log('🔒 CORS Origins autorisées:');
  allowedOrigins.forEach(origin => console.log(`   - ${origin}`));
  console.log('');
});