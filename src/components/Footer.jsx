import React from "react";
import styles from "../styles";
import Logo from "../assets/Logo.png";
import constants from "../constants";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";

const Footer = () => {
  const Navlink = constants.Navlinks;
  const tym = new Date();
  const year = tym.getFullYear();
  return (
    <div>
      <section
        className={`flex flex-col items-center self-stretch relative px-[195px] lg:gap-[30px] md:gap-[50px] gap-[30px] py-[40px] font-work bg-secondary`}
      >
        <div
          className={`flex item-start lg:flex-row flex-col relative lg:w-fit md:w-[690px] w-[315px] lg:mx[-80px] md:mx-[-123px] mx-[165px] lg:gap-0 gap-[30px] justify-between`}
        >
          {/* Brand Info */}
          <div className="flex flex-col items-start lg:gap-[30px] gap-5 lg:pe-[84px] lg:w-[328px]">
            <div className="brand flex h-[32px] min-w-[244px] flex-row gap-2 items-center text-white">
              <img src={Logo} alt="Logo" className="md:w-[32px] w-[24px]" />
              <h2 className="text-[20px] font-semibold font-mono">
                One Of Wun
              </h2>
            </div>
            {/* Brand Text */}
            <div className="brand-info flex flex-col gap-[20px] lg:w-fit self-stretch items-start text-celeste font-work">
              <p className="leading-[22.4px]">
                NFT marketplace UI created with Anima for Figma.
              </p>
              {/* Community */}
              <div className="brand-community flex flex-col items-start self-stretch gap-[15px] lg:w-fit">
                <p className="leading-[22.4px]">Join our community</p>
                <div className="sm flex items-start gap-2.5 w-fit text-coolAsh text-[32px]">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaDiscord />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-start self-stretch lg:gap-[25px] gap-5 lg:w-[240px] ">
            <h4 className="text-[22px] text-white leading-[35.2px] w-fit font-bold font-mono">
              Explore
            </h4>
            <div className="flex flex-col items-start self-stretch gap-5 lg:w-fit font-work">
              {Navlink.map((n) => (
                <div
                  key={n.id}
                  className={`${styles.buttonHover} text-celeste cursor-pointer leading-[22.4px]`}
                >
                  <Link to={`/${n.path.toLowerCase()}`}>{n.title}</Link>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe newsletter */}
          <div className="flex flex-col items-start self-stretch lg:gap-[25px] gap-5 lg:w-fit font-work text-white">
            <div className="flex self-stretch gap-2.5">
              <h4 className="lg:leading-[35.2px] text-[22px] font-bold font-mono">
                Join Our Weekly Digest
              </h4>
            </div>
            <div className="flex flex-col items-start self-stretch gap-5">
              <p className="leading-[22.4px] lg:w-[330px] font-work text-celeste">
                Get Exclusive Promotions & Updates Straight To Your Inbox.
              </p>
              {/* Subscribe Button for medium scrn & above */}
              <div className="subscribe-form md:flex hidden bg-white items-center rounded-[20px] font-work py-5 ps-[20px] h-[60px] gap-[12px] md:w-[420px] w-[300px]">
                <input
                  type="email"
                  id=""
                  placeholder="Enter your email here"
                  className="text-celeste flex-1 border-0 h-[22px] leading-[22.4px] p-0 min-w-[209px]"
                />
                <a href="#">
                  <button
                    type="submit"
                    className={`${styles.button} ${styles.buttonHover} !px-[50px] !py-0 justify-end my-4 w-fit`}
                  >
                    Subscribe
                  </button>
                </a>
              </div>
              {/* Subscribe Button for mobile scrns */}
              <div className="subscribe-form flex flex-col md:hidden items-center font-work gap-4 w-fit">
                <div className="flex items-center bg-white border-coolAsh rounded-[20px] gap-3 h-[46px] px-5 py-4 w-[315px]">
                  <input
                    type="email"
                    id=""
                    placeholder="Enter your email here"
                    className="text-blackCeleste flex-1 border-0 h-[22px] leading-[22.4px] p-0 mb-[-3px] mt-[-5px] resize-none min-w-[275px]"
                  />
                </div>
                <a href="#">
                  <div
                    className={`${styles.button} ${styles.buttonHover} !px-[50px] !py-0 justify-center self-stretch !h-[46px] !gap-3 w-[315px]`}
                  >
                    <BiEnvelope />
                    Subscribe
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.sectionFrame} flex-col !gap-[20px]`}>
          <div className="divider"></div>
          <p className="self-stretch leading-[13.2px] font-work text-[12px] text-celeste">
            Ⓒ Favochino Tech {year}.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
