import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import profileImage from "../assets/profile.jpg";

const About = () => {
  // 🔹 Typewriter Logic
  const roles = ["Full Stack Developer", "ML Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = roles[roleIndex];

      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(prev => currentFullText.substring(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-16">

      {/* LEFT CONTENT */}
      <div className="flex-1 animate-slide-in-left">
        <div>
          <h2 className={`${styles.sectionHeadText} text-[42px]`}>
            Hi, I’m <span className="text-[#915EFF]">Uma Devi</span>
          </h2>

          {/* 🔹 Changing Role Text with Typwriter effect */}
          <div className="h-[40px] mt-2 flex items-center">
            <h3 className="text-[26px] font-bold text-[#915EFF]">
              {displayText}
            </h3>
          </div>
        </div>

        {/* 🔹 Updated Professional Objective */}
        <p
          className="mt-6 text-secondary text-[18px] max-w-3xl leading-[32px] animate-slide-up"
        >
          I am passionate about continuously enhancing my technical expertise
          and contributing to organizations that foster innovation, creativity,
          and forward-thinking solutions. I aim to develop impactful systems
          that combine scalable web technologies with intelligent machine
          learning models to deliver real-world value.
        </p>

        {/* SOCIAL LINKS */}
        <div
          className="mt-8 flex gap-6 items-center animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          <a
            href="https://github.com/Umadevim-ML"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[24px] hover:text-[#915EFF] transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/umadevim23/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[24px] hover:text-[#915EFF] transition-colors"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/UmaDeviM/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[24px] hover:text-[#915EFF] transition-colors"
          >
            <SiLeetcode />
          </a>

          <a
            href="mailto:umadevim.23ai@gmail.com"
            className="text-white text-[24px] hover:text-[#915EFF] transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* RESUME BUTTON */}
        <div
          className="mt-6 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="/Uma_Devi_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-[#915EFF] px-6 py-3 rounded-lg text-white text-sm font-medium hover:bg-[#7a4de8] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#915EFF]/20"
          >
            <FaFileDownload /> Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="flex justify-center items-center animate-slide-in-right"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#915EFF] to-[#4e31aa] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <img
            src={profileImage}
            alt="Uma Devi"
            className="relative w-[260px] h-[260px] rounded-full object-cover border-4 border-[#915EFF] shadow-lg transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>


    </div>
  );
};

export default SectionWrapper(About, "about");


