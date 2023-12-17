import React from "react";
import "./ProductGuide.css";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import bb from "../assets/bb.png";

const ProductGuide = () => {
  return (
    <>
      <div className="product_guide_container">
        <div className="prouct_guide_nav">
          <i class="bi bi-arrow-left-circle-fill"></i>
          <h5>
            STORE
            <span> CODE</span>
          </h5>
          <i class="bi bi-person-fill"></i>
        </div>
        <div className="search_div">
          <input placeholder="Search...." />
          <i class="bi bi-funnel"></i>
        </div>
        <div className="category">
          <div className="cartegory">
            <p>All</p>
          </div>
          <div className="cartegory">
            <p>Festive</p>
          </div>
          <div className="cartegory">
            <p>Casual</p>
          </div>
          <div className="cartegory">
            <p>Partywear</p>
          </div>
          <div className="cartegory">
            <p>Stylesh</p>
          </div>
          <div className="cartegory">
            <p>Night</p>
          </div>
        </div>
        <div className="product_guide_cards">
          <div className="card">
            <div className="product_guide_right">
              <img src={bb}></img>
              <i class="bi bi-play-circle-fill"></i>
            </div>
            <div className="product_guide_left">
              <h6>MYNTRA</h6>
              <p>END OF SEASON SALE</p>
              <div className="watch">
                <i class="bi bi-collection-play"></i>
                <p>Watch the reel</p>
              </div>
              <p>Product in this reel</p>
              <div className="product_img_div">
                <img src={product1}></img>
                <img src={product2}></img>
                <img src={product3}></img>
                <img src={product4}></img>
                <img src={product5}></img>
              </div>
              <p>5 Product at ₹1399 onwards</p>
              <div className="view_storecode">
                <p>View Storecodes</p>
                <i class="bi bi-arrow-right-circle-fill"></i>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="product_guide_right">
              <img src={bb}></img>
              <i class="bi bi-play-circle-fill"></i>
            </div>
            <div className="product_guide_left">
              <h6>MYNTRA</h6>
              <p>END OF SEASON SALE</p>
              <div className="watch">
                <i class="bi bi-collection-play"></i>
                <p>Watch the reel</p>
              </div>
              <p>Product in this reel</p>
              <div className="product_img_div">
                <img src={product1}></img>
                <img src={product2}></img>
                <img src={product3}></img>
                <img src={product4}></img>
                <img src={product5}></img>
              </div>
              <p>5 Product at ₹1399 onwards</p>
              <div className="view_storecode">
                <p>View Storecodes</p>
                <i class="bi bi-arrow-right-circle-fill"></i>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="product_guide_right">
              <img src={bb}></img>
              <i class="bi bi-play-circle-fill"></i>
            </div>
            <div className="product_guide_left">
              <h6>MYNTRA</h6>
              <p>END OF SEASON SALE</p>
              <div className="watch">
                <i class="bi bi-collection-play"></i>
                <p>Watch the reel</p>
              </div>
              <p>Product in this reel</p>
              <div className="product_img_div">
                <img src={product1}></img>
                <img src={product2}></img>
                <img src={product3}></img>
                <img src={product4}></img>
                <img src={product5}></img>
              </div>
              <p>5 Product at ₹1399 onwards</p>
              <div className="view_storecode">
                <p>View Storecodes</p>
                <i class="bi bi-arrow-right-circle-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGuide;
