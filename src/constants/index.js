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
    tripguide,
    threejs,
  } from "../assets";
  
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
      title: "React js Developer",
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
        "Effectively managed the front-end and back-end stack  of website developed in internship to deliver new features requested by client  during weekly standup.",
        " Assessed the most appropriate technical solutions priortizing Quality, Performance and Responsiveness for the application and migrated it to AWS.",
        " Developing a web 3.0 along with my team ,a website which incorporates concepts such as decentralization, blockchain technologies.",
        " Collaborated with fellow developers to devise a MongoDB-based database schema and Node.js-driven API architecture, while leveraging tools such as Cloudinary to optimize data rendering.",
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
      name: "Chang Chauy",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Ghost club",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "weboasis website",
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
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences,  projects };