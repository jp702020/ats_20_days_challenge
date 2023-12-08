import React from "react";
import "./Infuencers.css";
import bb from "../assets/bhuwanBam.png";

const Infuencers = () => {
  return (
    <>
      <div className="inf_container">
        <div>
          <img src={bb} />
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
export default Infuencers;
