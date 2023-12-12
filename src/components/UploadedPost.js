import React from "react";
import "./UploadedPost.css";
import video from "../assets/video.webm";
import photo from "../assets/travelInfl.jpg";

const UploadedPost = () => {
  return (
    <>
      <div className="post_container">
        <div className="post_upper">
          <video className="video" controls>
            <source src={video}></source>
          </video>
        </div>
        <div className="post_lower">
          <div className="post_card item1">
            <img src={photo} />
            <p>Product name1</p>
            <p>$50</p>
          </div>
          <div className="code_card">
            <h6>Shope with storeCode</h6>
            <p>Get upto 50% off Discount</p>
          </div>
          <div className="post_card item2">
            <img src={photo} />
            <p>Product name1</p>
            <p>$50</p>
          </div>
          <div className="post_card item3">
            <img src={photo} />
            <p>Product name1</p>
            <p>$50</p>
          </div>
          <div className="post_card item4">
            <img src={photo} />
            <p>Product name1</p>
            <p>$50</p>
          </div>
          <div className="post_card item5">
            <img src={photo} />
            <p>Product name1</p>
            <p>$50</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadedPost;
