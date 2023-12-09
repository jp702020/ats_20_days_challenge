import React from "react";
import "./benefits.css";

const Benefits = () => {
  return (
    <>
      <div className="bene_container">
        <h4>
          1 <span className="code">CODE</span> 3
          <span className="bene"> BENEFITS</span>
        </h4>
        <div className="bene_card">
          <div className="benefit_box">
            <div className="white_box">
              <div className="number">1</div>
              <img />
            </div>
            <div className="blue_box">
              <p>Redirects shoppers to Purchasing Site</p>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, aliquid?
            </p>
          </div>
          <div className="benefit_box">
            <div className="white_box">
              <div className="number">2</div>
              <img />
            </div>
            <div className="blue_box">
              <p>Redirects shoppers to Purchasing Site</p>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, aliquid?
            </p>
          </div>
          <div className="benefit_box">
            <div className="white_box">
              <div className="number">3</div>
              <img />
            </div>
            <div className="blue_box">
              <p>Redirects shoppers to Purchasing Site</p>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, aliquid?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
