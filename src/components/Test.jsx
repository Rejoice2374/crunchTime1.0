import React, { useState, useEffect, useMemo } from "react";
import data from "../components/Marketplace/data";
import styles from "../styles";

const NFTs = () => {
  const nftdata = data.discover;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [columns, setColumns] = useState(1);

  // Add debug logs
  console.log("Current page:", currentPage);
  console.log("Items per page:", itemsPerPage);
  console.log("Total items:", nftdata.length);

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = useMemo(() => {
    return nftdata.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage, itemsPerPage, nftdata]);

  console.log("Showing items:", indexOfFirstItem, "to", indexOfLastItem);
  console.log("Current items count:", currentItems.length);

  const totalPages = Math.ceil(nftdata.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      let newItemsPerPage, newColumns;

      if (window.innerWidth > 1024) {
        newItemsPerPage = 6;
        newColumns = 3;
      } else if (window.innerWidth > 834) {
        newItemsPerPage = 4;
        newColumns = 2;
      } else {
        newItemsPerPage = 3;
        newColumns = 1;
      }

      console.log("Resize - setting itemsPerPage:", newItemsPerPage);
      setItemsPerPage(newItemsPerPage);
      setColumns(newColumns);
      setCurrentPage(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section className={`${styles.section} flex-col gap-[60px]`}>
        <div
          className={`item-start relative lg:w-[1050px] md:w-[690px] w-[315px] gap-[30px] lg:mx[-80px] grid ${
            columns === 3 ? "lg:grid-cols-3" : ""
          } 
                   ${columns === 2 ? "md:grid-cols-2" : ""} 
                   ${columns === 1 ? "grid-cols-1" : ""}`}
        >
          {currentItems.map((dis) => (
            <div
              key={`${dis.bid}-${dis.discoName}`}
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

        <div className="debug-info fixed bottom-0 left-0 bg-black text-white p-2 z-50">
          Page: {currentPage} | Items: {currentItems.length}/{itemsPerPage} |
          Columns: {columns} | Total: {nftdata.length}
        </div>
      </section>
    </div>
  );
};

export default NFTs;
