import React from "react";
import { useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import "./AddTravel.css";

const AddTravel = () => {
  return (
    <>
      <div className="add_travel_container">
        <div>
          <h6>Select Category</h6>
          <button className="btn btn-primary m-2">Domestic</button>
          <button className="btn btn-light">International</button>
        </div>
        <div className="info_sec">
          <div className="name_edit">
            <p>Post Nmae</p>
          </div>
          <input placeholder="Men Casal Wears"></input>
        </div>
        <div className="info_sec">
          <div className="name_edit">
            <p>Full Trip Price</p>
          </div>
          <input placeholder="Enter Full Trip Price"></input>
        </div>
        <div className="info_sec">
          <div className="name_edit">
            <p>Video Link</p>
          </div>
          <input placeholder="https://youtube.com/jackpeterson?asfd=="></input>
        </div>
        <div className="day_1">
          <h6>Day-1</h6>
          <input placeholder="Related Name" />
          <input placeholder="Description" />
          <input placeholder="Time" />
          <input placeholder="Add Image" />
          <input placeholder="Google Map" />
          <input placeholder="Price" />
          <button className="btn btn-primary">Add New Day</button>
          <button className="btn btn-light">Upload Post</button>
        </div>
        <div className="day_1">
          <h6>Day-2</h6>
          <input placeholder="Related Name" />
          <input placeholder="Description" />
          <input placeholder="Time" />
          <input placeholder="Add Image" />
          <input placeholder="Google Map" />
          <input placeholder="Price" />
          <button className="btn btn-primary">Add New Day</button>
          <button className="btn btn-light">Upload Post</button>
        </div>
      </div>
    </>
  );
};

export default AddTravel;
