// import citybazaronline from "../assets/citybazaronline.png";
export type ProjectsDataInterface = {
  _id: string;
  projectName: string;
  liveUrl: string;
  projectType: string;
  title: string;
  description: string;
  information: {
    heading: string;
    title: string;
  }[];
  imgUrl: string[];
  repoUrl: string;
  role: string;
  teamSize: number;
};

export const projectsData = [
  {
    _id: "PRJ001",
    projectName: "Saptel",
    liveUrl: "",
    projectType: "ERP web application",
    title: "StreamlineERP",
    description:
      "Saptel is a comprehensive ERP solution developed for a telecommunication company to streamline the management of various departments, including the call center and order processing through an integrated dialer. I was responsible for the entire frontend development, ensuring a seamless and efficient user experience.",
    information: [
      {
        heading: "Client",
        title: "Provista It Solution",
      },
      {
        heading: "Service",
        title: "Advertising",
      },
      {
        heading: "Duration",
        title: "2023 - Presentend",
      },
      {
        heading: "My Role & Team Size",
        title: "Senior Frontend Developer - 3",
      },
      {
        heading: "Frontend",
        title: "React, Tailwind, Redux & Redux Toolkit, MUI, JS-PDF",
      },
      {
        heading: "Backend",
        title: "Nodejs, Express",
      },
      {
        heading: "Database",
        title: "MongoDB",
      },
    ],
    imgUrl: ["/images/saptel.png", "/images/saptel.png"],
    repoUrl: "https://github.com/yourprofile/saptel-erp",
    role: "Time Role",
    teamSize: 3,
  },
  {
    _id: "PRJ002",
    projectName: "City Bazar Online",
    liveUrl: "https://citybazaronline.com/",
    projectType: "E-commerce web application",
    title: "StreamlineERP",
    description:
      "City Bazar is a city-based e-commerce application connecting sellers and consumers. During my internship, I contributed significantly to this project, gaining valuable experience in SEO, Atomic Design Pattern, and writing component tests and test cases. This project played a crucial role in securing my full-time job, and now it serves 3 to 4 lakh customers in the Indore market monthly.",
    information: [
      {
        heading: "Client",
        title: "City Bazar Online",
      },
      {
        heading: "Service",
        title: "Retailer Online Selling",
      },
      {
        heading: "Duration",
        title: "2022 - 2023",
      },
      {
        heading: "My Role",
        title: "Intern Frontend Developer",
      },
      {
        heading: "Team Size",
        title: "8",
      },
      {
        heading: "Frontend",
        title:
          "Nextjs, Tailwind, Cypress, Storybook, Redux & Redux Toolkit, MUI, Google Maps API",
      },
      {
        heading: "Application Design Methodology",
        title: "Atomic Design",
      },
    ],
    imgUrl: ["/images/saptel.png", "/images/saptel.png"],
    repoUrl: "https://github.com/yourprofile/saptel-erp",
    role: "Time Role",
    teamSize: 7,
  },

  // {
  //   projectName: "City Bazar Online",
  //   projectType: "E-commerce web application",
  //   title: "StreamlineERP",
  //   description:
  //     "Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.",
  //   imgUrl: citybazaronline,
  //   cardImg: "",
  //   alt: "",
  //   client: "",
  //   service: "",
  //   techStack: ["React", "Typescript", "Redux"],
  // },
  // {
  //   projectName: "Kite & Upstox",
  //   projectType: "Copy Trading web application",
  //   title: "StreamlineERP",
  //   description:
  //     "Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.",
  //   imgUrl: "",
  //   cardImg: "",
  //   alt: "",
  //   client: "",
  //   service: "",
  //   techStack: ["React", "Typescript", "Redux"],
  // },
  // {
  //   projectName: "SLD",
  //   projectType: "EdTech for CA students",
  //   title: "StreamlineERP",
  //   description:
  //     "Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.",
  //   imgUrl: "",
  //   cardImg: "",
  //   alt: "",
  //   client: "",
  //   service: "",
  //   techStack: ["React", "Typescript", "Redux"],
  // },
  // {
  //   projectName: "SJBT",
  //   projectType: "Pan Card service platform",
  //   title: "StreamlineERP",
  //   description:
  //     "Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.",
  //   imgUrl: "",
  //   cardImg: "",
  //   alt: "",
  //   client: "",
  //   service: "",
  //   techStack: ["React", "Typescript", "Redux"],
  // },
  // {
  //   projectName: "Geeksdoor",
  //   projectType: "Digital education platform",
  //   title: "StreamlineERP",
  //   description:
  //     "Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.",
  //   imgUrl: "",
  //   cardImg: "",
  //   alt: "",
  //   client: "",
  //   service: "",
  //   techStack: ["React", "Typescript", "Redux"],
  // },
  // {
  //   projectName: "Netflix Clone",
  //   projectType: "Personal Practice Project",
  //   title: "StreamlineERP",
  //   description:
  //     "Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.",
  //   imgUrl: "",
  //   cardImg: "",
  //   alt: "",
  //   client: "",
  //   service: "",
  //   techStack: ["React", "Typescript", "Redux"],
  // },
  // {
  //   projectName: "The Reviewer",
  //   projectType: "Company Chats Mobile App",
  //   title: "StreamlineERP",
  //   description:
  //     "Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.",
  //   imgUrl: "",
  //   cardImg: "",
  //   alt: "",
  //   client: "",
  //   service: "",
  //   techStack: ["React", "Typescript", "Redux"],
  // },
  // {
  //   projectName: "My Codiotic",
  //   projectType: "Custome Management relationship (CRM) Tool",
  //   title: "StreamlineERP",
  //   description:
  //     "Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.",
  //   imgUrl: "",
  //   cardImg: "",
  //   alt: "",
  //   client: "",
  //   service: "",
  //   techStack: ["React", "Typescript", "Redux"],
  // },
  // {
  //   projectName: "Sanabalqa",
  //   projectType: "Real Estate website",
  //   title: "StreamlineERP",
  //   description:
  //     "Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.",
  //   imgUrl: "",
  //   cardImg: "",
  //   alt: "",
  //   client: "",
  //   service: "",
  //   techStack: ["React", "Typescript", "Redux"],
  // },
  // {
  //   projectName: "Techstudio9",
  //   projectType: "IT Startup website",
  //   title: "StreamlineERP",
  //   description:
  //     "Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.",
  //   imgUrl: "",
  //   cardImg: "",
  //   alt: "",
  //   client: "",
  //   service: "",
  //   techStack: ["React", "Typescript", "Redux"],
  // },
  // {
  //   projectName: "Resell Jwellery",
  //   projectType: "Second hand marketplace for jewelleries",
  //   title: "StreamlineERP",
  //   description:
  //     "Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.",
  //   imgUrl: "",
  //   cardImg: "",
  //   alt: "",
  //   client: "",
  //   service: "",
  //   techStack: ["React", "Typescript", "Redux"],
  // },
];
