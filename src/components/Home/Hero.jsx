import React from "react";
import heroAnima from "../../assets/heroanimation.gif";
import constants from "../../constants";
import Rocket from "../../assets/rocketlaunch-2@2x.svg";
import styles from "../../styles";

const Hero = () => {
  const Stats = constants.heroStats;
  return (
    <div className={styles.section}>
      <div className={`${styles.sectionFrame} md:flex-row flex-col`}>
        {/* heroLeft */}
        <div className="relative flex flex-col items-start self-stretch md:gap-[30px] gap-[40px] lg:w-[510px] md:w-[330px]">
          <div className="flex flex-col items-start self-stretch md:gap-[20px] gap-[10px] relative">
            <h1 className="lg:text-[67px] md:text-[38px] text-[28px] text-left text-white relative font-semibold lg:leading-[73.7px] sm:leading-[45.6px] leading-[39.2px]">
              Discover Digital Art & Collect Nfts
            </h1>
            <p className="text-white lg:text-[22px] text-[16px] self-stretch relative lg:leading-[35.2px] sm:leading-[22.4px]">
              Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And
              Sell Art From More Than 20k Nft Artists.
            </p>
          </div>
          <a href="/signup" className="no-underline">
            <div
              className={`${styles.button} ${styles.buttonHover} hidden md:flex items-center justify-center px-[50px] gap-[12px]`}
            >
              <img src={Rocket} alt="" />
              <span>Get Started</span>
            </div>
          </a>

          <div className="stats hidden md:flex self-stretch gap-[30px] items-start relative">
            {Stats.map((stat) => (
              <div
                key={stat.name}
                className="stat flex flex-col flex-1 items-start text-white"
              >
                <h4 className="lg:text-[28px] text-[22px] font-bold self-stretch font-mono whitespace-nowrap lg:leading-[39.2px] lg:mt-[-1px]">
                  {stat.stat}
                </h4>
                <p className="lg:text-[24px] self-stretch whitespace-nowrap font-work lg:leading-[38.4px] relative">
                  {stat.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* HeroRight */}
        <a href="/marketplace">
          <div className="heroRight relative overflow-hidden flex flex-1 cursor-pointer lg:h-[510px] md:h-[330px] h-[315px]">
            <img src={heroAnima} alt="" />
          </div>
        </a>
        <div
          className={`${styles.button} ${styles.buttonHover} md:hidden justify-center px-[60px] self-stretch rounded-[20px] mt-2`}
        >
          <img src={Rocket} alt="" />
          <span>Get Started</span>
        </div>
        <div className="stats flex md:hidden justify-between items-start self-stretch gap-[30px] relative">
          {Stats.map((stat) => (
            <div
              key={stat.name}
              className="stat flex flex-col flex-1 items-start"
            >
              <h4 className="lg:text-[28px] self-stretch whitespace-nowrap text-[22px] font-bold text-white leading-[35.2px] font-mono">
                {stat.stat}
              </h4>
              <p className="text-white text-[16px] leading-[22.4px] font-work relative">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
