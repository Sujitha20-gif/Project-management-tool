const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let projects = [];

// Create project
app.post("/projects", (req, res) => {
  const project = {
    id: Date.now(),
    name: req.body.name,
    tasks: []
  };
  projects.push(project);
  res.json(project);
});

// Get all projects
app.get("/projects", (req, res) => {
  res.json(projects);
});

// Add task to project
app.post("/projects/:id/tasks", (req, res) => {
  const project = projects.find(p => p.id == req.params.id);
  if (!project) return res.status(404).send("Project not found");

  const task = {
    id: Date.now(),
    title: req.body.title,
    assignedTo: req.body.assignedTo
  };

  project.tasks.push(task);
  res.json(task);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});