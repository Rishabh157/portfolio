import { useState } from "react"
import SectionHeading from "./SectionHeading"
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import { LinkPreviewer } from "./LinkPreviewer";

const Footer = () => {

    const [apiStatus, setApiStatus] = useState<boolean>(false);

    interface FormValues {
        [key: string]: string; // Key-value pairs for form data
    }

    const [values, setValues] = useState<FormValues>({
        name: '',
        email: '',
        message: '',
        dateTime: '', // Adding a dateTime field
    })


    const formatDateTime = () => {
        const now = new Date();

        // Convert the time to IST (UTC+5:30)
        const IST_OFFSET = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
        const istDate = new Date(now.getTime() + IST_OFFSET);

        // Format the date as dd-mm-yyyy
        const date = istDate.toLocaleDateString("en-GB").replace(/\//g, '-');

        // Extract hours, minutes, and seconds
        let hours = istDate.getUTCHours();
        const minutes = istDate.getUTCMinutes();
        const seconds = istDate.getUTCSeconds();

        // Convert to 12-hour format and determine AM/PM
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Converts 0 to 12 for 12-hour format

        // Pad minutes and seconds with leading zeros
        const paddedMinutes = minutes.toString().padStart(2, '0');
        const paddedSeconds = seconds.toString().padStart(2, '0');

        // Construct the time string in hh:mm:ss AM/PM format
        const time = `${hours}:${paddedMinutes}:${paddedSeconds} ${period}`;

        return `${date}, ${time}`;
    };


    const handleSubmit = () => {

        setApiStatus(true)
        const URL = import.meta.env.VITE_SCRIPT_URL;

        // Add formatted date-time to the form values
        const formData = new FormData();

        Object.entries({
            ...values, dateTime: formatDateTime(),
        }).forEach(([key, value]) => formData.append(key, value))

        fetch(URL, {
            method: 'POST',
            body: formData
        }).then(() => {
            setValues({
                name: '',
                email: '',
                message: '',
            })
            setApiStatus(false)
        }).catch((err) => {
            console.error('err', err);
        });

    }

    return (
        <footer>
            <div className="my-[100px] px-[40px]">
                <div className="text-center">
                    <SectionHeading heading="Coffee with me." />
                    <p className="text-center mb-[40px] text-[#3a3a3a] text-[0.2px] text-xl font-normal">I am always excited to work on some awesome projects, message me and let's discuss over coffee.</p>
                </div>

                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="desktop:flex laptop:flex tablet:block mobile:block gap-4 desktop:w-1/2 laptop:w-1/2 table:w-full mobile:w-full">
                        <div className="w-full">
                            <input
                                name="name"
                                required
                                type="text"
                                className="outline-none placeholder:font-light desktop:w-full laptop:w-full tablet:w-full mobile:w-full border-[1px] border-gray-300 rounded px-2 py-2 tablet:mb-4 mobile:mb-4"
                                placeholder="Your Name"
                                value={values.name}
                                onChange={(event) => setValues((pre) => ({ ...pre, name: event?.target?.value }))}
                            />
                        </div>
                        <div className="w-full tablet:mb-4 mobile:mb-4">
                            <input
                                name="email"
                                required
                                type="email"
                                className={`outline-none placeholder:font-light desktop:w-full laptop:w-full tablet:w-full mobile:w-full border-[1px] border-gray-300 rounded px-2 py-2`}
                                placeholder="Your Email"
                                value={values.email}
                                onChange={(event) => {
                                    const emailValue = event.target.value;
                                    setValues((prev) => ({ ...prev, email: emailValue }));
                                }}
                            />
                        </div>
                    </div>
                    <textarea
                        name='message'
                        className="outline-none placeholder:font-light desktop:w-1/2 laptop:w-1/2 tablet:w-full mobile:w-full border-[1px] border-gray-300 rounded px-2 py-2"
                        placeholder="Write a message for me here..."
                        value={values.message}
                        rows={4}
                        onChange={(event) => setValues((pre) => ({ ...pre, message: event?.target?.value }))}
                    />

                    <div className="flex justify-end desktop:w-1/2 laptop:w-1/2 tablet:w-full mobile:w-full" >
                        <button
                            type="submit"
                            disabled={apiStatus}
                            className={`${apiStatus ? 'opacity-60' : 'opacity-100'} bg-primary text-white desktop:w-full laptop::w-full tablet:w-full mobile:w-full px-10 py-2 hover:bg-secondary hover:text-white transition-all rounded`}
                            onClick={handleSubmit}
                        >
                            {apiStatus ? '...' : 'Submit'}
                        </button>
                    </div>
                </div>

                <div className="desktop:flex laptop:flex tablet:block mobile:block justify-center  gap-x-20 items-start text-center mt-16 text-[#848484] text-[15px]">

                    <div>
                        <p className="font-normal"> <b> No </b> &#xa9; copyright issues.</p>
                        <p className="font-light mt-2"> Feel free to copy. If you need any help, ping me !</p>
                    </div>

                    <div className="desktop:mt-0 laptop:mt-0 tablet:mt-0 mobile:mt-12">
                        <p className=" name-font-custom-importan text-primary text-[3em] font-normal"> Rishabh Gour </p>
                        <p className="text-[#848484] text-[15px] font-light"> Made with ❤️ in India </p>
                    </div>


                    <div className="desktop:mt-0 laptop:mt-0 tablet:mt-0 mobile:mt-12">
                        <p className="text-[#848484] text-[14px] font-light"> You can find me everywhere </p>
                        {/* Social Medias */}
                        <div className="flex gap-[10px] justify-center mt-2">
                            <LinkPreviewer preview="https://github.com/rishabh157">
                                <img className="inline-block h-[40px] rounded-full" src={github} />
                            </LinkPreviewer>
                            <LinkPreviewer preview="https://www.linkedin.com/in/rishabh-gour-3b0861221/">
                                <img className="inline-block h-[40px] rounded-full" src={linkedin} />
                            </LinkPreviewer>
                            <LinkPreviewer preview="https://x.com/Rishabhgour157">
                                <img className="inline-block h-[40px] rounded-full" src={twitter} />
                            </LinkPreviewer>
                            <LinkPreviewer preview="https://www.instagram.com/rishabh._.30/">
                                <img className="inline-block h-[40px] rounded-full" src={instagram} />
                            </LinkPreviewer>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-bg"></div>
        </footer>
    )
}

export default Footer
