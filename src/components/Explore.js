import React from "react";
import "./Explore.css";
import product from "../assets/proudectGuide.png";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <>
      <div className="exp_container">
        <div>
          <h6>PRODUCTC GUIDES</h6>
          <img src={product} />
          <div>
            <p>
              is an Indian comedian, writer, singer, actor, songwriter, and
              YouTube personality from Delhi, India. He is known for his comedy
              channel on YouTube named BB Ki Vines.
            </p>
          </div>
          <button>
            <Link to={"/expPro"}>EXPLORE</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Explore;
