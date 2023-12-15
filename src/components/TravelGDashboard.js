import React from "react";
import "./TravelGDashboard.css";
import profile from "../assets/bhuwanBam.png";
import { Link } from "react-router-dom";

const TravelGDashboard = () => {
  return (
    <>
      <div className="travel_dashboard_cotainer">
        <Link to={"/add_travel"}>
          <button>ADD NEW POST</button>
        </Link>
        <h6>Your Profile</h6>
        <img src={profile} />
        <i class="bi bi-pencil profile_icon"></i>
        <div className="info_sec">
          <div className="name_edit">
            <p>Name</p>
            <i class="bi bi-pencil"></i>
          </div>
          <input placeholder="Jack Peterson"></input>
        </div>
        <div className="info_sec">
          <div className="name_edit">
            <p>About</p>
            <i class="bi bi-pencil"></i>
          </div>
          <input placeholder='"Remember that happiness is way of travel-not a destination"'></input>
        </div>
        <div className="info_sec">
          <div className="name_edit">
            <p>Instagram Link</p>
            <i class="bi bi-pencil"></i>
          </div>
          <input placeholder="https://instagerm.com/jackpeterson?asfd=="></input>
        </div>
        <div className="info_sec">
          <div className="name_edit">
            <p>Youtube Link</p>
            <i class="bi bi-pencil"></i>
          </div>
          <input placeholder="https://instagerm.com/jackpeterson?asfd=="></input>
        </div>
        <div>
          <h6>Manage Your Posts</h6>
          <table>
            <tr>
              <th>Sr No</th>
              <th>Post Name</th>
              <th>Views</th>
              <th>Edit</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Goa 5 days</td>
              <td>10,203</td>
              <td>Edit Post</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Manoli 7 days</td>
              <td>8,686</td>
              <td>Edit Post</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ooty 3 days</td>
              <td>3,203</td>
              <td>Edit Post</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default TravelGDashboard;
