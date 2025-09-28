import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    java,
    express,
    portfolio,
    age_calculator,
    dragon,
    foodie,
    sign_in,
    to_do_list,
    zomato,
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
  { title: "Full‑Stack Developer", icon: web },
  { title: "Backend Engineer (Java/Spring Boot)", icon: backend },
  { title: "Cloud & DevOps (AWS, CI/CD)", icon: creator },
  { title: "Data Engineering & Messaging (Kafka, ETL)", icon: mobile },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Express JS", icon: express },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "Java", icon: java },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Intel Corporation, USA",
    icon: backend,
    iconBg: "#1f2937",
    iconUrl: "/company/intel.png",
    date: "May 2025 – Aug 2025",
    points: [
      "Built a highly scalable, event‑driven microservice on AWS achieving 99.99% uptime and improving replenishment accuracy by 11%.",
      "Improved codebase with 25% faster responses and 68% fewer code smells via SOLID design; reached 90%+ test coverage.",
      "Designed a high‑performance Spring Batch job with multi‑threading and DB2/POGO sync, doubling throughput for 100k+ records/day.",
      "Implemented bulk edit workflows with validation, retries, and reporting for 100k+ records/day, aligned with Agile practices.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Target, India",
    icon: web,
    iconBg: "#0f766e",
    iconUrl: "/company/target.png",
    date: "Jul 2023 – Jul 2024",
    points: [
      "Designed and developed REST APIs using Java, Node.js, and Gradle to support throughput and capacity management across retail systems.",
      "Integrated forecast data with stakeholder adjustments enabling dynamic capacity planning and real‑time decision making.",
      "Implemented async processing and real‑time communication with Apache Kafka improving scalability and responsiveness.",
      "Automated tests using POC frameworks and Groovy improving coverage, reliability, and early defect detection.",
      "Enhanced observability with Grafana and ELK for logging, monitoring, and troubleshooting.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Lowes, India",
    icon: creator,
    iconBg: "#7c3aed",
    iconUrl: "/company/lowes.png",
    date: "Jun 2022 – Jul 2023",
    points: [
      "Developed a generic ETL platform processing data for 12,000+ pipelines across GCP, Hadoop, RDBMS, and Kafka.",
      "Implemented load balancing and CI/CD (Docker, Jenkins, GitHub Actions) ensuring high availability in Spring Boot 3.x microservices.",
      "Applied TDD with unit/integration tests (80%+ coverage) improving reliability and reducing defects in production.",
      "Designed micro‑frontend UI with Angular for modular development and faster deployments; built REST APIs and responsive UI components.",
    ],
];

const projects = [
  {
    name: "3D Portfolio",
    description: "This is an interactive 3d portfolio website developed using ReactJS, ThreeJS and Framer Motion with great 3D effects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/deshmukh-ankit/3D_portfolio",
  },
  {
    name: "To-do list",
    description:
      "Web application that enables users to maintain their order of the day.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: to_do_list,
    source_code_link: "https://github.com/deshmukh-ankit/todolist-react",
  },
  {
    name: "Dragon dino game",
    description:
      "A simple and attractive game made using javascript.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dragon,
    source_code_link: "https://github.com/deshmukh-ankit/dino-game-javascript",
  },
  {
    name: "Zomato landing-page clone",
    description:
      "A landing page clone of popular food ordering application Zomato.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: zomato,
    source_code_link: "https://github.com/deshmukh-ankit/zomato-clone",
  },
  {
    name: "Foodie Restaurant Website",
    description:
      "A simple and user friendly website for a restaurant.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: foodie,
    source_code_link: "https://github.com/deshmukh-ankit/foodie-restaurant-website",
  },
  {
    name: "Sign in page",
    description:
      "A web sign in page made using frontend web technologies with user and password authentication.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: sign_in,
    source_code_link: "https://github.com/deshmukh-ankit/login-form",
  },
  {
    name: "Age Calculator",
    description:
      "A web application that enables user to count their age from an entered date to present day.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: age_calculator,
    source_code_link: "https://github.com/deshmukh-ankit/age-calculator",
  },
];

export { services, technologies, experiences, projects };
