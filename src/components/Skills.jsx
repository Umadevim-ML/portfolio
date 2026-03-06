import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const technicalSkills = [
  "C", "Java", "Python", "JavaScript",
  "HTML", "CSS", "React.js",
  "Node.js", "Express.js",
  "MongoDB", "MySQL",
];

const tools = [
  "Git", "GitHub", "Power BI"
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
];

const languages = [
  "Tamil",
  "English",
];

const getIcon = (name) => {
  const sName = name.toLowerCase().trim();
  
  const tech = technologies.find(t => {
    const tName = t.name.toLowerCase().trim();
    
    // 1. Exact match
    if (tName === sName) return true;
    
    // 2. Exact word match (e.g., "React JS" matches "React")
    const words = tName.split(/\s+/);
    if (words.includes(sName)) return true;
    
    // 3. Handle specific short matches exactly
    if (sName.length <= 2) return tName === sName;
    
    // 4. Normalized match (e.g., "React JS" matches "React.js")
    const normalize = (str) => str.replace(/\.js$/, "").replace(/\s+js$/, "").replace(/\s+[35]$/, "");
    return normalize(tName) === normalize(sName);
  });
  
  return tech ? tech.icon : null;
};

const SkillCard = ({ name, index, showIcon = true }) => {
  const icon = showIcon ? getIcon(name) : null;
  // Specific scaling for these icons as they often have larger internal margins
  const needsScale = ["C", "Java", "Python"].includes(name);

  return (
    <div
      className="
        bg-tertiary
        text-white
        px-6 py-4
        rounded-xl
        flex items-center gap-4
        text-sm md:text-base
        shadow-lg
        cursor-default
        card-3d
        glass-morphism
        animate-slide-up
        hover:border-[#915EFF]/50
        border border-transparent
        transition-all
      "
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {icon && (
        <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center p-1.5 shrink-0 shadow-inner overflow-hidden">
          <img 
            src={icon} 
            alt={name} 
            className={`w-full h-full object-contain ${needsScale ? "scale-[1.3]" : "scale-100"}`} 
          />
        </div>
      )}
      <span className="font-medium">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">

      {/* ===== Title ===== */}
      <div className="animate-slide-in-left">
        <h2 className="text-white text-4xl font-bold text-center">
          Skills
        </h2>
        <p className="text-secondary text-center mt-3">
          Tools, technologies, professional strengths, and languages
        </p>
      </div>

      {/* ===== Technical Skills ===== */}
      <div className="animate-slide-up">
        <h3 className="text-white text-2xl font-semibold mb-6 border-l-4 border-[#915EFF] pl-4">
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {technicalSkills.map((skill, index) => (
            <SkillCard key={skill} name={skill} index={index} />
          ))}
        </div>
      </div>

      <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h3 className="text-white text-2xl font-semibold mb-6 border-l-4 border-[#915EFF] pl-4">
          Tools
        </h3>
        <div className="flex flex-wrap gap-4">
          {tools.map((skill, index) => (
            <SkillCard key={skill} name={skill} index={index + technicalSkills.length} />
          ))}
        </div>
      </div>

      {/* ===== Soft Skills ===== */}
      <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-white text-2xl font-semibold mb-6 border-l-4 border-[#915EFF] pl-4">
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {softSkills.map((skill, index) => (
            <SkillCard key={skill} name={skill} index={index + technicalSkills.length + tools.length} showIcon={false} />
          ))}
        </div>
      </div>

      {/* ===== Languages ===== */}
      <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-white text-2xl font-semibold mb-6 border-l-4 border-[#915EFF] pl-4">
          Languages
        </h3>
        <div className="flex flex-wrap gap-4">
          {languages.map((lang, index) => (
            <SkillCard key={lang} name={lang} index={index + technicalSkills.length + tools.length + softSkills.length} showIcon={false} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default SectionWrapper(Skills, "skills");



