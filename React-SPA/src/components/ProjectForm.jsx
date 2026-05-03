import { useState } from "react";
function ProjectForm({ addProject }){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        const newProject ={
            title,
            description,
        };
        addProject(newProject);
        //Form reset
        setTitle("");
        setDescription("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Project</h2>
            <h3>Title</h3>
            <input
            type="text"
            placeholder="Project title"
            value ={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <h3>Description</h3>
            <textarea
            placeholder="Project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <br/>
            
            <button type="submit">Add Project</button>
        </form>
        
    );

}
export default ProjectForm