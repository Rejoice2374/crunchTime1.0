import { useState } from "react";
import TabButton from "./Marketplace/Tabs";
import NFTs from "./Marketplace/NFTs";
import styles from "../styles";
import Collections from "./Marketplace/Collections";
import data from "../components/Marketplace/data";
import constants from "../constants";
import { FaSearch } from "react-icons/fa";

const Marketplace = () => {
  const nftData = data.discover;
  const collectionData = constants.Categories;

  const [tab, setTab] = useState("NFTs");
  return (
    <>
      <div className={`${styles.section} `}>
        <div className={`${styles.sectionFrame} flex-col`}>
          <div className="headtxt items-start flex flex-col gap-2.5 w-fit">
            <h2 className="lg:text-[51px] md:text-[38px] text-[28px] flex-1 text-white relative font-semibold lg:leading-[56.1px] md:leading-[45.6px] leading-[39.2px] font-work">
              Browse Marketplace
            </h2>
            <p className="text-white lg:text-[22px] text-[16px] self-stretch relative flex-1 lg:leading-[35.2px] sm:leading-[22.4px]">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
          </div>
          <div className="flex flex-col items-center border border-secondary rounded-[20px] justify-center py-12px lg:w-[1052px] md:w-[682px] w-[317px] h-[62px]">
            <div className="flex justify-between px-5">
              <div className="flex items-center lg:w-[960px] md:w-[590px] w-[230px] gap-5">
                <input
                  type="text"
                  className="p-0 border-0 flex-1 leading-[22.4px] font-work text-celeste"
                  placeholder="Search your favourite NFTs"
                />
              </div>
              <FaSearch className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center self-stretch relative font-work">
        <div className="flex flex-1 items-start relative lg:w-[1050px] md:w-[690px] w-[315px] lg:mx[-80px]">
          <div
            className={`flex items-center ${
              tab === "NFTs" ? "border-b-2" : "border-0"
            } border-coolAsh flex-1 gap-4 h-[60px] px-[30px] justify-center`}
          >
            <TabButton isActive={tab === "NFTs"} action={() => setTab("NFTs")}>
              <div className="flex items-center gap-2.5 text-white">
                <h2
                  className={`lg:text-[22px] font-work font-semibold lg:leading-[30.8px] leading-[22.4px] text-center ${
                    tab === "NFTs" ? "text-white" : "text-coolAsh"
                  }`}
                >
                  Nfts
                </h2>
                <div
                  className={`md:flex hidden items-center rounded-[20px] py-[5px] px-[10px] w-fit ${
                    tab === "NFTs" ? "bg-coolAsh" : "bg-secondary"
                  }`}
                >
                  <p className="font-mono leading-[22.4px] w-fit">
                    {nftData.length}
                  </p>
                </div>
              </div>
            </TabButton>
          </div>
          <div
            className={`flex items-center  ${
              tab === "collections" ? "border-b-2" : "border-0"
            } border-coolAsh flex-1 gap-4 h-[60px] px-[30px] justify-center`}
          >
            <TabButton
              isActive={tab === "collections"}
              action={() => setTab("collections")}
            >
              <div className="flex items-center gap-2.5 text-white">
                <h2
                  className={`lg:text-[22px] font-work font-semibold lg:leading-[30.8px] leading-[22.4px] text-center ${
                    tab === "collections" ? "text-white" : "text-coolAsh"
                  }`}
                >
                  Collections
                </h2>
                <div
                  className={`md:flex hidden items-center rounded-[20px] py-[5px] px-[10px] w-fit ${
                    tab === "collections" ? "bg-coolAsh" : "bg-secondary"
                  }`}
                >
                  <p className="font-mono leading-[22.4px] w-fit">
                    {collectionData.length}
                  </p>
                </div>
              </div>
            </TabButton>
          </div>
        </div>
        <hr />
        {tab === "NFTs" && <NFTs />}
        {tab === "collections" && <Collections />}
      </div>
    </>
  );
};

export default Marketplace;
