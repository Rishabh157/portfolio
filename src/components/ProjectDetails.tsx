import { useEffect } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import Projects001 from '../assets/projects-01jpg.jpg'
import { ProjectsDataInterface } from '../data/ProjectsData';

type ProjectDetailsPropsType = {
    items: ProjectsDataInterface
    open: boolean
    setOpen: (value: boolean) => void
}

const ProjectDetails = ({ items, open, setOpen }: ProjectDetailsPropsType) => {

    console.log('items: ', items);

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
        <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all h-screen text-white bg-[#000000E6] fixed top-0 w-full z-50 overflow-y-auto`}>
            {/* Close Icon */}
            <div className="h-14 flex items-center pl-6">
                <img
                    src={arrowLeft}
                    alt='arrow-left'
                    className='transition-all cursor-pointer hover:bg-gray-800 px-2 py-1 rounded duration-200 hover:scale-105'
                    onClick={() => setOpen(false)}
                />
            </div>

            <div className='grid grid-cols-12'>
                <div className='col-span-2'></div>
                <div className='col-span-8'>

                    <div className='grid grid-cols-12 gap-x-4'>
                        <div className='col-span-5'>
                            <div className='h-full w-full object-cover'>
                                <img
                                    src={Projects001}
                                    alt='icons'
                                    className='h-full w-full rounded-3xl'
                                    onClick={() => setOpen(false)}
                                />
                            </div>
                        </div>

                        <div className='col-span-7'>
                            <div className=' flex flex-col w-full justify-between gap-4 rounded-[24px] overflow-hidden p-[20px] bg-[#1A1D24]'>
                                <ul className='flex flex-col gap-y-6 justify-between items-start'>
                                    {
                                        items?.information?.map((ele, index) => (
                                            <li key={index}>
                                                <span className='text-[12px] tracking-[0.12em]  block font-semibold uppercase text-[#F5F7FAC0] mb-[8px]'>
                                                    {ele?.heading}:
                                                </span>
                                                <span className='text-[16px] block font-normal uppercase text-[#F5F7FA]'>
                                                    {ele?.title}
                                                </span>
                                            </li>
                                        ))
                                    }
                                    {/* <li>
                                        <span className='text-[12px] tracking-[0.12em]  block font-semibold uppercase text-[#F5F7FAC0] mb-[8px]'>Service:</span>
                                        <span className='text-[16px] block font-normal uppercase text-[#F5F7FA]'>Advertising</span>
                                    </li>
                                    <li>
                                        <span className='text-[12px] tracking-[0.12em]  block font-semibold uppercase text-[#F5F7FAC0] mb-[8px]'>Duration:</span>
                                        <span className='text-[16px] block font-normal capitalize text-[#F5F7FA]'>2023 - Presentend</span>
                                    </li>
                                    <li>
                                        <span className='text-[12px] tracking-[0.12em]  block font-semibold uppercase text-[#F5F7FAC0] mb-[8px]'>Frontend:</span>
                                        <div>
                                            <span className='text-[16px] flex flex-wrap font-normal text-[#F5F7FA]'>
                                                React, Tailwind,  Redux & Redux Toolkit,  MUI, JS-PDF
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <span className='text-[12px] tracking-[0.12em]  block font-semibold uppercase text-[#F5F7FAC0] mb-[8px]'>Backend:</span>
                                        <span className='text-[16px] block font-normal text-[#F5F7FA]'>Nodejs, Express</span>
                                    </li>
                                    <li>
                                        <span className='text-[12px] tracking-[0.12em]  block font-semibold uppercase text-[#F5F7FAC0] mb-[8px]'>Database:</span>
                                        <span className='text-[16px] block font-normal uppercase text-[#F5F7FA]'>MongoDB</span>
                                    </li>
                                    <li>
                                        <span className='text-[12px] tracking-[0.12em]  block font-semibold uppercase text-[#F5F7FAC0] mb-[8px]'>Tech Stack:</span>
                                        <span className='text-[16px] block font-normal text-[#F5F7FA]'>MERN Stack</span>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-8 flex-col justify-between gap-4 rounded-[24px] w-full overflow-hidden p-[20px] bg-[#1A1D24]'>
                        <h1 className='text-6xl w-full truncate cursor-pointer'
                            title='Saptel'
                        >
                            {items?.projectName}
                        </h1>
                        <p className='text-[#F5F7FA]'>
                            {items?.description}
                        </p>
                    </div>

                </div>

                <div className='col-span-2'></div>
            </div>

        </div>
    )
}

export default ProjectDetails
