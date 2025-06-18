import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes API
app.use("/api/auth", authRoutes);

// Route par défaut
app.get("/", (req, res) => {
  res.send("API StreakCount en ligne 🚀");
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`);
});
