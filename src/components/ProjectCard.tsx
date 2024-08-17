
import arrowUpRight from '../assets/arrow-up-right.svg';

interface ProjectCardPropsType {
    imgUrl: string
    projectName: string
    projectType: string
}

const ProjectCard = ({ imgUrl, projectName, projectType }: ProjectCardPropsType) => {
    return (
        <div className="relative group hover:cursor-pointer bg-[#262930] rounded-[18px] border-[1px] border-black p-[12px]">
            <div className="h-[360px]">
                <img
                    src={imgUrl}
                    alt="Project1"
                    className="rounded-[12px] transition  duration-400 hover:scale-100"
                />
            </div>

            <div className='flex justify-between items-center'>
                <div>
                    <h5 className="text-[#b9bcc0]">{projectType}</h5>
                    <h2 className="text-white text-[18px]">{projectName}</h2>
                </div>
                <img
                    src={arrowUpRight}
                    alt="Project1"
                    className="rounded-[12px] h-8 transition duration-600 group-hover:scale-125"
                />
            </div>
        </div>
    )
}

export default ProjectCard