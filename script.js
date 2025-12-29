const API = "http://localhost:5000";

async function createProject() {
  const name = document.getElementById("projectName").value;

  await fetch(`${API}/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });

  loadProjects();
}

async function loadProjects() {
  const res = await fetch(`${API}/projects`);
  const projects = await res.json();

  const div = document.getElementById("projects");
  div.innerHTML = "";

  projects.forEach(p => {
    div.innerHTML += `<p><b>${p.name}</b></p>`;
  });
}

loadProjects();