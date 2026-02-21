import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";

const AchievementCard = ({ title, date, event, venue, index }) => (
  <div
    className="
      bg-tertiary 
      glass-morphism
      rounded-2xl 
      p-6 
      w-[320px] 
      min-h-[230px]
      flex 
      flex-col
      justify-between
      shadow-lg
      card-3d
      animate-slide-up
    "
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div>
      <h3 className="text-white font-bold text-[18px] leading-snug">
        {title}
      </h3>

      <p className="text-[#915EFF] text-[13px] mt-1 font-semibold">
        {date}
      </p>

      <p className="text-white-100 text-[14px] mt-3 leading-relaxed">
        {event}
      </p>

      {venue && (
        <p className="text-secondary text-[12px] mt-1 italic">
          {venue}
        </p>
      )}
    </div>

    <div className="mt-4 h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(145,94,255,0.5)]" />
  </div>
);

const Achievements = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) =>
        prev + 1 >= achievements.length ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleCards = [
    { ...achievements[startIndex], id: startIndex },
    { ...achievements[(startIndex + 1) % achievements.length], id: (startIndex + 1) % achievements.length },
    { ...achievements[(startIndex + 2) % achievements.length], id: (startIndex + 2) % achievements.length },
  ];

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] overflow-hidden">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <div className="animate-slide-in-left">
          <p className={styles.sectionSubText}>Recognitions & Awards</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </div>
      </div>

      <div className={`-mt-16 pb-14 ${styles.paddingX}`}>
        <div className="flex justify-center gap-7 relative overflow-hidden">
          <div className="flex gap-7 animate-slide-up">
            {visibleCards.map((item, index) => (
              <AchievementCard key={`${item.id}-${index}`} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");

