import React, { useState, useEffect } from "react";
import constants from "../../constants";
import styles from "../../styles";

const Trending = () => {
  const trend = constants.trending;
  const [trenders, setTrenders] = useState(trend);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    // Debounce the resize handler
    const debouncedResize = debounce(handleResize, 250);
    window.addEventListener("resize", debouncedResize);

    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  useEffect(() => {
    if (windowSize.width > 1024) {
      setTrenders(trend.slice(0, 3)); // Show 3 on large screens
    } else if (windowSize.width > 834) {
      setTrenders(trend.slice(0, 2)); // Show 2 on medium screens
    } else {
      setTrenders(trend.slice(0, 1)); // Show 1 on small screens
    }
  }, [windowSize.width, trend]);

  // Simple debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  return (
    <div>
      <section className={`${styles.section} flex-col gap-[60px]`}>
        <div className="flex flex-col items-start relative lg:w-[1050px] md:w-[690px] w-[315px] gap-[10px] lg:mx[-80px]">
          <h2 className="lg:text-[38px] text-[28px] flex-1 text-white relative font-semibold lg:leading-[45.6px] leading-[39.2px] font-work">
            Trending Collection
          </h2>
          <p className="text-white lg:text-[22px] text-[16px] self-stretch relative flex-1 lg:leading-[35.2px] sm:leading-[22.4px]">
            Checkout Our Weekly Updated Trending Collection.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {trenders.map((t) => (
            <div
              key={t.artName}
              className="flex flex-col items-start rounded-[20px] relative gap-[15px] w-full sm:w-[330px] font-work text-white"
            >
              <div className="flex items-start self-stretch w-full aspect-square cursor-pointer ease-in-out transition-all duration-300 hover:scale-95">
                <img
                  src={t.trendArtImg}
                  alt={t.artName}
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              <div className="flex flex-col items-start self-stretch gap-[10px] relative">
                <h2 className="text-[22px] flex-1 relative font-semibold leading-[30.8px]">
                  {t.artName}
                </h2>
                <div className="artist-card flex items-center self-stretch gap-[12px]">
                  <div className="artist-img flex items-start cursor-pointer ease-in-out transition-all duration-300 hover:scale-110 w-[24px] h-[24px]">
                    <img
                      src={t.artistImg}
                      alt={t.artistName}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="artist-name flex-1 leading-[22.4px] relative whitespace-nowrap">
                    <p>{t.artistName}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Trending;
