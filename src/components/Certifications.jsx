import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";

const CertificationCard = ({ certification, onClick, index }) => {
  return (
    <div
      className={`relative flex items-center justify-between w-full mb-8 animate-slide-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="hidden md:block w-[45%]" />

      {/* Timeline dot */}
      <div className="absolute left-[20px] md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-[#915EFF] border-4 border-[#1d1836] z-10 shadow-[0_0_10px_#915EFF]" />

      <div
        className="ml-[50px] md:ml-0 w-full md:w-[45%] glass-morphism p-6 rounded-2xl cursor-pointer hover:scale-[1.02] transition-transform card-3d"
        onClick={onClick}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center p-2">
            <img
              src={certification.icon}
              alt={certification.company_name}
              className='w-full h-full object-contain'
            />
          </div>
          <div>
            <h3 className='text-white text-[20px] font-bold'>{certification.title}</h3>
            <p className='text-secondary text-[14px] font-semibold'>{certification.company_name} | {certification.date}</p>
          </div>
        </div>

        <div className="mt-4 w-full flex justify-center">
          <img
            src={certification.icon}
            alt={`${certification.title} certificate`}
            className="w-full max-w-[280px] rounded-lg border border-gray-700 shadow-lg"
          />
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {certification.description.map((desc, index) => (
            <li
              key={`certification-desc-${index}`}
              className='text-white-100 text-[12px] pl-1 tracking-wider'
            >
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const navElement = document.querySelector('nav');
    if (navElement) {
      if (selectedCert) {
        navElement.classList.add('nav-hidden');
      } else {
        navElement.classList.remove('nav-hidden');
      }
    }
  }, [selectedCert]);

  return (
    <>
      <div className="animate-slide-in-left">
        <p className={`${styles.sectionSubText} text-center`}>
          My learning achievements
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications.
        </h2>
      </div>

      <div className='mt-20 relative px-4'>
        {/* Vertical line through center */}
        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#915EFF] to-transparent md:-ml-0.5" />

        <div className='flex flex-col'>
          {certifications.map((certification, index) => (
            <CertificationCard
              key={`certification-${index}`}
              certification={certification}
              index={index}
              onClick={() => setSelectedCert(certification)}
            />
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 animate-fade-in" onClick={() => setSelectedCert(null)}>
          <div className="relative max-w-4xl max-h-full p-4 animate-scale-up" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white text-3xl bg-[#915EFF] rounded-full w-10 h-10 flex items-center justify-center z-60 hover:bg-[#7a4de8] transition-colors"
              onClick={() => setSelectedCert(null)}
            >
              &times;
            </button>
            <img
              src={selectedCert.icon}
              alt={selectedCert.company_name}
              className="w-full h-auto object-contain max-h-[70vh] rounded-lg shadow-2xl"
            />
            <div className="text-white text-center mt-4 glass-morphism p-6 rounded-lg">
              <p className="font-bold text-xl text-[#915EFF]">{selectedCert.title}</p>
              <p className="text-lg text-secondary">{selectedCert.company_name}</p>
              <p className="text-sm mt-2 text-gray-400">{selectedCert.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");

