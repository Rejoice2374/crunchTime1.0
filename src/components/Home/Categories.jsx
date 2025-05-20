import React from "react";
import constants from "../../constants";
import styles from "../../styles";

const Categories = () => {
  const category = constants.Categories;
  return (
    <div>
      <section className={`${styles.section} flex-col gap-[60px]`}>
        <div className={`${styles.sectionFrame} justify-between items-end `}>
          <div className="flex flex-col items-start self-stretch gap-[10px] text-white font-work">
            <h2 className="lg:text-[38px] text-[28px] flex-1 relative font-semibold lg:leading-[45.6px] leading-[39.2px] ">
              Browse Categories
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 relative  lg:w-[1050px] md:w-[690px] w-[315px] gap-[30px] lg:mx[-80px] mx-[-123px] text-white font-work ">
          {category.map((cat) => (
            <div
              key={cat.cateName}
              className="flex flex-1 flex-col relative bg-secondary items-center lg:w-[240px] w-[148px] rounded-[20px] transition-all ease-in-out duration-300 hover:scale-95 cursor-pointer"
            >
              <div className="icon-image flex self-stretch relative rounded-t-[20px] lg:w-[240px] w-[150px] lg:h-[240px] h-[142px] ">
                <div className="absolute rounded-t-[20px] lg:w-[240px] w-[148px] lg:h-[240px] h-[142px] top-0 left-0">
                  <img src={cat.cateImg} alt="" className="w-fit" />
                </div>
                <div className="absolute flex items-center justify-center rounded-t-[20px] backdrop-blur-[15px] backdrop-brightness-100 gap-[10px] lg:w-[240px] w-[148px] lg:h-[240px] h-[150px] top-0 left-0">
                  <img src={cat.cateIcon} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch p-[20px] gap-[25px] px-[20px] pt-[20px] pb-[25px] relative">
                <h2 className="lg:text-[22px] text-[16px] flex-1 relative font-semibold lg:leading-[30.8px] leading-[22.4px]">
                  {cat.cateName}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
