// loads express
const express = require("express");

//lets react app talk to backend
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());

//lets the server understand JSON data
app.use(express.json());

// simple array to keep projects while the server is running
let projects = [];

// GET all projects
app.get("/projects", (req, res) => {
  res.json(projects);
});

// POST new project
app.post("/projects", (req, res) => {
  const newProject = {
    
    id: Date.now(),
    ...req.body
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

//delete route
app.delete("/projects/:id", (req,res) =>{
    const { id } = req.params;
    projects = projects.filter(project => project.id !== Number(id));
    res.status(200).json({message: "Project deleted"});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
