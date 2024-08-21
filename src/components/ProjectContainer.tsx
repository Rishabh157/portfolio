import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/ProjectsData";
import Project1 from "../assets/project-1.jpg";

const ProjectContainer = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-10  px-28">
                {projectsData?.map((project, index: number) => (
                    <ProjectCard
                        key={index}
                        imgUrl={Project1}
                        projectName={project?.projectName}
                        projectType={project?.projectType}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectContainer
