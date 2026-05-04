import ProjectCard from "./ProjectCard";
function ProjectList({ projects }){
    return(
        <div>
            <h2>Completed Projects</h2>
            {projects.length === 0? (
                <p>No projects found</p>
            ): (
                projects.map((project)=> (
                    <ProjectCard Key={project.id} project={project} />
                ))
            )}
        </div>

    );
}
export default ProjectList;