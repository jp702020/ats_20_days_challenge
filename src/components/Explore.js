import React from "react";
import "./Explore.css";
import product from "../assets/proudectGuide.png";

const Explore = () => {
  return (
    <>
      <div className="exp_container">
        <div>
          <h6>PRODUCTC GUIDES</h6>
          <img src={product} />
          <div>
            <h5>Bhuvan Bam</h5>
            <h6>Delhi, India</h6>
            <p>
              is an Indian comedian, writer, singer, actor, songwriter, and
              YouTube personality from Delhi, India. He is known for his comedy
              channel on YouTube named BB Ki Vines.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
