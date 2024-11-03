import { useState } from "react"
import SectionHeading from "./SectionHeading"
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import { LinkPreviewer } from "./LinkPreviewer";

type FormTypes = {
    name: string
    email: string
    message?: string
}

const Footer = () => {

    const [values, setValues] = useState<FormTypes>({
        name: '',
        email: '',
        message: '',
    })

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
                                required
                                type="text"
                                className="outline-none placeholder:font-light desktop:w-full laptop:w-full tablet:w-full mobile:w-full border-[1px] border-gray-300 rounded px-2 py-2 tablet:mb-4 mobile:mb-4"
                                placeholder="Your Name"
                                value={values.name}
                                onChange={(event) => setValues((pre) => ({ ...pre, name: event?.target?.value }))}
                            />
                            {/* <span className="text-red-500 text-sm">Please Enter the name</span> */}
                        </div>
                        <div className="w-full">
                            <input
                                required
                                type="email"
                                className="outline-none placeholder:font-light desktop:w-full laptop:w-full tablet:w-full mobile:w-full border-[1px] border-gray-300 rounded px-2 py-2 tablet:mb-4 mobile:mb-4"
                                placeholder="Your Email"
                                value={values.email}
                                onChange={(event) => setValues((pre) => ({ ...pre, email: event?.target?.value }))}
                            />
                        </div>
                    </div>
                    <textarea
                        className="outline-none placeholder:font-light desktop:w-1/2 laptop:w-1/2 tablet:w-full mobile:w-full border-[1px] border-gray-300 rounded px-2 py-2"
                        placeholder="Write a message for me here..."
                        value={values.message}
                        rows={4}
                        onChange={(event) => setValues((pre) => ({ ...pre, message: event?.target?.value }))}
                    />

                    <div className="flex justify-end desktop:w-1/2 laptop:w-1/2 tablet:w-full mobile:w-full" >
                        <button
                            type="submit"
                            className="bg-primary text-white desktop:w-full laptop::w-full tablet:w-full mobile:w-full px-10 py-2 hover:bg-secondary hover:text-white transition-all rounded"
                            onClick={() => {
                                // console.log(values)
                            }}
                        >
                            Submit
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
