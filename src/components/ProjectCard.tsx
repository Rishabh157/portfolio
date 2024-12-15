
import { CardContainer } from '../../@/components/ui/3d-card';
import arrowUpRight from '../assets/arrow-up-right.svg';

interface ProjectCardPropsType {
    projectId: string
    imgUrl: string
    liveUrl?: string
    projectName: string
    projectType: string
    onOpen: (projectId: string) => void
}

const ProjectCard = ({ projectId, imgUrl, projectName, projectType, onOpen }: ProjectCardPropsType) => {
    return (
        <CardContainer>
            <div className="relative hover:cursor-pointer bg-[#262930] rounded-[18px] border-[1px] border-black p-[12px]"
                onClick={() => onOpen(projectId)}
            >
                <div>
                    <img
                        src={imgUrl}
                        alt="Project1"
                        className="rounded-[12px] transition  duration-400 hover:scale-100"
                    />
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <div>
                        <h5 className="text-[#b9bcc0]">{projectType}</h5>
                        <h2 className="text-white text-[18px]">{projectName}</h2>
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, react-refresh/only-export-components
export const withProjectLink = (ProjectCard: any) => {
    return (props: ProjectCardPropsType) => {
        return (
            <div className='relative group'>
                <ProjectCard {...props} />
                <a href={props?.liveUrl} target='_blank'>
                    <img
                        src={arrowUpRight}
                        alt="Project1"
                        className="absolute cursor-pointer hover:bg-[#40b0bd] right-4 bottom-4 rounded-[12px] h-8 transition duration-600 group-hover:scale-125"
                    />
                </a>
            </div>
        )
    }
}

export default ProjectCard
