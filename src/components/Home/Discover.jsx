import React, { useState, useEffect } from "react";
import constants from "../../constants";
import styles from "../../styles";
import eye from "../../assets/eye@2x.svg";

const Discover = () => {
  const Disco = constants.discover;
  const [discoCard, setDiscoCard] = useState(Disco);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        // lg screen
        setDiscoCard(Disco.slice(0, 3));
      } else if (window.innerWidth > 834) {
        // md screen
        setDiscoCard(Disco.slice(0, 2));
      } else {
        // mobile
        setDiscoCard(Disco.slice(0, 3));
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, [Disco]);

  return (
    <div>
      <section className={`${styles.section} flex-col gap-[60px]`}>
        <div className={`${styles.sectionFrame} !items-end !gap-[100px]`}>
          <div className="flex flex-1 flex-col items-start self-stretch gap-[10px] text-white font-work">
            <h2 className="lg:text-[38px] text-[28px] flex-1 relative font-semibold lg:leading-[45.6px] leading-[39.2px] ">
              Discover More NFTs
            </h2>
            <p className="lg:text-[22px] text-[16px] self-stretch relative flex-1 lg:leading-[35.2px] sm:leading-[22.4px]">
              Explore New Trending Nfts
            </p>
          </div>
          <a href="/marketplace">
            <div
              className={`${styles.buttonTransparent} ${styles.buttonHover} md:flex hidden items-center justify-center !gap-[12px]`}
            >
              <img src={eye} alt="" />
              <span>See All</span>
            </div>
          </a>
        </div>
        <div className={`${styles.sectionFrame} md:flex-row flex-col`}>
          {discoCard.map((dis) => (
            <div
              key={dis.bid}
              className="flex flex-col bg-secondary  rounded-[20px] font-work text-white transition-all ease-in-out duration-300 hover:scale-95"
            >
              <div className="items-start self-stretch">
                <img src={dis.disImage} alt="" />
              </div>
              <div className="info-card flex flex-col p-[20px] gap-[10px] ">
                <h2 className="text-[22px] flex-1 relative font-semibold leading-[30.8px]">
                  {dis.discoName}
                </h2>
                <div className="flex items-center self-stretch gap-[12px]">
                  <div className="artist-img flex items-start cursor-pointer w-[24px] h-[24px] ">
                    <img src={dis.artImg} alt="" />
                  </div>
                  <div className="artist-name flex-1 leading-[22.4px] relative whitespace-nowrap">
                    <p>{dis.artName}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col font-mono text-[16px] self-stretch relative leading-[22.4px]">
                    <p className="text-coolAsh text-[12px]">Price</p>
                    <p>{dis.price}</p>
                  </div>
                  <div className="flex flex-col font-mono text-[16px] self-stretch relative leading-[22.4px]">
                    <p className="text-coolAsh text-[12px]">Highest Bid</p>
                    <p>{dis.bid}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="./Rankings">
          <div
            className={`${styles.buttonTransparent} ${styles.buttonHover} flex-1 md:hidden justify-center flex !px-[60px] !gap-[12px] !w-[315px]`}
          >
            <img src={eye} alt="" />
            <span>See All</span>
          </div>
        </a>
      </section>
    </div>
  );
};

export default Discover;
