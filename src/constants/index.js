import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
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
} from "../../public/assets";

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Administrator",
    company_name: "ORMVAD",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 14, 2023 – August 14, 2023",
    points: [
      "Administration and configuration of the Zabbix monitoring tool.",
      "Functional study of the project, including requirements analysis.",
      "echnical study of adopted software and hardware architectures.",
      "Configuration and testing in a Linux environment.",
      "Monitoring and management of IT systems.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Capgemini TS Maroc",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 10, 2024 – August 15, 2024",
    points: [
      "Development of a web application Digicamp Monitoring for HR and internal project management.",
      "Technologies: Java (Spring Boot) for back-end, Angular for front-end, MySQL for database.",
      "Agile methodology: Sprint planning and task management using Scrum.",
      "CRUD features implementation for managing projects and collaborators, plus automatic newsletter generation",
      "Secure authentication and role-based access control using Spring Security",
    ],
  },
 
  
];

const testimonials = [
  {
    testimonial:
      "Aya était très impliquée, très bonne communication, assidue, elle a pu rapidement se montrer en compétence sur plusieurs technologies comme Angular, SpringBoot.",
    name: "Ali Saadoun",
    designation: "Software Engineer",
    company: "Capgemini TS Maroc",
    image: "/assets/ali.jpg",
  },
  {
    testimonial:
      "Ta curiosité, ton enthousiasme, tu t'es rapidement intégrée et élargir ton réseau ce sont des softs skills qui sont été grandement apprécié et remarquable.",
    name: "Reda Badouan",
    designation: "Resource Manager Talent Unit ",
    company: "Capgemini TS Maroc",
    image: "/assets/reda.jpg",
  },
];

const projects = [
  {
    name: "BESS Resto",
    description:
      "Web-based platform that allows users to search and locate restaurants in a selected city.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "mySQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ayaberhil/BESS-RESTO",
  },
  {
    name: "Movies App",
    description:
      "A mobile application that allows users to search for movies, view movie details, check their age to access the app, and find available cinemas in a chosen city.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "api everypixel",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ayaberhil/Movies-app",
  },
  {
    name: "Quizz App",
    description:
      "A mobile app where users guess logos of popular brands. It challenges users' recognition skills as they identify logos from various industries. Players can track their progress.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/ayaberhil/Quiz_app",
  },
];

export { services, technologies, experiences, testimonials, projects };
