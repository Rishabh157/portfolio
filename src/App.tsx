import planeImage from "./assets/plane.gif";
// import faceImage from "./assets/rishabh-images.jfif";
import profilePic from "./assets/profile-pic.jpg";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import gmail from "./assets/gmail.png";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import SectionHeading from "./components/SectionHeading";
// import Projects from "./components/Projects";


const myStatistics: {
  title: string
  value: string
}[] = [
    {
      title: 'lines of code',
      value: '160 000'
    },
    {
      title: 'pixels rendered',
      value: '301 783 509'
    },
    {
      title: 'cup of chai',
      value: '300+'
    },
    {
      title: 'projects completed',
      value: '22+'
    },
  ]


function App() {
  return (
    <>
      <section className="section-intro flex justify-center relative h-[550px]">
        <img src={planeImage} className="h-[240px]" />

        <h1 className="name-font-custom-importan text-white font-normal absolute bottom-8 desktop:text-[6.7em] laptop:text-[6.7em] tablet:text-[6.7em] mobile:text-[4.7em] z-50">
          Rishabh Gour
        </h1>
        <p className="text-white text-[30px] font-normal absolute bottom-0 ">
          I am <span>a web developer.</span>
        </p>
        {/* <a>COFFE WITH ME</a> */}
      </section>

      {/* <h1 className="name-font-custom-importan text-black font-normal  desktop:text-[6.7em] laptop:text-[6.7em] tablet:text-[6.7em] mobile:text-[4.7em] z-50">
        Rishabh Gour
      </h1>
      <p className="text-black text-[30px] font-normal  ">
        I am <span>a web developer.</span>
      </p> */}

      {/* <!-- About --> */}
      <main className="my-[150px] px-[40px]">

        <div className="grid gap-[40px] laptop:grid-cols-[0.5fr_1fr] mobile::grid-cols-1 mb-[40px]">

          <div className="flex flex-col justify-end items-center">

            {/* Image */}
            <img className="inline-block rotate-[110deg] rounded-full h-[300px]" src={profilePic} alt="rishabh image" />

            {/* Social Medias */}
            <div className="flex gap-[10px] mt-[20px]">
              <a href="https://github.com/rishabh157" target="_blank">
                <img className="inline-block border-[#000000] p-[1px] border-[1px] h-[50px] rounded-full" src={github} alt="Github" />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-gour-3b0861221/"
                target="_blank"
              >
                <img className="inline-block border-[#0b69c7] p-[1px] border-[1px] h-[50px] rounded-full" src={linkedin} alt="Linkedin" />
              </a>
              <a href="mailto:rishabh157@gmail.com" target="_blank">
                <img className="inline-block border-[#e3e0e0] p-[1px] border-[1px] h-[50px] rounded-full" src={gmail} alt="Email" />
              </a>
              <a href="https://x.com/Rishabhgour157" target="_blank">
                <img className="inline-block border-[#00a6de] p-[1px] border-[1px] h-[50px] rounded-full" src={twitter} alt="Twitter" />
              </a>
            </div>
          </div>

          <div>

            <SectionHeading heading="About Me" />
            <p className="font-normal text-[23px] text-[#838383] my-[30px] ">
              Hi I am <a href="/">Rihsabh Gour</a>, a 22 year old Full stack
              software developer, living in{" "}
              <a
                target="_blank"
                href="https://maps.app.goo.gl/K1QLBBEzhEtnotHX8"
              >
                Indore, India
              </a>
              . I am a Computer Science Engineer, currently working with awesome
              folks at{" "}
              <a target="_blank" href="https://www.codiotic.com/">
                Codiotic
              </a>
              {/* . I am also currently working onsite with Provita IT Company on a
              6-month contract, developing their entire ERP application. */}
            </p>

            <p className="font-normal text-[23px] text-[#838383] my-[30px] ">
              Have a look at my{" "}
              <a target="_blank" href="https://github.com/rishabh157">
                Github Profile
              </a>
              , <a>skills</a> or just connect with me on{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/rishabh-gour-3b0861221/"
              >
                LinkedIn
              </a>
              . I am always excited to do business with like minded people, lets
              discuss over coffee.
            </p>
          </div>
        </div>

        <div className="border-b-[1px] border-b-[#e7e7e7]"></div>

        <div className="grid laptop:grid-cols-4 gap-y-[40px] text-center mt-[40px] section-statistics">
          {myStatistics?.map(ele => (
            <Statistics key={ele.value} title={ele.title} value={ele.value} />
          ))}
        </div>
      </main>

      <div className="border-b-[1px] border-b-[#e7e7e7]"></div>

      {/* <!-- Projects --> */}


      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}

export default App;
