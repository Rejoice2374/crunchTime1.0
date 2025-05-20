import React, { useState } from "react";
import constants from "../../constants";
import styles from "../../styles";
import { FiChevronDown } from "react-icons/fi";

const Collections = () => {
  const category = constants.Categories;
  const [showAll, setShowAll] = useState(false);

  // Show only 4 cards initially, or all if showAll is true
  const displayedCategories = showAll ? category : category.slice(0, 6);

  return (
    <div>
      <section className={`${styles.section} flex-col gap-[60px]`}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 relative lg:w-[1050px] md:w-[690px] w-[315px] gap-[30px] lg:mx-[-80px] text-white font-work">
          {displayedCategories.map((cat) => (
            <div
              key={cat.cateName}
              className="catCard flex flex-col bg-secondary items-stretch rounded-[20px] transition-all ease-in-out duration-300 hover:scale-95 cursor-pointer overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={cat.cateImg}
                    alt={cat.cateName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[15px]">
                  <img
                    src={cat.cateIcon}
                    alt={`${cat.cateName} icon`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5">
                <h2 className="text-xl md:text-2xl font-semibold line-clamp-1">
                  {cat.cateName}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {category.length > 5 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white hover:bg-opacity-80 transition-all"
            >
              {showAll ? "Show Less" : "View More"}
              <FiChevronDown
                className={`transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Collections;
