import express from "express";
import cors from "cors";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// === LOGS DE DEBUG SUR VERCEL ===
console.log("✅ [Vercel] Serverless function démarrée !");
console.log("🌐 DATABASE_URL :", process.env.DATABASE_URL ? "présente ✅" : "absente ❌");

app.use(
  cors({
    origin: [
      "https://syphaxhaddou.fr",
      "https://www.syphaxhaddou.fr",
      "http://localhost:3000"
    ],
    credentials: true,
  })
);

app.use(express.json());

// --- Connexion à la base ---
let sql;
try {
  sql = neon(process.env.DATABASE_URL);
  console.log("🟢 Connexion Neon initialisée");
} catch (err) {
  console.error("❌ Erreur d'initialisation Neon :", err);
}

// --- Route de test ---
app.get("/", (req, res) => {
  res.json({ message: "🚀 API Backend fonctionnelle sur Vercel !" });
});

// --- Liste des projets ---
app.get("/api/projects", async (req, res) => {
  try {
    console.log("📥 Requête reçue: /api/projects");

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
    console.error("❌ Erreur SQL :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des projets" });
  }
});

// --- Projet unique ---
app.get("/api/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const project = await sql`SELECT * FROM projects WHERE id = ${id}`;

    if (project.length === 0)
      return res.status(404).json({ error: "Projet non trouvé" });

    res.json(project[0]);
  } catch (error) {
    console.error("❌ Erreur SQL :", error);
    res.status(500).json({ error: "Erreur lors de la récupération du projet" });
  }
});

// ❌ NE PAS démarrer de serveur avec app.listen()
// ✅ Vercel gère automatiquement la fonction
export default app;