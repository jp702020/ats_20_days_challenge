// import React from "react";
import "./CardScreen.css";
import Coupon from "./Coupon";
import Explore from "./Explore";
import Infuencers from "./Infuencers";
import Navbar from "./Navbar";

const CardScreen = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="most_search">
          <Coupon />
        </div>
        <div className="infuencers">
          <h4>TOP INFUENCERS</h4>
          <div className="infue_card">
            <Infuencers />
            <Infuencers />
            <Infuencers />
            <Infuencers />
          </div>
        </div>
        <div className="explore">
          <h4>EXPLORE GUIDES</h4>
          <div className="exp_card">
            <Explore />
            <Explore />
          </div>
        </div>
      </div>
    </>
  );
};
export default CardScreen;
