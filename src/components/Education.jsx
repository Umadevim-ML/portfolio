import React, { useState } from "react";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const educationData = [
    {
      id: 1,
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Kongu Engineering College",
      year: "2023 – 2027",
      score: "CGPA: 9.02*",
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      degree: "HSC – Computer Science",
      institution: "Joy Matric Higher Secondary School",
      year: "2023",
      score: "91.8%",
      icon: <MdSchool />
    },
    {
      id: 3,
      degree: "SSLC",
      institution: "Joy Matric Higher Secondary School",
      year: "2021",
      score: null,
      icon: <FaUniversity />
    }
  ];

  return (
    <section id="education" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-primary overflow-hidden">
      
      {/* Subtle Background Gradient - Matching About page style */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#915EFF]/5 to-transparent" />
      
      {/* Animated Background Lines - Adjusted opacity to match About page subtlety */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#915EFF]/10 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#915EFF]/10 to-transparent animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header - Matching About page style */}
        <div className="text-center mb-20">
          <span className="text-[#915EFF] text-sm tracking-widest uppercase mb-3 block">
            Academic Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-16 h-0.5 bg-[#915EFF] mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Line - More subtle like About page gradients */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-[#915EFF]/20 to-transparent" />

          {/* Education Items */}
          <div className="space-y-16">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeIndex === index;

              return (
                <div
                  key={edu.id}
                  className={`relative flex flex-col md:flex-row items-start gap-8
                             ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Timeline Dot with Pulse - Updated to match About page accent */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 md:top-1/2">
                    <div className={`relative w-4 h-4 rounded-full bg-[#915EFF] transition-all duration-500
                                  ${isActive ? 'scale-150' : 'scale-100'}`}>
                      <div className={`absolute inset-0 rounded-full bg-[#915EFF] animate-ping opacity-75 
                                    ${isActive ? 'animation-iteration-count-infinite' : 'opacity-0'}`} />
                    </div>
                  </div>

                  {/* Content Card - Updated to match About page card style */}
                  <div className={`w-full md:w-[calc(50%-2rem)] pl-8 md:pl-0
                                 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    
                    <div className={`group relative bg-[#151030] rounded-2xl p-8 
                                  border border-[#915EFF]/10 hover:border-[#915EFF]/30
                                  transition-all duration-500 ease-out
                                  ${isActive ? 'transform -translate-y-2 shadow-2xl shadow-[#915EFF]/20' : 'shadow-xl'}`}>
                      
                      {/* Glass Overlay - Matching About page gradient style */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Decorative Corner - Updated purple gradient */}
                      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#915EFF]/20 to-transparent transform rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-700" />
                      </div>

                      {/* Year Badge - Matching About page button style */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#915EFF]/10 rounded-full mb-4">
                        <FaCalendarAlt className="text-[#915EFF] text-xs" />
                        <span className="text-[#915EFF] text-sm font-medium">{edu.year}</span>
                      </div>

                      {/* Degree with Icon - Updated icon color */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`text-[#915EFF] text-xl transition-transform duration-500 
                                      ${isActive ? 'rotate-12 scale-110' : ''}`}>
                          {edu.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white flex-1 leading-tight">
                          {edu.degree}
                        </h3>
                      </div>

                      {/* Institution - Using text-secondary to match About page */}
                      <p className="text-[#aaa6c3] text-base mb-4 pl-8">
                        {edu.institution}
                      </p>

                      {/* Score - Updated to match About page button style */}
                      {edu.score && (
                        <div className="pl-8">
                          <span className="inline-block px-4 py-2 bg-[#1a1a2e] rounded-lg 
                                       text-[#915EFF] font-semibold text-sm
                                       border border-[#915EFF]/20 group-hover:border-[#915EFF]/50 
                                       transition-all duration-300">
                            {edu.score}
                          </span>
                        </div>
                      )}

                      {/* Hover Indicator Line - Matching purple theme */}
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                                    bg-gradient-to-r from-transparent via-[#915EFF] to-transparent 
                                    group-hover:w-3/4 transition-all duration-700`} />
                    </div>
                  </div>

                  {/* Empty div for layout balance */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .edu-card-enter {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .edu-card-enter-even {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default Education;