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
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Full‑Stack Developer", icon: web },
  { title: "Backend Engineer (Java/Spring Boot)", icon: backend },
  { title: "Cloud & DevOps (AWS, CI/CD)", icon: creator },
  { title: "Data Engineering & Messaging (Kafka, ETL)", icon: mobile },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Express JS", icon: express },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "Java", icon: java },
];

export const experiences = [
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
  },
];

export const projects = [
  {
    name: "Cloud‑Native Course Management System",
    description:
      "A cloud‑native, serverless Course Management System built with Node.js, Express.js and Sequelize ORM. Deployed on AWS with Auto Scaling, ELB and IAM hardening. CI/CD via GitHub Actions with 50+ zero‑downtime releases. CloudWatch monitoring helped maintain 99.99% uptime.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "/projects/cms.png",
    source_code_link: "https://github.com/uday-7062/Web_app.git",
  },
  {
    name: "Distributed Authentication Gateway",
    description:
      "High‑performance Go authentication gateway handling 10k+ RPS with sub‑10ms latency, securing 100+ microservices via JWT and RBAC. Stateless design with 99.9% uptime, Prometheus metrics, strict rate limiting (1,000 req/min), RS256 verification and audit logging.",
    tags: [
      { name: "go", color: "blue-text-gradient" },
      { name: "jwt", color: "green-text-gradient" },
      { name: "rbac", color: "pink-text-gradient" },
    ],
    image: "/projects/auth.png",
    source_code_link: "https://github.com/uday-7062/Auth_Gateway.git",
  },
  {
    name: "CarryConnect — AI Luggage Sharing",
    description:
      "AI‑powered platform that matches travelers with spare luggage capacity to people needing item transport. Focus on secure communication, transparent transactions, and recommendation‑driven matching to improve logistics efficiency and reduce waste.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "ai", color: "green-text-gradient" },
      { name: "marketplace", color: "pink-text-gradient" },
    ],
    image: "/projects/carry.png",
    source_code_link: "https://github.com/uday-7062/Carry-Connect-app-new.git",
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Bowling Green State University",
    location: "Bowling Green, OH, USA",
    dates: "August 2024 – May 2026",
    highlight:
      "Graduate coursework in distributed systems, cloud computing, and full‑stack engineering.",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Gokaraju Rangaraju Institute of Engineering and Technology",
    location: "Hyderabad, India",
    dates: "June 2018 – July 2022",
    highlight: "Core foundations in algorithms, databases, and software engineering.",
  },
];
