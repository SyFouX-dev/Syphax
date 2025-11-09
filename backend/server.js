import express from 'express';
import cors from 'cors';
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

const sql = neon(process.env.DATABASE_URL);

// Route de test
app.get('/', (req, res) => {
  res.json({ message: 'API Backend fonctionnelle !' });
});

// Récupérer tous les projets
app.get('/api/projects', async (req, res) => {
  try {
    console.log('📥 Requête reçue pour /api/projects');
    
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
    console.error('❌ Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des projets' });
  }
});

// Récupérer un projet par ID
app.get('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await sql`
      SELECT * FROM projects WHERE id = ${id}
    `;
    
    if (project.length === 0) {
      return res.status(404).json({ error: 'Projet non trouvé' });
    }
    
    res.json(project[0]);
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération du projet' });
  }
});

app.listen(PORT, () => {
  console.log('');
  console.log('🚀 ========================================');
  console.log(`   Serveur API démarré sur http://localhost:${PORT}`);
  console.log('🚀 ========================================');
  console.log('');
  console.log('📊 Routes disponibles:');
  console.log(`   GET  http://localhost:${PORT}/`);
  console.log(`   GET  http://localhost:${PORT}/api/projects`);
  console.log(`   GET  http://localhost:${PORT}/api/projects/:id`);
  console.log('');
});