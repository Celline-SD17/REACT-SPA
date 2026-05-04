import { useState, useEffect } from 'react';
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App(){
  //State setting
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery]= useState("");
  //Dynamically Adding a project
  const addProject = (project) => {
    setProjects([...projects, project]);
  };
  //Fetching initial project data 
  useEffect(() => {
  fetch("/projects.json")
    .then((response) => response.json())
    .then((data) => setProjects(data));
}, []);
  //Searching Projects
  const filteredProjects = projects.filter((project)=>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return(
    <div className="app">
      <h1>Personal Project Showcase App</h1>
      <div className="addProject">
         <ProjectForm addProject={addProject} />
      </div>
      <div className="search-area">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div classname="projectList">
        <ProjectList projects={filteredProjects} />
      </div>      
    </div>
  );
}


export default App
