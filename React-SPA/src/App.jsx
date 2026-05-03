import { useState } from 'react';
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App(){
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery]= useState("");
  //Dynamically Adding a project
  const addProject = (project) => {
    setProjects([...projects, project]);
  };
  //Searching Projects
  const filteredProjects = projects.filter((project)=>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return(
    <div className="app">
      <h1>Personal Project Showcase App</h1>
      <ProjectForm addProject={addProject} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}


export default App
