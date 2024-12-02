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
  challenges: string[];
  approaches: string[];
};

export const projectsData = [
  {
    _id: "PRJ001",
    projectName: "Saptel",
    liveUrl: "",
    projectType: "ERP web application",
    title: "StreamlineERP",
    description:
      "Saptel is a comprehensive ERP solution developed for a teleperformance company to streamline the management of various departments, including the call center and order processing through an integrated dialer. I was responsible for the entire frontend development, ensuring a seamless and efficient user experience.",
    information: [
      {
        heading: "Client",
        title: "Provista It Solution",
      },
      {
        heading: "Service",
        title: "Telemarketing",
      },
      {
        heading: "Duration",
        title: "JULY 2023 - DEC 2024",
      },
      {
        heading: "My Role & Team Size",
        title: "Senior Frontend Engineer  -  3",
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
    challenges: [
      "Integrating a seamless call center dialer system",
      "Ensuring real-time order processing",
      "Developing a scalable and responsive frontend",
      "Implementing efficient state management with Redux Toolkit",
      "Optimizing performance for large-scale user interactions",
      "Coordinating effectively within a small team of 3 developers",
      "Creating a smooth and efficient sales page to resolve all user queries quickly by leveraging existing customer data, location-based services, and optimized performance",
    ],
    approaches: [
      "Implemented WebSocket technology to ensure real-time updates and seamless integration with the call center dialer system.",
      "Designed and developed an optimized backend architecture to handle high-volume real-time order processing efficiently.",
      "Leveraged Tailwind CSS and React to create a scalable, responsive UI that adapts to various screen sizes and devices.",
      "Utilized Redux Toolkit for state management, ensuring a predictable and maintainable application structure.",
      "Optimized critical UI components and backend queries to handle large-scale user interactions with minimal latency.",
      "Adopted Agile methodologies and conducted regular team stand-ups to streamline communication and collaboration within a team of 3 developers.",
      "Built an intuitive and fast sales page using advanced caching mechanisms, location-based data fetching, and dynamic query optimization to enhance customer query resolution speed.",
    ],
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
        title: "JAN 2023 - APRIL 2023",
      },
      {
        heading: "My Role",
        title: "Intern Frontend Engineer",
      },
      {
        heading: "Team Size",
        title: "8",
      },
      {
        heading: "Frontend",
        title:
          "Nextjs, Tailwind, Cypress, Storybook, Redux & Redux Toolkit, MUI, Google Maps API, Cypress Component Testing",
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
    challenges: [
      "Designing a user-friendly interface for an e-commerce platform connecting sellers and consumers.",
      "Ensuring seamless integration of product listings and real-time inventory updates.",
      "Developing a scalable and responsive frontend to accommodate a growing user base.",
      "Implementing efficient state management for handling product categories, filters, and cart functionalities.",
      "Optimizing page load times and performance for a fast and engaging user experience.",
      "Collaborating effectively with a small team during the internship to meet project deadlines.",
      "Creating a smooth and efficient order tracking page to help users easily access their order status and resolve queries quickly by leveraging real-time data and location-based services.",
    ],
    approaches: [
      "Used React and Tailwind CSS to design a visually appealing and user-friendly interface tailored for e-commerce needs.",
      "Implemented API integration to fetch product listings and ensure real-time synchronization with inventory data.",
      "Developed a fully responsive design to ensure optimal user experience across devices and screen sizes.",
      "Utilized Redux Toolkit for efficient state management of product categories, filters, cart data, and user sessions.",
      "Performed performance optimizations, such as lazy loading images and prefetching data, to enhance page load speeds.",
      "Communicated regularly with the team during Agile sprints to ensure alignment and timely delivery of tasks.",
      "Built a dedicated order tracking page with real-time updates, utilizing advanced caching and geolocation features for enhanced query resolution.",
    ],
  },
  {
    _id: "PRJ003",
    projectName: "SJBT",
    liveUrl: "https://jainbandhutrust.com/",
    projectType: "E-Pan web application",
    title: "StreamlineERP",
    description:
      "SJBT Project (Shri Jain Bandhu Trust) is a platform designed to facilitate PAN card services across India. During my internship, I contributed significantly to this project, gaining valuable experience in SEO, the Atomic Design Pattern, and writing component tests and test cases. This project played a crucial role in securing my full-time job, and it now serves thousands of users nationwide by streamlining PAN card application and management processes efficiently.",
    information: [
      {
        heading: "Client",
        title: "Shri Jain Bandhu Trust",
      },
      {
        heading: "Service",
        title: "Retailer Online Selling",
      },
      {
        heading: "Duration",
        title: "MARCH 2023 - JULY 2024",
      },
      {
        heading: "My Role",
        title: "Intern Frontend Engineer",
      },
      {
        heading: "Team Size",
        title: "4",
      },
      {
        heading: "Frontend",
        title:
          "Nextjs, React, Typescript, Tailwind, Storybook, Redux & Redux Toolkit & Some Extrnal Packages",
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
    challenges: [
      "Developing a user-friendly interface for managing PAN card applications, Gumasta licenses, and ITR filing services.",
      "Ensuring seamless integration of form submissions and document uploads for user applications.",
      "Building a scalable and responsive frontend to accommodate users across diverse devices and regions.",
      "Implementing efficient state management for tracking user applications and administrative workflows.",
      "Optimizing the application for fast performance, ensuring smooth navigation and minimal load times.",
      "Designing and developing key features of the admin panel to facilitate application review and approval processes.",
      "Collaborating with the backend team to integrate APIs for real-time status updates and secure data handling.",
    ],
    approaches: [
      "Designed a clean and intuitive user interface using React and Tailwind CSS to simplify the application process.",
      "Implemented file upload functionality with progress tracking to ensure a seamless document submission experience.",
      "Developed a fully responsive frontend design to cater to users across various devices and screen sizes.",
      "Utilized Redux Toolkit to manage user application data and admin workflows efficiently.",
      "Enhanced performance through techniques like lazy loading, caching, and optimizing API calls.",
      "Built critical components of the admin panel, including dashboards and application review modules, to streamline administrative tasks.",
      "Integrated backend APIs for real-time application status updates and ensured secure data transmission through proper validation.",
    ],
  },
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
