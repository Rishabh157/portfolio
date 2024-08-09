// import { useState } from "react";
import planeImage from "./assets/plane.gif";
import faceImage from "./assets/rishabh-images.jfif";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";

function App() {
  return (
    <>
      <section className="section-intro relative h-[550px]">
        <img src={planeImage} className="h-[230px]" />

        <h1 className="text-white text-[6.7em] font-normal absolute bottom-0 ">
          Rishabh Gour
        </h1>
        <p className="text-white text-[30px] font-normal absolute bottom-0 ">
          I am <span>a web developer.</span>
        </p>
        {/* <a>COFFE WITH ME</a> */}
      </section>

      {/* <!-- About --> */}
      <section className="mt-[150px]">
        <div className="section-container">
          <div className="img-section">
            <img src={faceImage} alt="rishabh image" />

            <div className="social-media">
              <a href="https://github.com/rishabh157" target="_blank">
                <img src={github} />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-gour-3b0861221/"
                target="_blank"
              >
                <img src={linkedin} />
              </a>
              <a href="https://x.com/Rishabhgour157" target="_blank">
                <img src={twitter} />
              </a>
              <a href="https://www.instagram.com/rishabh._.30/" target="_blank">
                <img src={instagram} />
              </a>
            </div>
          </div>

          <div className="about-section">
            <h2>About me.</h2>
            <p>
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

            <p>
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
        <div className="about-hr-line"></div>
        <div className="section-statistics">
          <div>
            <h5>160 000</h5>
            <span>lines of code</span>
          </div>
          <div>
            <h5>301 783 509</h5>
            <span>pixels rendered</span>
          </div>
          <div>
            <h5>1 512</h5>
            <span>cup of chai</span>
          </div>
          <div>
            <h5>26+</h5>
            <span>projects completed</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
