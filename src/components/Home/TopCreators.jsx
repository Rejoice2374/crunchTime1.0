import React, { useState, useEffect } from "react";
import constants from "../../constants";
import Rocket from "../../assets/rocketlaunch-2@2x.svg";
import styles from "../../styles";

const TopCreators = () => {
  const topCreators = constants.topCreators;
  const [displayCreators, setDisplayCreators] = useState(topCreators);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        // lg screen
        setDisplayCreators(topCreators.slice(0, 12));
      } else if (window.innerWidth > 834) {
        // md screen
        setDisplayCreators(topCreators.slice(0, 6));
      } else {
        // mobile
        setDisplayCreators(topCreators.slice(0, 5));
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, [topCreators]);

  return (
    <div>
      <section className={`${styles.section} flex-col gap-[60px]`}>
        {/* Section Title, subtitle and button*/}
        <div className={`${styles.sectionFrame} justify-between items-end`}>
          <div className="flex flex-col items-start self-stretch gap-[10px] text-white font-work">
            <h2 className="lg:text-[38px] text-[28px] flex-1 relative font-semibold lg:leading-[45.6px] leading-[39.2px] ">
              Top Creators
            </h2>
            <p className="lg:text-[22px] text-[16px] self-stretch relative flex-1 lg:leading-[35.2px] sm:leading-[22.4px]">
              Checkout Top Rated Creators on the NFT Marketplace.
            </p>
          </div>
          <a href="/rankings">
            <div
              className={`${styles.buttonTransparent} ${styles.buttonHover} md:flex hidden items-center justify-center px-[50px] gap-[12px]`}
            >
              <img src={Rocket} alt="" />
              <span>View Rankings</span>
            </div>
          </a>
        </div>
        {/* Section Body with cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 relative  lg:w-[1050px] md:w-[690px] w-[315px] gap-[30px] lg:mx[-80px] mx-[-123px] text-white font-work ">
          {displayCreators.map((top) => (
            <div
              key={top.id}
              className="flex flex-1 lg:flex-col relative bg-secondary p-[20px] gap-[20px] items-center justify-center lg:w-[240px] rounded-[20px] transition-all ease-in-out duration-300 hover:scale-95 "
            >
              <div className="number flex absolute top-[10px] lg:left-[10px] left-[20px] w-[30px] h-[30px] items-center justify-center rounded-full bg-dark text-coolAsh ">
                <span>{top.id}</span>
              </div>
              <div className="artImage lg:w-[110px] w-[60px] lg:h-[120px] h-[60px] ">
                <img src={top.creatorImg} alt="" />
              </div>
              <div className="artInfo flex flex-col gap-[5px] lg:items-center">
                <h5 className="artName text-[22px] font-semibold relative lg:leading-[30.8px] sm:leading-[22.4px]">
                  {top.creatorName}
                </h5>
                <div className="sales flex gap-[10px] text-[16px] self-stretch relative leading-[22.4px]">
                  <p className="text-coolAsh">Total Sales:</p>
                  <p className="font-mono">{top.sales}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="./Rankings">
          <div
            className={`${styles.buttonTransparent} ${styles.buttonHover} md:hidden items-center justify-center px-[50px] gap-[12px]`}
          >
            <img src={Rocket} alt="" />
            <span>View Rankings</span>
          </div>
        </a>
      </section>
    </div>
  );
};

export default TopCreators;
