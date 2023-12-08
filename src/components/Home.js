import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
// import logo from "../assets/storeCode.png";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="center">
        <Navbar />

        <div className="center-1"></div>
        <div className="content">
          <h4>Shop with</h4>
          <h2>STORECODE</h2>
          <input className="search_bar" placeholder="ENTER PRODUCT CODE" />
          <br />
          <button className="btn btn-primary btn-lg">Search</button>
        </div>
        <div className="get_code_box">
          <div>
            <h5>Get a code for your link</h5>
            <div className="get_code">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">
                    GET CODE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
