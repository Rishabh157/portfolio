import { useState, useEffect } from 'react';
import arrowLeft from '../assets/arrow-left.svg';

import Projects001 from '../assets/projects-01jpg.jpg'

const ProjectDetails = () => {

    const [open, setOpen] = useState<boolean>(true);

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

                    <div className='flex gap-10'>

                        <div className='h-[584px] w-[584px] object-cover ' >
                            <img
                                src={Projects001}
                                alt='icons'
                                className='h-full w-full rounded-3xl'
                                onClick={() => setOpen(false)}
                            />
                        </div>

                        <div className='flex flex-col gap-8'>
                            <div className='flex flex-col justify-between gap-4 rounded-[24px] w-[520px]  overflow-hidden p-[32px] bg-[#1A1D24]'>

                                <h1 className='text-[72px]'>Saptel</h1>
                                <p className='text-[20px] text-justify text-[#F5F7FA]'>
                                    Dive into the story of how Bringer helped Doughp transform a
                                    forbidden fruit into a guilt-free sensation, one spoonful at a time.
                                </p>
                            </div>

                            <div>
                                <div className='flex flex-col justify-between gap-4 rounded-[24px] w-[520px]  overflow-hidden p-[32px] bg-[#1A1D24]'>

                                    <ul className='flex flex-col gap-y-8 justify-between items-start'>
                                        <li>
                                            <span className='text-[12px] block font-semibold tracking-[0.12em] uppercase text-[#F5F7FAC0] mb-[8px]'>Client:</span>
                                            <span className='text-[16px] block font-normal -tracking-[0.01em] uppercase text-[#F5F7FA]'>Provista It Solution</span>
                                        </li>
                                        <li>
                                            <span className='text-[12px] block font-semibold tracking-[0.12em] uppercase text-[#F5F7FAC0] mb-[8px]'>Service:</span>
                                            <span className='text-[16px] block font-normal -tracking-[0.01em] uppercase text-[#F5F7FA]'>Advertising</span>
                                        </li>
                                        <li>
                                            <span className='text-[12px] block font-semibold tracking-[0.12em] uppercase text-[#F5F7FAC0] mb-[8px]'>Date:</span>
                                            <span className='text-[16px] block font-normal -tracking-[0.01em] uppercase text-[#F5F7FA]'>October '2023</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='col-span-2'></div>
            </div>

        </div>
    )
}

export default ProjectDetails
