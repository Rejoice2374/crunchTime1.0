import React from "react";
import styles from "../../styles";
import News from "../../assets/newsletter.png";
import News2 from "../../assets/newsletter2.png";
import envelope from "../../assets/envelope.svg";
import { BiEnvelope } from "react-icons/bi";

const Newsletter = () => {
  return (
    <div>
      <section className={`${styles.section}`}>
        <div
          className={`${styles.sectionFrame} md:card md:flex-row flex-col rounded-[20px] lg:p-[60px] md:py-10 md:px-[30px] lg:gap-[80px]`}
        >
          <div className="guideimg lg:hidden md:flex hidden lg:min-w-[425px] md:min-w-[300px] min-w-[315px] object-cover">
            <img src={News} alt="" className="w-full" />
          </div>
          <div className="guideimg lg:flex md:hidden flex lg:min-w-[425px] md:min-w-[300px] min-w-[315px] object-cover">
            <img src={News2} alt="" className="w-full" />
          </div>
          <div className="flex flex-col lg:justify-center h-auto items-start self-stretch gap-[40px] lg:w-[425px] font-work text-white">
            <div className="flex flex-col items-start self-stretch gap-2.5 relative">
              <h4 className="lg:leading-[45.6px] leading-[39.2px] lg:text-[38px] text-[28px] font-semibold">
                Join Our Weekly Digest
              </h4>
              <p className="lg:text-[22px] lg:leading-[35.2px] leading-[22.4px]">
                Get Exclusive Promotions & Updates Straight To Your Inbox.
              </p>
            </div>
            {/* large scrns and above */}
            <div className="subscribe-form lg:flex hidden bg-white items-center self-stretch rounded-[20px] font-work py-4 ps-[20px] h-[60px] gap-[12px]">
              <input
                type="email"
                id=""
                placeholder="Enter Your email here"
                className="items-center text-secondary flex-1 border-0 h-[22px] leading-[22.4px] p-0 min-w-[182px]"
              />
              <a href="#">
                <button
                  type="submit"
                  className={`${styles.button} ${styles.buttonHover} !px-[50px] !py-0 justify-end my-4 w-fit`}
                >
                  <img src={envelope} alt="" />
                  Subscribe
                </button>
              </a>
            </div>
            {/* Medium scrns */}
            <div className="subscribe-form flex flex-col lg:hidden items-center self-stretch font-work gap-4">
              <div className="flex items-center bg-white border-coolAsh rounded-[20px] gap-3 h-[46px] px-5 py-4 w-[315px]">
                <input
                  type="email"
                  id=""
                  placeholder="Enter Your Email Address"
                  className="text-blackCeleste flex-1 border-0 h-[22px] leading-[22.4px] p-0 mb-[-3px] mt-[-5px] resize-none min-w-[275px]"
                />
              </div>
              <a href="#">
                <div
                  className={`${styles.button} ${styles.buttonHover} !px-[50px] !py-0 justify-center self-stretch !h-[46px] !gap-3 w-[315px] font-work font-semibold`}
                >
                  <BiEnvelope className="text-[20px] font-normal" />
                  Subscribe
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
