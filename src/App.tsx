import planeImage from "./assets/plane.gif";
import faceImage from "./assets/rishabh-images.jfif";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import Statistics from "./components/Statistics";
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
        <img src={planeImage} className="h-[230px]" />

        <h1 className="name-font-custom-importan text-white text-[6.7em] font-normal absolute bottom-0">
          Rishabh Gour
        </h1>
        <p className="text-white text-[30px] font-normal absolute bottom-0 ">
          I am <span>a web developer.</span>
        </p>
        {/* <a>COFFE WITH ME</a> */}
      </section>

      {/* <!-- About --> */}
      <section className="my-[150px] px-[40px]">

        <div className="grid gap-[40px] laptop:grid-cols-[0.5fr_1fr] mobile::grid-cols-1 mb-[40px]">

          <div className="flex flex-col justify-end items-center">

            {/* Image */}
            <img className="inline-block rounded-full h-[300px]" src={faceImage} alt="rishabh image" />

            {/* Social Medias */}
            <div className="flex gap-[10px] mt-[20px]">
              <a href="https://github.com/rishabh157" target="_blank">
                <img className="inline-block h-[50px] rounded-full" src={github} />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-gour-3b0861221/"
                target="_blank"
              >
                <img className="inline-block h-[50px] rounded-full" src={linkedin} />
              </a>
              <a href="https://x.com/Rishabhgour157" target="_blank">
                <img className="inline-block h-[50px] rounded-full" src={twitter} />
              </a>
              <a href="https://www.instagram.com/rishabh._.30/" target="_blank">
                <img className="inline-block h-[50px] rounded-full" src={instagram} />
              </a>
            </div>
          </div>

          <div>

            <h2 className="text-light-dark font-extralight tracking-widest  desktop:text-[70px] laptop:text-[70px] tablet:text-[50px] mobile:text-[24px]">About me.</h2>

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
      </section>

      <div className="border-b-[1px] border-b-[#e7e7e7]"></div>

      {/* <!-- Projects --> */}



    </>
  );
}

export default App;
