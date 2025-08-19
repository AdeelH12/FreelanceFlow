import './App.css';
import NavBar from './components/NavBar.jsx';
import Dashboard from './components/Dashboard.jsx';
import AddProject from './components/AddProject.jsx';
import { useEffect, useState } from 'react';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(()=>{

    fetch("http://localhost:5000/projects")
    .then(res => res.json())
    .then(data => setProjects(data))
    .catch(err => console.log(err))
  },[]);

 function handleAddProject(project) {
  setProjects(prevProjects => [...prevProjects, project]);
}

  return (
    <div className="App">
    <NavBar />
    <AddProject handleAddProject={handleAddProject}/>
    <Dashboard projects={projects} setProjects={setProjects}/>
    </div>
  );
}

export default App;
