import { useEffect } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import { ProjectsDataInterface } from '../data/ProjectsData';

type ProjectDetailsPropsType = {
    items: ProjectsDataInterface
    open: boolean
    setOpen: (value: boolean) => void
}

const Listing = ({ list }: { list: string[] }) => {
    return (
        <ul className='list-disc'>
            {list?.map((ele, ind) => <li key={ind} className='text-[#F5F7FA] text-justify py-2'>{ele}</li>)}
        </ul>
    )
}

const ProjectDetails = ({ items, open, setOpen }: ProjectDetailsPropsType) => {

    // while open the model it would disable the scroll
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = ''; // Enable scroll
        }
        return () => {
            document.body.style.overflow = ''; // Cleanup on unmount
        };
    }, [open]);

    return (
        <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} overflow-y-auto h-screen pb-48 transition-all text-white bg-[#000000E6] fixed top-0 w-full z-50`}>

            {/* Close Icon */}
            <div className="h-14 flex items-center pl-6 sticky top-0 mobile:bg-black">
                <img
                    src={arrowLeft}
                    alt='arrow-left'
                    className='transition-all cursor-pointer hover:bg-gray-800 px-2 py-1 rounded duration-200 hover:scale-105'
                    onClick={() => setOpen(false)}
                />
            </div>

            <div className='desktop:px-44 laptop:px-44 tablet:px-24 mobile:px-6 py-4'>

                <div className='flex gap-4 desktop:flex-row laptop:flex-row table:flex-row mobile:flex-col'>

                    <div className='w-full'>
                        <div className='flex flex-col w-full justify-between gap-4 rounded-[24px] overflow-hidden p-[20px] bg-[#1A1D24]'>
                            <ul className='flex flex-col gap-y-6 justify-between items-start'>
                                {items?.information?.map((ele, index) => (
                                    <li key={index}>
                                        <span className='text-[12px] tracking-[0.12em] block font-semibold uppercase text-[#F5F7FAC0] border-l-[#40b0bd] border-l-[4px] px-2 mb-[8px]'>
                                            {ele?.heading}:
                                        </span>
                                        <span className='text-[16px] block font-normal uppercase text-[#F5F7FA]'>
                                            {ele?.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className=' flex flex-col w-full justify-between gap-4 rounded-[24px] overflow-hidden p-[20px] bg-[#1A1D24]'>
                            <ul className='flex flex-col gap-y-6 justify-between items-start'>
                                {items?.information?.map((ele, index) => (
                                    <li key={index}>
                                        <span className='text-[12px] tracking-[0.12em] block font-semibold uppercase text-[#F5F7FAC0] border-l-[#40b0bd] border-l-[4px] px-2 mb-[8px]'>
                                            {ele?.heading}:
                                        </span>
                                        <span className='text-[16px] block font-normal uppercase text-[#F5F7FA]'>
                                            {ele?.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Project Overview */}
                <div className='flex mt-8 flex-col justify-between gap-4 rounded-[24px] w-full overflow-hidden bg-[#1A1D24]'>
                    <h1 className='desktop:text-6xl laptop:text-6xl table:text-6xl mobile:text-2xl w-full truncate bg-[#40b0bd] p-[20px]'
                        title={items?.projectName}
                    >
                        {items?.projectName}
                    </h1>
                    <p className='text-[#F5F7FA] px-[20px] py-2 text-base text-justify'>
                        {items?.description}
                    </p>
                </div>

                <div className='flex gap-x-6 laptop:flex-row table:flex-row mobile:flex-col'>

                    <div className='mt-8 border border-slate-700 rounded-[24px] w-full overflow-hidden p-[20px] bg-[#1A1D24]'>
                        <h1 className='text-3xl w-full truncate mb-7'>
                            The Challanges
                        </h1>
                        <div className='pl-2'>
                            <Listing list={items?.challenges} />
                        </div>
                    </div>

                    <div className='mt-8 border border-slate-700 rounded-[24px] w-full overflow-hidden p-[20px] bg-[#1A1D24]'>
                        <h1 className='text-3xl w-full truncate mb-7'>
                            The Approach
                        </h1>
                        <div className='pl-2'>
                            <Listing list={items?.approaches} />
                        </div>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default ProjectDetails
