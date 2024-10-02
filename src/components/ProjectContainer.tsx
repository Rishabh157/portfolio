import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData, ProjectsDataInterface } from "../data/ProjectsData";
import Project1 from "../assets/project-1.jpg";
import ProjectDetails from "./ProjectDetails";

const ProjectContainer = () => {

    const [open, setOpen] = useState<boolean>(true);
    const [projectId, setProjectId] = useState<string>(''); // initial project to be shown

    return (
        <div>
            <ProjectDetails
                items={projectsData?.find((ele) => ele?._id === projectId) as ProjectsDataInterface}
                open={open}
                setOpen={() => setOpen(!open)}
            />
            <div className="grid grid-cols-4 gap-10  px-28">
                {projectsData?.map((project, index: number) => (
                    <ProjectCard
                        key={index}
                        projectId={project?._id}
                        imgUrl={Project1}
                        projectName={project?.projectName}
                        projectType={project?.projectType}
                        onOpen={(pgId: string) => {
                            setProjectId(pgId)
                            if (pgId) setOpen(true)
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectContainer
