import React from "react";
import Hero from "./Home/Hero";
import Trending from "./Home/Trending";
import TopCreators from "./Home/TopCreators";
import Categories from "./Home/Categories";
import Discover from "./Home/Discover";
import LiveAuction from "./Home/LiveAuction";
import Guide from "./Home/Guide";
import Newsletter from "./Home/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <TopCreators />
      <Categories />
      <Discover />
      <LiveAuction />
      <Guide />
      <Newsletter />
    </div>
  );
};

export default Home;
