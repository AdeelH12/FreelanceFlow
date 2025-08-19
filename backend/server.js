const express = require("express");
const cors = require("cors");
const path = require("path"); // <-- add this
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory projects array
let projects = [];

// --- API routes ---
app.get("/projects", (req, res) => {
  res.json(projects);
});

app.post("/projects", (req, res) => {
  const newProject = { id: Date.now(), ...req.body };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  projects = projects.filter((project) => project.id !== Number(id));
  res.status(200).json({ message: "Project deleted" });
});

// --- Serve React build ---
app.use(express.static(path.join(__dirname, "../frontend/build"))); // adjust path if needed

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html")); // adjust path
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
