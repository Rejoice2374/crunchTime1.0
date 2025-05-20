import React from "react";
// import styles from "../../styles";
import mushroom from "../../assets/trending2.png";
import Shroom from "../../assets/topCreator7.png";
import eyes from "../../assets/eye@2x.svg";
import { useState, useEffect } from "react";

const LiveAuction = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [auctionEnded, setAuctionEnded] = useState(false);

  useEffect(() => {
    const valDate = new Date(2025, 11, 25, 0, 0, 0, 0); // Dec 12, 2025
    const valDateTym = valDate.getTime();
    let timerId;

    const updateTimer = () => {
      try {
        const currentTym = new Date().getTime();
        const remainingTime = valDateTym - currentTym;

        if (remainingTime <= 0) {
          setTimeLeft(0);
          setAuctionEnded(true);
          clearInterval(timerId);
        } else {
          setTimeLeft(remainingTime);
        }
      } catch (error) {
        console.error("Timer error:", error);
        clearInterval(timerId);
      }
    };

    updateTimer(); // Call immediately
    timerId = setInterval(updateTimer, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  // Calculate time units and format to two digits
  const formatTime = (time) => time.toString().padStart(2, "0");
  const hours = formatTime(
    Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = formatTime(
    Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = formatTime(Math.floor((timeLeft % (1000 * 60)) / 1000));

  return (
    <div>
      <section
        className={`flex items-center self-stretch justify-center relative font-work w-full bg-cover bg-center overflow-hidden`}
        style={{ backgroundImage: `url(${mushroom})` }}
      >
        <div className="flex items-end self-stretch justify-center relative inset-0 bg-linear-0 from-button to-transprent h-auto md:pt-[360px] md:pb-[60px] px-[195px] pt-[120px] pb-[40px] ">
          <div
            className={`flex md:flex-row flex-col relative lg:w-[1050px] md:w-[690px] w-[315px] gap-[30px] lg:mx[-80px] mx-[165px] md:items-end items-center md:justify-center justify-end h-auto md:px[-113px] px-[-165px]`}
          >
            <div className="liveLeft relative flex flex-col flex-1 items-start self-stretch gap-[30px] text-white">
              <div className="flex items-center bg-secondary py-[10px] px-[20px] rounded-[20px] gap-[12px] w-fit">
                <div className="artist-img flex items-start cursor-pointer w-[24px] h-[24px] ">
                  <img src={Shroom} alt="" />
                </div>
                <div className="artist-name leading-[22.4px] relative whitespace-nowrap">
                  <p>Shroomie</p>
                </div>
              </div>
              <div className="artName relative self-stretch lg:text-[51px] text-[38px] font-semibold font-work lg:leading-[56.1px] leading-[45.6px]">
                Magic Mashrooms
              </div>
              <div className="artButton hidden md:flex items-center justify-center gap-3 bg-white text-black font-poppins font-semibold py-[22px] px-[50px] h-[60px] w-fit rounded-2xl cursor-pointer ease-in-out transition-all duration-500">
                <img src={eyes} alt="" />
                <p className="font-work font-semibold leading-[22.4px]">
                  See NFT
                </p>
              </div>
            </div>

            <div className="timer relative flex flex-col bg-masala text-white p-[30px] rounded-[20px] justify-end items-start self-stretch md:self-auto backdrop-blur-[10px] backdrop-brightness-100 gap-[10px] md:w-295px h-auto">
              <p className="text-[12px] leading-[13.2px]">
                {auctionEnded ? "Auction status" : "Auction ends in"}
              </p>

              {auctionEnded ? (
                <div className="flex items-center justify-center w-full">
                  <h4 className="text-[28px] font-bold leading-[39.2px]">
                    Auction Ended
                  </h4>
                </div>
              ) : (
                <div className="flex items-start self-stretch gap-[10px]">
                  <div className="flex flex-col flex-1 font-mono gap-[5px]">
                    <h4 className="self-stretch text-[38px] font-bold leading-[45.6px]">
                      <span>{hours}</span>
                    </h4>
                    <p className="self-stretch flex-1 leading-[13.2px] text-[12px]">
                      Hours
                    </p>
                  </div>
                  <div className="self-stretch flex-1 font-mono font-bold leading-[39.2px] text-[28px]">
                    :
                  </div>
                  <div className="flex flex-col flex-1 font-mono gap-[5px]">
                    <h4 className="self-stretch text-[38px] font-bold leading-[45.6px]">
                      <span>{minutes}</span>
                    </h4>
                    <p className="self-stretch flex-1 leading-[13.2px] text-[12px]">
                      Minutes
                    </p>
                  </div>
                  <div className="self-stretch flex-1 font-mono font-bold leading-[39.2px] text-[28px]">
                    :
                  </div>
                  <div className="flex flex-col flex-1 font-mono gap-[5px]">
                    <h4 className="self-stretch text-[38px] font-bold leading-[45.6px]">
                      <span>{seconds}</span>
                    </h4>
                    <p className="self-stretch flex-1 leading-[13.2px] text-[12px]">
                      Seconds
                    </p>
                  </div>
                </div>
              )}
            </div>

            <a href="/marketplace">
              <div className="artButton flex md:hidden items-center justify-center self-stretch gap-3 bg-white text-black font-poppins font-semibold py-[22px] px-[50px] h-[60px] rounded-2xl cursor-pointer ease-in-out transition-all duration-500">
                <img src={eyes} alt="" />
                <p className="font-work font-semibold leading-[22.4px] w-fit">
                  See NFT
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveAuction;
