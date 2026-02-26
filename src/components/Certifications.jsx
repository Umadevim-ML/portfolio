import React from "react";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";

const CertificationCard = ({ certification, index }) => {
  return (
    <div
      className="p-6 rounded-2xl w-full sm:w-[500px] flex items-center gap-6 animate-slide-up"
      style={{
        backgroundColor: certification.iconBg,
        border: `1px solid ${certification.color}33`,
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Icon/Badge on the left */}
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0 shadow-md"
        style={{ backgroundColor: certification.color }}
      >
        <FaAward className="text-white text-3xl" />
      </div>

      {/* Content in the middle */}
      <div className="flex flex-col flex-grow">
        <h3
          className="text-[18px] font-bold leading-tight"
          style={{ color: "#1a1a1a" }}
        >
          {certification.title}
        </h3>
        <p
          className="text-[14px] font-semibold mt-1 opacity-70"
          style={{ color: "#1a1a1a" }}
        >
          {certification.company_name}
        </p>

        {/* View Certificate Link */}
        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-4 font-bold text-[13px] hover:underline w-fit"
          style={{ color: certification.color }}
        >
          View Certificate <FaExternalLinkAlt className="text-[10px]" />
        </a>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="animate-slide-in-left">
        <h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px] text-center">
          Certifications
        </h2>
        <p className="text-secondary text-[16px] text-center mt-2">
          Verified achievements from reputed platforms
        </p>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-10 w-full max-w-7xl mx-auto">
        {certifications.map((certification, index) => (
          <CertificationCard
            key={`certification-${index}`}
            index={index}
            certification={certification}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
