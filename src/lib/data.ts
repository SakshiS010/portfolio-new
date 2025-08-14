import { StaticImageData } from "next/legacy/image";
import { Images } from "./images";

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: StaticImageData;
  videoUrl?: string;
  githubUrl: string;
  tools: string[];
  category: string;
  slug: string;
  projectStatus: string;
  liveDemoUrl?: string;
  keyFeatures?: string[];
  galleryImages?: StaticImageData[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company?: string;
  avatarUrl?: StaticImageData;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "CPU-Schedulling-Algorithm",
    slug: "cpu-schedulling-algorithm",
    shortDescription: "A C++ simulator for visualizing and comparing 8 CPU scheduling algorithms through timelines and performance stats.",
    description: "A C++-based CPU Scheduling Algorithms Simulator that implements 8 different scheduling strategies, including FCFS, RR, SPN, SRT, HRRN, FB-1, FB-2i, and Aging. It supports both timeline visualization and statistical analysis, allowing users to compare algorithm performance for multiple processes with varying arrival and service times. The tool is useful for understanding scheduling behavior, preventing starvation, and evaluating trade-offs in system performance.",
    imageUrl: Images.BookstoreThumbnail,
    githubUrl: "https://github.com/SakshiS010/cpu-schedulling-algorithm",
    tools: [ "C++", "Makefile", "g++" ],
    category: "Web",
    projectStatus: "Completed",
    keyFeatures: [ "Responsive and interactive UI", "Client-side data fetching and caching", "Integration with a Node.js backend", "Seamless chatbot widget integration" ],
    galleryImages: [
      Images.BookstoreThumbnail,
      Images.BookstoreHomepage1,
      Images.BookstoreHomepage2,
      Images.BookstoreHomepage3,
      Images.BookstoreCategory1,
      Images.BookstoreCategory2,
      Images.BookstoreCategory3,
    ]
  },
  {
    id: "2",
    title: "Blockchain based Vothing System",
    slug: "online-bookstore-project-backend",
    shortDescription: "A decentralized Ethereum-based voting system that ensures secure, transparent elections with admin verification, real-time results, and seamless blockchain integration.",
    description: "Decentralised Voting (dVoting) is an Ethereum-based application designed to conduct secure, transparent, and tamper-proof elections. It features admin-controlled voter verification, real-time result display, and a full-stack setup built with Solidity, Truffle, React, and Ganache, integrated seamlessly with Metamask for blockchain interactions.",
    imageUrl: Images.BookstoreBackend,
    githubUrl: "https://github.com/SakshiS010/blockchain-based-voting-system",
    tools: [ "Solidity", "Truffle", "React", "Ganache", "Metamask", "Node.js" ],
    category: "Web",
    projectStatus: "Completed",
    keyFeatures: [ "Admin-controlled voter registration and verification", "Secure and transparent Ethereum blockchain voting", "Real-time result display after election closure", "Smart contract-based election management", "Seamless Metamask integration for voters and admins", "Local blockchain setup with Ganache for development and testing" ],
    galleryImages: [ Images.BookstoreBackend ]
  },
  {
    id: "3",
    title: "AI Interview Mocker",
    slug: "ai-interview-mocker",
    shortDescription: "An AI-powered interview mocker built with Next.js, designed to simulate realistic interview scenarios and help users practice and improve their responses.",
    description: "AI Interview Mocker is a Next.js-based application that leverages AI to simulate realistic interview scenarios, helping users prepare effectively for job interviews. It provides an interactive platform to practice answering questions, receive feedback, and improve communication skills in a lifelike environment.",
    imageUrl: Images.BookstoreChatbot,
    githubUrl: "https://github.com/SakshiS010/ai-interview-mocker",
    tools: [ "Next.js", "React", "TypeScript", "Tailwind CSS" ],
    category: "AI",
    projectStatus: "Completed",
    keyFeatures: [ "AI-powered simulation of realistic interview scenarios", "Interactive platform for practicing and refining responses", "Built with Next.js for fast and responsive performance", "Customizable question sets for targeted preparation" ],
    galleryImages: [ Images.BookstoreChatbot ]
  },
  {
    id: "4",
    title: "Social Media Forensics & Analysis API",
    slug: "social-media-forensics-analysis-api",
    shortDescription: "A Social Media Forensics API analyzes Twitter data to provide user insights, content analysis, behavioral patterns, and detailed forensic reports with visualizations.",
    description: "Social Media Forensics API is a Node.js-based tool that scrapes and analyzes Twitter data to deliver comprehensive user insights, sentiment and content analysis, behavioral pattern detection, and risk assessments, along with detailed forensic reports featuring visualizations like word clouds, heatmaps, and network graphs.",
    imageUrl: Images.ChatHubWeb,
    githubUrl: "https://github.com/SakshiS010/social-media-forensics-project",
    tools:[ "Node.js", "Express.js", "Cheerio", "Puppeteer", "Chart.js", "PDFKit" ],
    category: "Web",
    projectStatus: "Completed",
    keyFeatures:[
"User profile and tweet content analysis",
"Sentiment and behavioral pattern detection",
"Risk assessment and suspicious activity identification",
"Automated PDF report generation with visualizations",
"Engagement heatmap, word cloud, and interaction network graph",
"Real-time data scraping from Twitter for up-to-date insights"
],
    galleryImages: [ Images.ChatHubWeb ]
  },
  {
    id: "5",
    title: "My Personal Portfolio Website",
    slug: "portfolio-website",
    shortDescription: "The very portfolio you are currently exploring, designed to be a dynamic and interactive showcase of my journey as a developer.",
    description: "The primary goal of this project was to create a personal, professional space to showcase my skills, projects, and career journey. I chose a modern tech stack, including Next.js for its performance and SEO capabilities, and Framer Motion to craft a dynamic, memorable user experience. This portfolio is not just a list of my work; it's a testament to my skills in frontend development, my attention to design detail, and my ability to build a complete application from the ground up.",
    imageUrl: Images.PortfolioThumbnail,
    githubUrl: "https://github.com/dhlananhh/my-3d-portfolio",
    tools: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Framer Motion",
      "React Bits",
      "React Three Fiber",
      "Shadcn UI",
      "Radix UI"
    ],
    category: "Web",
    projectStatus: "Completed",
    liveDemoUrl: "https://dhlananh-dev-portfolio.vercel.app/",
    keyFeatures: [
      "Interactive Fluid Cursor & 3D Starfield",
      "Dynamic Project Filtering by Category",
      "Seamless Page Transitions with Framer Motion",
      "Dedicated, Rich-Content Project Detail Pages",
      "Live GitHub Contribution Graph Integration",
      "Infinite Scrolling Testimonial Marquee",
      "Fully Responsive Design for All Devices"
    ],
    galleryImages: [
      Images.PortfolioThumbnail,
      Images.PortfolioCareerGoals,
      Images.PortfolioProjects,
      Images.PortfolioSkills,
      Images.PortfolioGithub,
      Images.PortfolioTestimonials,
      Images.PortfolioFAQ,
      Images.PortfolioResume,
      Images.PortfolioContact,
      Images.PortfolioDetails1,
      Images.PortfolioDetails2,
      Images.PortfolioDetails3,
    ]
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote: "Lan Anh's coding ability and meticulousness have been a great help to our dev team. The quality of her work consistently exceeded our expectations, and she was a pleasure to collaborate with.",
    author: "Jane Doe",
    company: "Senior Engineer, InnovateTech",
    avatarUrl: Images.JaneDoeAvatar,
  },
  {
    id: "2",
    quote: "Working with Lan Anh was very professional and efficient. She not only has excellent technical skills but also a remarkable ability to work in a team and adapt to new challenges wonderfully.",
    author: "John Smith",
    company: "Head of IT, Digital Solutions Co.",
    avatarUrl: Images.JohnSmithAvatar,
  },
  {
    id: "3",
    quote: "As a Project Manager, I valued Lan Anh's clear communication and commitment to deadlines. She's a reliable developer who truly understands the project's vision and delivers accordingly.",
    author: "Michael Chen",
    company: "Project Manager, Agile Creators",
    avatarUrl: Images.MichaelChenAvatar,
  },
  {
    id: "4",
    quote: "It's rare to find a developer who has such a keen eye for design. Lan Anh brought our Figma designs to life with pixel-perfect accuracy and added insightful animations that enhanced the user experience.",
    author: "Sophia Rodriguez",
    company: "Lead UI/UX Designer, Creative Minds Agency",
    avatarUrl: Images.SophiaRodriguezAvatar,
  },
  {
    id: "5",
    quote: "Pair-programming with Lan Anh was always a learning experience. She's a quick problem-solver and is always open to discussing new approaches. Her proficiency in React and Next.js is top-notch.",
    author: "David Lee",
    company: "Backend Developer, Synergy Systems",
    avatarUrl: Images.DavidLeeAvatar,
  },
  {
    id: "6",
    quote: "Lan Anh consistently delivered high-quality, clean code that was easy to review and maintain. Her attention to detail and proactive approach made a significant impact on our product's stability.",
    author: "Emily White",
    company: "Tech Lead, QuantumLeap Software",
    avatarUrl: Images.EmilyWhiteAvatar,
  }
];

export const workExperiencesData: WorkExperience[] = [
  {
    id: "2",
    company: "SRM Technologies",
    role: "Research Intern ",
    startDate: "June 2025",
    endDate: "Present",
    description: "Interned at SRM Technologies Pvt Ltd, contributing to data tokenization projects to enhance data security. Collaborated with a technical team and successfully delivered the project, earning a ₹50,000 stipend.",
    responsibilities: [
      "Developed and implemented data tokenization techniques to enhance data security and ensure compliance with privacy standards.",
      "Collaborated closely with a technical team and mentors to design and integrate secure data handling processes into existing workflows.",
      "Applied problem-solving and analytical skills to overcome technical challenges, ensuring the successful delivery of an industry-level project.",
      "Achieved project milestones on time and earned a ₹50,000 stipend, awarded based on performance and quality of deliverables."
    ],
  },
  {
    id: "1",
    company: "WebShark Web Services Pvt Ltd ",
    role: "Web Development Intern ",
    startDate: "Nov 2024",
    endDate: "Nov 2024",
    description: "Completed a one-month internship at WebShark Web Services Pvt Ltd, working on enhancing web application UIs with HTML, CSS, and JavaScript. Collaborated with the team to improve user experience and delivered all assigned targets within deadlines.",
    responsibilities: [
      "Enhanced web application interfaces using HTML, CSS, and JavaScript to improve usability and responsiveness.",
      "Collaborated with the development team to implement UI changes aligned with project requirements.",
      "Applied problem-solving skills to address design and functionality issues in existing modules.",
      "Completed all assigned tasks within the given timeline, ensuring quality and performance standards were met."
    ],
  }
];
