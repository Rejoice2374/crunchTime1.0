import React from "react";
import styles from "../../styles";
import constants from "../../constants";

const Guide = () => {
  const guide = constants.Guide;
  return (
    <div>
      <section
        className={`${styles.section} flex-col md:gap-[50px] gap-[40px]`}
      >
        <div className={`${styles.sectionFrame} flex-col !gap-[10px]`}>
          <h2 className="lg:text-[38px] text-[28px] flex-1 text-white relative font-semibold lg:leading-[45.6px] leading-[39.2px] font-work">
            How It Works
          </h2>
          <p className="text-white lg:text-[22px] text-[16px] self-stretch relative flex-1 font-work lg:leading-[35.2px] sm:leading-[22.4px]">
            Find Out How To Get Started
          </p>
        </div>
        <div
          className={`${styles.sectionFrame} md:flex-row flex-col md-gap-[30px] !gap-[20px]`}
        >
          {guide.map((g) => (
            <div
              key={g.guideName}
              className="flex md:flex-1 md:flex-col bg-secondary gap-[20px] items-center self-stretch lg:justify-normal justify-between rounded-[20px] lg:px-[30px] md:pb-[30px] md:px-[20px] md:pt-[10px] p-[20px]"
            >
              <div className="guideimg max-w-[100px] md:max-w-none">
                <img src={g.guideImg} alt="" className="w-full" />
              </div>
              <div className="guideText flex flex-col md:items-center items-start md:m-0 ms-[-14.4px] min-w-[155px] w-[155px] md:w-auto self-stretch gap-2.5 text-white font-work">
                <h4 className="lg:text-[22px] font-semibold lg:leading-[30.8px] leading-[22.4px]">
                  {g.guideName}
                </h4>
                <p className="lg:text-[16px] text-[12px] md:leading-[22.4x] leading-[16.8px] md:text-center">
                  {g.guideDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Guide;
