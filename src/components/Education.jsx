import React from "react";

const Education = () => {
  return (
    <>
      <section id="education" className="edu-section relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-20" />

        <div className="edu-wrapper relative z-10">
          <div className="animate-slide-in-left">
            <h2 className="edu-heading">Education</h2>
            <p className="text-secondary text-center -mt-10 mb-16">My academic foundation and learning journey</p>
          </div>

          <div className="edu-grid">
            {/* B.Tech */}
            <div className="edu-card glass-morphism card-3d animate-slide-up">
              <span className="edu-year">2023 – 2027</span>
              <h3 className="text-[#915EFF]">B.Tech in Artificial Intelligence & Machine Learning</h3>
              <p className="edu-college">Kongu Engineering College</p>
              <div className="edu-score">CGPA: 9.02*</div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" /></svg>
              </div>
            </div>

            {/* HSC */}
            <div className="edu-card glass-morphism card-3d animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="edu-year">2023</span>
              <h3 className="text-[#915EFF]">HSC – Computer Science</h3>
              <p className="edu-college">Joy Matric Higher Secondary School</p>
              <div className="edu-score">Percentage: 91.8%</div>
            </div>

            {/* SSLC */}
            <div className="edu-card glass-morphism card-3d animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="edu-year">2021</span>
              <h3 className="text-[#915EFF]">Secondary School Leaving Certificate (SSLC)</h3>
              <p className="edu-college">Joy Matric Higher Secondary School</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .edu-section {
          padding: 100px 8%;
          background: #050816;
          color: #ffffff;
          text-align: center;
        }

        .edu-wrapper {
          max-width: 1100px;
          margin: auto;
        }

        .edu-heading {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 50px;
          letter-spacing: 1px;
          color: white;
        }

        .edu-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .edu-card {
          width: 100%;
          max-width: 700px;
          padding: 35px 30px;
          border-radius: 20px;
          text-align: left;
          position: relative;
        }

        .edu-year {
          display: inline-block;
          padding: 6px 16px;
          margin-bottom: 15px;
          font-size: 0.85rem;
          border-radius: 25px;
          background: #915EFF;
          font-weight: bold;
          color: white;
          box-shadow: 0 0 10px rgba(145,94,255,0.3);
        }

        .edu-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .edu-college {
          color: #aaa;
          margin-bottom: 15px;
          font-size: 1rem;
          font-weight: 500;
        }

        .edu-score {
          display: inline-block;
          padding: 8px 18px;
          background: rgba(145, 94, 255, 0.1);
          border: 1px solid rgba(145, 94, 255, 0.2);
          border-radius: 10px;
          font-weight: 600;
          color: #915EFF;
        }

        @media (max-width: 768px) {
          .edu-heading {
            font-size: 2.5rem;
          }

          .edu-card {
            padding: 25px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Education;
