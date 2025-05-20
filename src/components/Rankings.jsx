import React, { useState } from "react";
import Data from "../components/Marketplace/data";
import styles from "../styles";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Rankings = () => {
  const topCreators = Data.topCreators;
  const [sortDirection, setSortDirection] = useState("desc"); // 'asc' or 'desc'
  const [creators, setCreators] = useState([]);

  // Sort functions
  const sortAscending = () => {
    const sorted = [...topCreators].sort((a, b) => a.sales - b.sales);
    setCreators(sorted);
    setSortDirection("asc");
  };

  const sortDescending = () => {
    const sorted = [...topCreators].sort((a, b) => b.sales - a.sales);
    setCreators(sorted);
    setSortDirection("desc");
  };

  // Initialize with default sort (descending by sales)
  React.useEffect(() => {
    sortDescending();
  }, []);

  return (
    <div>
      {/* Heading and subtitle */}
      <div className={`${styles.section} flex-col gap-[60px]`}>
        <div className={`${styles.sectionFrame} justify-between items-end`}>
          <div className="flex flex-col items-start self-stretch gap-[10px] text-white font-work">
            <h2 className="lg:text-[51px] text-[28px] flex-1 relative font-semibold lg:leading-[56.1px] leading-[39.2px] ">
              Top Creators
            </h2>
            <p className="lg:text-[22px] text-[16px] self-stretch relative flex-1 lg:leading-[35.2px] sm:leading-[22.4px]">
              Check out top ranking NFT artists on the NFT Marketplace.
            </p>
          </div>
        </div>
      </div>

      {/* Rankings Table */}
      <div className="flex flex-col items-center self-stretch justify-center relative gap-7 md:pb-[80px] pb-[40px] text-white font-work">
        {/* Table column titles */}
        <div>
          <div className="flex items-start justify-between relative lg:w-[1050px] md:w-[690px] w-[315px] gap-[30px] lg:mx-[-80px] border text-coolAsh font-mono leading-[22.4px] border-secondary py-3 lg:px-4 px-2.5 rounded-[20px]">
            <div className="flex items-center w-[430px] gap-[20px]">
              <div className="flex items-center justify-center h-[30px] w-[30px] rounded-[20px] bg-dark">
                #
              </div>
              <div>Artist</div>
            </div>
            <div className="flex items-start justify-end w-fit">
              <div className="md:flex hidden lg:w-[160px] w-[100px]">
                Changes
              </div>
              <div className="lg:flex hidden lg:w-[160px] w-[100px]">
                NFTs Sold
              </div>
              <div className="flex items-center md:text-[16px] text-[12px] lg:w-[160px] md:w-[100px] w-[80px] gap-[10px]">
                <p>Volume</p>
                <div className="flex flex-col items-center">
                  <FaCaretUp
                    className={`text-[12px] cursor-pointer transition-colors ${
                      sortDirection === "asc" ? "text-white" : "text-gray-500"
                    }`}
                    onClick={sortAscending}
                  />
                  <FaCaretDown
                    className={`text-[12px] cursor-pointer transition-colors ${
                      sortDirection === "desc" ? "text-white" : "text-gray-500"
                    }`}
                    onClick={sortDescending}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Table data */}
        <div>
          <div className="flex flex-col gap-[30px]">
            {creators.map((creator, index) => (
              <a
                href="#"
                key={creator.id}
                className="flex items-center justify-between relative lg:w-[1050px] md:w-[690px] w-[315px] lg:mx-[-80px] bg-secondary border border-transparent hover:border-secondary hover:bg-transparent py-3 lg:px-4 px-2.5 rounded-[20px]"
              >
                <div className="flex items-center w-[430px] gap-2.5">
                  <div className="flex items-center justify-center lg:h-[30px] h-[24px] lg:w-[30px] w-[24px] rounded-[20px] lg:bg-dark text-coolAsh">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex flex-1 items-center justify-center gap-4">
                      <img
                        src={creator.creatorImg}
                        alt={creator.creatorName}
                        className="lg:w-[60px] w-[24px]"
                      />
                      <p className="md:leading-[30.8px] leading-[22.4px] md:text-[22px] md:font-semibold font-work">
                        {creator.creatorName}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-end w-fit font-mono">
                  <div className="md:flex hidden text-green-400 lg:w-[160px] w-[100px] leading-[22.4px]">
                    1.21%
                  </div>
                  <div className="lg:flex hidden leading-[22.4px] lg:w-[160px] w-[100px]">
                    {creator.sold}
                  </div>
                  <div className="leading-[22.4px] md:text-[16px] text-[12px] lg:w-[160px] md:w-[100px] w-[80px]">
                    {creator.sales} ETH
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
