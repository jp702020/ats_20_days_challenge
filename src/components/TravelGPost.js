import React from "react";
import "./TravelGPost.css";
import reel from "../assets/reels1.gif";
import airoplane from "../assets/product1.png";

const TravelGPost = () => {
  return (
    <>
      <div className="travel_g_post_container">
        <div className="prouct_guide_nav">
          <i class="bi bi-arrow-left-circle-fill"></i>
          <h5>EXPLORE</h5>
          <i class="bi bi-person-fill"></i>
        </div>
        <div className="t_p_p_video">
          <video controls>
            <source src={reel}></source>
          </video>
          <div>
            <p>RS.2,49,999/person</p>
          </div>
        </div>
        <div className="days">
          <div className="day active">
            <p>Day 1</p>
          </div>
          <div className="day">
            <p>Day 2</p>
          </div>
          <div className="day">
            <p>Day 3</p>
          </div>
          <div className="day">
            <p>Day 4</p>
          </div>
        </div>
        <div className="journey_details">
          <p>Detailed Itinerary 4-day trip to Himachal Pradesh</p>
          <div className="journey_card">
            <i class="bi bi-stop-circle"></i>
            <div className="time_stamp">
              <p>7:00AM</p>
            </div>
            <div className="booking">
              <i class="bi bi-airplane-engines-fill"></i>
              <p>Book Journey to shimla</p>
            </div>
            <div className="main_journey_card">
              <img src={airoplane} />
              <p>
                Exclusive Flight Offer -- Unleash Your Wanderlust with
                MakeMyTrip Get ₹1500/- off on flight bookings,{" "}
              </p>
              <div className="price_code">
                <p className="card_price">Rs.14,999/peron</p>
                <div className="code">
                  <p>#GFDS5879</p>
                </div>
              </div>
            </div>
          </div>
          <div className="journey_card">
            <i class="bi bi-stop-circle"></i>
            <div className="time_stamp">
              <p>7:00AM</p>
            </div>
            <div className="booking">
              <i class="bi bi-airplane-engines-fill"></i>
              <p>Book Journey to shimla</p>
            </div>
            <div className="main_journey_card">
              <img src={airoplane} />
              <p>
                Exclusive Flight Offer -- Unleash Your Wanderlust with
                MakeMyTrip Get ₹1500/- off on flight bookings,{" "}
              </p>
              <div className="price_code">
                <p className="card_price">Rs.14,999/peron</p>
                <div className="code">
                  <p>#GFDS5879</p>
                </div>
              </div>
            </div>
          </div>
          <div className="journey_card">
            <i class="bi bi-stop-circle"></i>
            <div className="time_stamp">
              <p>7:00AM</p>
            </div>
            <div className="booking">
              <i class="bi bi-airplane-engines-fill"></i>
              <p>Book Journey to shimla</p>
            </div>
            <div className="main_journey_card">
              <img src={airoplane} />
              <p>
                Exclusive Flight Offer -- Unleash Your Wanderlust with
                MakeMyTrip Get ₹1500/- off on flight bookings,{" "}
              </p>
              <div className="price_code">
                <p className="card_price">Rs.14,999/peron</p>
                <div className="code">
                  <p>#GFDS5879</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelGPost;
