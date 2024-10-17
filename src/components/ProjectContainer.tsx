import { useState } from "react";
import ProjectCard, { withProjectLink } from "./ProjectCard";
import { projectsData, ProjectsDataInterface } from "../data/ProjectsData";
import Project1 from "../assets/project-1.jpg";
import ProjectDetails from "./ProjectDetails";

const ProjectContainer = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [projectId, setProjectId] = useState<string>(''); // initial project to be shown

    const ProjectCardWithLink = withProjectLink(ProjectCard);

    return (
        <div>
            <ProjectDetails
                items={projectsData?.find((ele) => ele?._id === projectId) as ProjectsDataInterface}
                open={open}
                setOpen={() => setOpen(!open)}
            />
            <div className="grid grid-cols-4 gap-10  px-28">
                {/* {projectsData?.map((project, index: number) => (
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
                ))} */}

                {projectsData?.map((project, index: number) => (
                    <ProjectCardWithLink key={index}
                        projectId={project?._id}
                        imgUrl={Project1}
                        projectName={project?.projectName}
                        projectType={project?.projectType}
                        onOpen={(pgId: string) => {
                            setProjectId(pgId)
                            if (pgId) setOpen(true)
                        }} />
                ))}




                {/* <AnimatedTooltip items={
                        [
                            {
                                id: 1,
                                name: "Saptel",
                                designation: "Software EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware EngineerSoftware Engineer",
                                image:
                                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
                            },
                        ]
                    } /> */}
            </div>
        </div>
    )
}

export default ProjectContainer
