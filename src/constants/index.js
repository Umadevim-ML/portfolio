import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  express,

  bootstrap,
  vscode,
  postman,
  github_new,
  canva,
  powerbi,
  java,
  c_lang,
  mysql,
  python,
  visualmath,
  starbot,
  codats,
  powerbiproj
} from "../assets";

import nvidia from "../assets/nvidia.png";
import mongodb1 from "../assets/mongodb1.png";


import bih from "../assets/bih.png";
import ibm from "../assets/ibm.png";
import academic from "../assets/academic.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "certifications", title: "Certifications" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full-Stack Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "AI/ML Engineer", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "git", icon: git },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Express.js", icon: express },
  { name: "VS Code", icon: vscode },
  { name: "Postman", icon: postman },
  { name: "GitHub", icon: github_new },
  { name: "Canva", icon: canva },
  { name: "Power BI", icon: powerbi },
  { name: "Java", icon: java },
  { name: "C", icon: c_lang },
  { name: "MySQL", icon: mysql },
  { name: "SQL", icon: mysql },
  { name: "Python", icon: python },
];

const certifications = [
  {
    title: "MongoDB Certified Associate Developer",
    company_name: "MongoDB, Inc.",
    icon: mongodb1,
    iconBg: "#E8F5E9",
    color: "#2E7D32",
    date: "May 10, 2025",
    link: "https://drive.google.com/file/d/1I_5EyW1x7Hp7aQGVEpIqzJvKcrSx9beJ/view?usp=sharing", // User should update or I keep as placeholder
    description: [
      "Validated core knowledge of MongoDB data modeling and CRUD operations.",
      "Demonstrated practical understanding of NoSQL database design principles.",
    ],
  },
  {
    title: "Getting Started with Deep Learning",
    company_name: "NVIDIA",
    icon: nvidia,
    iconBg: "#E3F2FD",
    color: "#1976D2",
    date: "October 5, 2025",
    link: "https://drive.google.com/file/d/1JoPViDglhnI5f9bUWLKKxMQH5ZBhzGvq/view?usp=sharing", // User should update or I keep as placeholder
    description: [
      "Introduced to neural networks, deep learning workflows, and model training.",
      "Hands-on exposure to tensors, loss functions, and optimization techniques.",
    ],
  },
];

export const achievements = [
  {
    title: "Best Project Presentation & Team Collaboration Award",
    date: "April 2025",
    event: "BYTS INDIA HACKATHON (BIH) 1.0 – Artificial Intelligence Track",
    venue: "Kongu Engineering College",
    image: bih,
  },
  {
    title: "Third Place – GenAI Hackathon",
    date: "September 2025",
    event: "CognitiveX GenAI 24-Hour Hackathon",
    venue: "IBM SkillsBuild",
    image: ibm,
  },
  {
    title: "Merit-Based Academic Excellence Award",
    date: "March 2025",
    event: "Awarded for Outstanding Academic Performance",
    venue: "Kongu Engineering College",
    image: academic,
  },
  {
    title: "3rd Prize – Kaggle Clash, KEC",
    date: "2024",
    event: "Built and assessed ML models, delivering improved accuracy.",
    venue: "Kongu Engineering College"
  },

];

const projects = [


  {
    name: "CODATS — Code Analysis and Threat Scanning System",
    description:
      "Developed a multi-language vulnerability analysis system with inline detection, contextual insights, and fix recommendations. Integrated the solution as a VS Code extension to deliver real-time security feedback within the coding workflow.",
    tags: [
      { name: "vscode-extension", color: "blue-text-gradient" },
      { name: "security", color: "green-text-gradient" },
      { name: "code-analysis", color: "pink-text-gradient" },
      { name: "python", color: "orange-text-gradient" },
      { name: "javascript", color: "blue-text-gradient" },
    ],
    image: codats,
    source_code_link: "https://github.com/Umadevim-ML/CodeVulnarability",
    date: "Jan 2026",
  },
  {
    name: "SplitEase – Smart Expense Splitter App",
    description:
      "Developed a full-stack MERN application that splits group expenses based on each user’s contribution, with user authentication, group management, expense tracking, automated balance reports, and interactive dashboards for transparent and fair expense sharing.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "orange-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Umadevim-ML/expense-splitter",
    date: "Oct 2025",
  },

  {
    name: "ClauseWise – AI Legal Document Analyzer",
    description:
      "Implemented AI and NLP techniques to analyze legal documents, extract key clauses, classify contracts, and summarize content using Large Language Models (LLMs).",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "nlp", color: "green-text-gradient" },
      { name: "llm", color: "pink-text-gradient" },
      { name: "ai", color: "orange-text-gradient" },
      { name: "transformers", color: "blue-text-gradient" },
      { name: "machine-learning", color: "green-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Umadevim-ML/genai-ibm-hackathon.git",
    date: "Sep 2025",
  },
  {
    name: "VisualMath – AI for Smart Learning",
    description:
      "Created an AI-powered learning platform that recognizes math problems using OCR, applies image processing, generates NLP-based explanations, and provides interactive visual learning outputs.",
    tags: [
      { name: "computer-vision", color: "blue-text-gradient" },
      { name: "ocr", color: "green-text-gradient" },
      { name: "deep-learning", color: "pink-text-gradient" },
      { name: "ai", color: "orange-text-gradient" },
      { name: "python", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" },
    ],
    image: visualmath,
    source_code_link: "https://github.com/Umadevim-ML/visualize-math",
    date: "Apr 2025",
  },

  {
    name: "StarRAG Bot — Multimodal Document & Image RAG System",
    description:
      "Built a full-stack multimodal RAG system that enables conversational access to documents and images using OCR and local language models. Features include document/image upload, intelligent text extraction, FAISS-powered vector search, context-aware AI responses, and secure local processing.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "flask", color: "pink-text-gradient" },
      { name: "ocr", color: "orange-text-gradient" },
      { name: "faiss", color: "blue-text-gradient" },
      { name: "llm", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
    ],
    image: starbot,
    source_code_link: "https://github.com/Umadevim-ML/multimodal-ragbot",
    date: "Feb 2026",
  },
  {
    name: "Doctor Appointment Booking System",
    description:
      "Built a full-stack MERN web application for managing doctor appointments with role-based authentication, real-time booking, appointment scheduling, and efficient database management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "orange-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Umadevim-ML/doctor-appointment.git",
    date: "Mar 2025",
  },
  {
    name: "AI Jobs Market Analytics Dashboard",
    description:
      "Built an interactive Power BI dashboard to analyze AI hiring trends, salary distribution by experience level, company size segmentation, and industry demand, delivering clear and actionable market insights.",
    tags: [
      { name: "powerbi", color: "blue-text-gradient" },
      { name: "data-analytics", color: "green-text-gradient" },
      { name: "business-intelligence", color: "pink-text-gradient" },
      { name: "data-visualization", color: "orange-text-gradient" },
      { name: "market-analysis", color: "blue-text-gradient" },
    ],
    image: powerbiproj,
    source_code_link: "https://github.com/Umadevim-ML/jobTrendAnalysis",
    date: "Jan 2026",
  },
];


export { services, technologies, certifications, projects };
