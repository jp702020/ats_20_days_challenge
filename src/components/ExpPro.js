import React from "react";
import "./ExpPro.css";
import logo from "../assets/storeCode.png";
import bb from "../assets/bhuwanBam.png";

const ExpPro = () => {
  return (
    <>
      <div>
        <div className="exp_nav">
          <div className="right_nav">
            <img className="nav_img" src={logo} />
            <p className="nav_name">StoreCode</p>
          </div>
          <div className="left_nav">
            <div className="nav_search">
              <i class="bi bi-search"></i>
              <input placeholder="search your StoreCode" />
              <i class="bi bi-mic"></i>
            </div>
            <img src={bb} />
          </div>
        </div>
        <div className="exp_category">
          <div>
            <i class="bi bi-caret-left-square"></i>
            <div className="cat_card">All</div>
            <div className="cat_card">
              Party<i class="bi bi-person-standing-dress red"></i>
            </div>
            <div className="cat_card">
              Festive<i class="bi bi-person-standing-dress blue"></i>
            </div>
            <div className="cat_card">
              Casual<i class="bi bi-person-standing-dress pink"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpPro;
