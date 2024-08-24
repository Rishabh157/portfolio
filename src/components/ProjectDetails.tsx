import { useState, useEffect } from 'react';
import arrowLeft from '../assets/arrow-left.svg';

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
            <div className="h-14 flex items-center pl-6">
                <img
                    src={arrowLeft}
                    alt='arrow-left'
                    className='transition-all cursor-pointer hover:bg-gray-800 px-2 py-1 rounded duration-200 hover:scale-105'
                    onClick={() => setOpen(false)}
                />
            </div>
        </div>
    )
}

export default ProjectDetails
