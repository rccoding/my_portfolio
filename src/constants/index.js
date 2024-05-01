import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    CC,
    creator,
    GC,
    weboasis,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    python,
    next,
    profile,
    tripguide,
    threejs,
  } from "../assets";
  import otl from '../assets/ot.png'
  import arbi from '../assets/ar.png'
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Nextjs",
      icon:next,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software developer",
      company_name: "Weboasis",
      icon: weboasis,
      iconBg: "#383E56",
      date: "August 2022-present",
      points: [
        "Developed a Web3-based website using Next.js and Tailwind CSS, focusing on integrating blockchain technology to offer a modern, responsive user experience",
        "Engineered an innovative LLM tuning platform, leveraging advanced algorithms and AI models. This resulted in a 40% optimization in system performance, enhancing user satisfaction and ensuring robust system architecture and reliability for 24/7 operations",
        "Partnered with cloud developers to transition the platform to AWS, leading to significant improvements in deployment architecture, which increased cost efficiency, speed, and performance by 10-15 times",
        "Successfully managed both the front-end and back-end stack of a website during my internship, consistently delivering project deliverables on set timelines as part of the software development lifecycle.",
        "Collaborated with fellow developers to design a MongoDB-based database schema and a Node.js-driven API architecture for an NFT platform, incorporating Restful web services and optimizing data rendering with Cloudinary."
      ],
    },
    {
      title: "Software developer intern",
      company_name: "Weboasis",
      icon: weboasis,
      iconBg: "#E6DEDD",
      date: "June 2022 - August 20222",
      points: [
        "Designed REST calls using React to streamline user interface performance and tested REST APIs using Postman.",
        "Developed user interfaces from scratch of a Thailand based Service providing website.",
        "Implemented and tested time constraint login using JWT, Async storage and Used understanding of React hooks fundamentals to promote better component lifecycle practices.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front-end Intern",
      company_name: "BMCP-Solutions ",
      icon: creator,
      iconBg: "#383E56",
      date: "May 2021 - August 2021",
      points: [
        "Built the UI of  a mobile friendly website using reactjs for the bmcp solutions company.",
        "Developed React native components to access and show user's data using Expo SDK.",
        "Assessed Material-ui design for technical feasibility.",
        "Adopted AGILE development with biweekly SCRUM ceremonies using Jira.",
      ],
    },
    
  ];
  

  
  const projects = [
    {
      name: "Aalytics services",
      description:
      "an online platform that specializes in providing statistics and analytics services, ideal for businesses or individual users. The name itself suggests a robust focus on data analysis and statistical reporting. This platform offers essential tools that help users track performance, understand data trends, and make informed decisions based on comprehensive data insights. ",
        
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "recoil",
          color: "green-text-gradient",
        },
        {
          name: "blockchain",
          color: "blue-text-gradient",
        },
        {
          name: "Ai",
          color: "green-text-gradient",
        },
      ],
      image: arbi,
      source_code_link: "https://arbiusdata.io/",
    },
    {
      name: "LLM platform",
      description:
      "The newly introduced LLM Tuning Platform is set to revolutionize the AI industry by offering real-time interaction with AI, allowing users to set specific instructions, customize tags, and establish rules for more accurate results. It also offers the ability to customize different AI models according to specific domains. ",
        
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "LLM",
          color: "blue-text-gradient",
        },
        {
          name: "Ai",
          color: "green-text-gradient",
        },
      ],
      image: otl,
      source_code_link: "https://opentune.io/",
    },
    {
      name: "Service managing website",
      description:
        "Web-based platform that allows users to search, book, and manage services for various constructions and home needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: CC,
      source_code_link: "https://changchuay.com/",
    },
    {
      name: "Web 3 art",
      description:
        "Web application that enables users to create and upload web-3 art.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: GC,
      source_code_link: "https://ghostclub.io/",
    },
    {
      name: "Company website",
      description:
        "A portfolio for our company showcasing our projects ",
      tags: [
        {
          name: "gatsby",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weboasis,
      source_code_link: "https://weboasis.io/",
    },
  ];
  
  export { services, technologies, experiences,  projects ,profile};