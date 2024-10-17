import profilePic from "./assets/profile-pic.jpg";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import gmail from "./assets/gmail.png";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import SectionHeading from "./components/SectionHeading";
import { SparklesPreview } from "./components/SparklesPreview";
import { IconCloudSkills } from "./components/IconCloudSkills";
import { LinkPreviewer } from "./components/LinkPreviewer";
import ProjectContainer from "./components/ProjectContainer";
import { myStatistics } from "./data/myStatistics";
import { Analytics } from "@vercel/analytics/react"
// import { AnimatedTooltip } from '../@/components/ui/animated-tooltip'


function App() {

  return (
    <>
      {/* <!-- Intro Section With Sparkles Preview --> */}
      <SparklesPreview />

      {/* <!-- About --> */}
      <main className="mt-[150px] px-[40px] py-20 section-about">
        <div className="grid gap-[40px] laptop:grid-cols-[0.5fr_1fr] mobile::grid-cols-1 mb-[40px]">

          <div className="flex flex-col justify-end items-center">

            {/* Image */}
            <img className="inline-block rotate-[110deg] rounded-full h-[300px]" src={profilePic} alt="rishabh image" />

            {/* Social Medias */}
            <div className="flex gap-[10px] mt-[20px]">
              <LinkPreviewer preview="https://github.com/rishabh157">
                <img className="inline-blockborder-[#000000] p-[1px] border-[1px] h-[50px] rounded-full" src={github} alt="Github" />
              </LinkPreviewer>

              <LinkPreviewer preview="https://www.linkedin.com/in/rishabh-gour-3b0861221/">
                <img className="inline-block border-[#0b69c7] p-[1px] border-[1px] h-[50px] rounded-full" src={linkedin} alt="Linkedin" />
              </LinkPreviewer>

              <a href="mailto:rishabh157@gmail.com" target="_blank">
                <img className="inline-block border-[#e3e0e0] p-[1px] border-[1px] h-[50px] rounded-full" src={gmail} alt="Email" />
              </a>

              <LinkPreviewer preview="https://x.com/Rishabhgour157">
                <img className="inline-block border-[#00a6de] p-[1px] border-[1px] h-[50px] rounded-full" src={twitter} alt="Twitter" />
              </LinkPreviewer>
            </div>
          </div>


          <div>
            <SectionHeading heading="About Me" />
            <p className="font-normal text-[23px] text-black my-[30px] ">
              Hi I am <a href="/" className="text-black font-semibold">Rihsabh Gour</a>, a 22 year old Full stack
              software developer, living in{" "}
              <a
                target="_blank"
                href="https://maps.app.goo.gl/K1QLBBEzhEtnotHX8"
                className="font-semibold text-black"
              >
                Indore, India
              </a>
              . I am a Computer Science Engineer, currently working with awesome
              folks at {" "}
              <LinkPreviewer className="font-semibold text-black" preview="https://www.codiotic.com/">
                Codiotic
              </LinkPreviewer>
            </p>

            <p className="font-normal text-black text-[23px] my-[30px]">
              Have a look at my{" "}
              <LinkPreviewer className="font-semibold text-black" preview="https://github.com/rishabh157">
                Github Profile
              </LinkPreviewer>

              , skills or just connect with me on{" "}
              <LinkPreviewer className="font-semibold text-black" preview="https://www.linkedin.com/in/rishabh-gour-3b0861221/">
                LinkedIn
              </LinkPreviewer>
              . I am always excited to do business with like minded people, lets
              discuss over coffee.
            </p>
          </div>
        </div>

        <div className="desktop:hidden laptop:hidden tablet:hidden mobile:block border-b-[1px] border-b-[#e7e7e7]"></div>

        <div className="grid laptop:grid-cols-4 gap-y-[40px] text-center mt-[180px] section-statistics">
          {myStatistics?.map(ele => (
            <Statistics key={ele.value} title={ele.title} value={ele.value} isPlus />
          ))}
        </div>
      </main>

      {/* <div className="border-b-[1px] border-b-[#e7e7e7]"></div> */}

      {/* <!-- Skills --> */}
      <div className="grid my-[100px] px-[40px] desktop:grid-cols-2 laptop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1">
        <div className="flex flex-col items-center mobile:mb-10">
          <div>
            <SectionHeading heading="Things I code with -" />

            <ul className="text-bold list-disc desktop:text-lg pl-4 mt-4 flex flex-col gap-6">
              <li>JavaScript: <span className="font-extralight">Because who doesn’t love a good async/await drama?</span> </li>
              <li>React.js: <span className="font-extralight"> Making the impossible, possible—one hook at a time.</span></li>
              <li>Next.js: <span className="font-extralight">For when we want SSR but also a side of SEO.  </span></li>
              <li>Tailwind CSS: <span className="font-extralight"> Styling without the mess (and without the SASS). </span></li>
              <li>Python: <span className="font-extralight">Because sometimes we need a little indentation in our life.</span></li>
              <li>Postman: <span className="font-extralight">Because even APIs need a little TLC (Testing, Love, and Care).</span></li>
              <li>Git:  <span className="font-extralight">Turning code collaboration into a wild adventure. </span></li>
              <li>Yarn/NPM: <span className="font-extralight"> Choosing between them is like picking our favorite child. </span></li>
              <li>GitHub/GitLab: <span className="font-extralight"> Where our code gets a second chance to shine (or fail spectacularly). </span></li>
            </ul>

          </div>
        </div>
        <IconCloudSkills />
      </div>


      <section className="mt-32 h-auto  bg-black py-10">
        <div className="flex sticky px-[40px] z-50 top-0 py-6 bg-black flex-col items-center justify-center mb-24">
          <SectionHeading heading="Projects" className="text-white" />
          <p className="text-[#F5F7FA] text-[18px]">
            Showcasing My Work: A Glimpse Into My Projects
          </p>
        </div>
        <div className="z-0">
          <ProjectContainer />
        </div>
      </section>


      <div className="flex flex-row items-center justify-center mb-10 w-full">
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



      <div className="border-b-[1px] border-b-[#e7e7e7] mt-32"></div>
      {/* <!-- Footer --> */}
      <Footer />

      {/* Vercel Analytics parts */}
      <Analytics />
    </>
  );
}

export default App;
