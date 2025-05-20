import React, { useState, useEffect } from "react";
import data from "./data";
import styles from "../../styles";

const NFTs = () => {
  const nftdata = data.discover;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default for mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 834) {
        // Desktop - 3 columns, 2 rows (6 items per page)
        setItemsPerPage(3);
      } else if (window.innerWidth <= 1024) {
        // Tablet - 2 columns, 2 rows (4 items per page)
        setItemsPerPage(4);
      } else {
        // Mobile - 1 column, 3 rows (3 items per page)
        setItemsPerPage(6);
      }
      setCurrentPage(1); // Reset to first page on resize
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = nftdata.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(nftdata.length / itemsPerPage);

  // Add debug logs
  console.log("Current page:", currentPage);
  console.log("Items per page:", itemsPerPage);
  console.log("Total items:", nftdata.length);
  console.log("Showing items:", indexOfFirstItem, "to", indexOfLastItem);
  console.log("Current items count:", currentItems.length);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section className={`${styles.section} flex-col gap-[60px]`}>
        <div
          className={`item-start relative lg:w-[1050px] md:w-[690px] w-[315px] gap-[30px] lg:mx[-80px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1`}
        >
          {currentItems.map((dis) => (
            <div
              key={`${dis.id}-${dis.discoName}`} // More unique key
              className="flex flex-col bg-secondary rounded-[20px] font-work text-white transition-all ease-in-out duration-300 hover:scale-95"
            >
              <div className="items-start self-stretch">
                <img
                  src={dis.disImage}
                  alt={dis.discoName}
                  className="w-full h-auto object-cover rounded-t-[20px]"
                />
              </div>
              <div className="info-card flex flex-col p-[20px] gap-[10px]">
                <h2 className="text-[22px] flex-1 relative font-semibold leading-[30.8px]">
                  {dis.discoName}
                </h2>
                <div className="flex items-center self-stretch gap-[12px]">
                  <div className="artist-img flex items-start cursor-pointer w-[24px] h-[24px]">
                    <img
                      src={dis.artImg}
                      alt={dis.artName}
                      className="rounded-full"
                    />
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

        {/* Pagination Controls - Only show if needed */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-button hover:bg-button-hov"
              } text-white`}
            >
              Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "bg-button hover:bg-button-hov"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-button hover:bg-button-hov"
              } text-white`}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default NFTs;
