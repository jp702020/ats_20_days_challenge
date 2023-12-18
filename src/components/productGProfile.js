import React from "react";
import "./productGProfile.css";
import bb from "../assets/bhuwanBam.png";
import reel1 from "../assets/reels1.gif";

const productGProfile = () => {
  return (
    <>
      <div className="product_g_profile_container">
        <div className="prouct_guide_nav">
          <i class="bi bi-arrow-left-circle-fill"></i>
          <h5>EXPLORE</h5>
          <i class="bi bi-person-fill"></i>
        </div>
        <div className="profile_card">
          <div className="p_g_p_left">
            <img src={bb} />
            <p>
              Reccomends:<span>55.3k</span>
            </p>
            <div>
              <div className="p_g_p_left_icon">
                <i class="bi bi-hand-thumbs-up-fill"></i>
              </div>
              <div className="p_g_p_left_icon">
                <i class="bi bi-hand-thumbs-down-fill"></i>
              </div>
            </div>
          </div>
          <div className="p_g_p_right">
            <h6>Bhuvan Bam</h6>
            <p className="p_g_p_right_connect">@bhuwan.bam22</p>
            <p>I'm your go-to for the latest product and fashion.</p>
            <div className="p_g_p_right_social">
              <p className="p_g_p_right_follow">Follow Me:</p>
              <div className="p_g_p_right_youtube">
                <i class="bi bi-youtube"></i>
              </div>
              <div className="p_g_p_right_instagram">
                <i class="bi bi-instagram"></i>
              </div>
            </div>
            <div className="swipe_container">
              <p>SWIPE FOR MORE -</p>
              <i class="bi bi-caret-right-fill"></i>
            </div>
          </div>
        </div>
        <div>
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
        </div>
        <div className="p_g_p_cards_sec">
          <div className="p_g_p_card">
            <div className="p_g_p_card_upper">
              <img src={reel1} />
              <div className="p_g_p_card_upper_reel_i">
                <i class="bi bi-instagram" />
              </div>
            </div>
            <div className="p_g_p_card_lower">
              <p>#GETTHISPRODUCT</p>
              <p>@₹299</p>
            </div>
          </div>
          <div className="p_g_p_card">
            <div className="p_g_p_card_upper">
              <img src={reel1} />
              <div className="p_g_p_card_upper_reel_i">
                <i class="bi bi-instagram" />
              </div>
            </div>
            <div className="p_g_p_card_lower">
              <p>#GETTHISPRODUCT</p>
              <p>@₹299</p>
            </div>
          </div>
          <div className="p_g_p_card">
            <div className="p_g_p_card_upper">
              <img src={reel1} />
              <div className="p_g_p_card_upper_reel_i">
                <i class="bi bi-instagram" />
              </div>
            </div>
            <div className="p_g_p_card_lower">
              <p>#GETTHISPRODUCT</p>
              <p>@₹299</p>
            </div>
          </div>
          <div className="p_g_p_card">
            <div className="p_g_p_card_upper">
              <img src={reel1} />
              <div className="p_g_p_card_upper_reel_i">
                <i class="bi bi-instagram" />
              </div>
            </div>
            <div className="p_g_p_card_lower">
              <p>#GETTHISPRODUCT</p>
              <p>@₹299</p>
            </div>
          </div>
          <div className="p_g_p_card">
            <div className="p_g_p_card_upper">
              <img src={reel1} />
              <div className="p_g_p_card_upper_reel_i">
                <i class="bi bi-instagram" />
              </div>
            </div>
            <div className="p_g_p_card_lower">
              <p>#GETTHISPRODUCT</p>
              <p>@₹299</p>
            </div>
          </div>
          <div className="p_g_p_card">
            <div className="p_g_p_card_upper">
              <img src={reel1} />
              <div className="p_g_p_card_upper_reel_i">
                <i class="bi bi-instagram" />
              </div>
            </div>
            <div className="p_g_p_card_lower">
              <p>#GETTHISPRODUCT</p>
              <p>@₹299</p>
            </div>
          </div>
          <div className="p_g_p_card">
            <div className="p_g_p_card_upper">
              <img src={reel1} />
              <div className="p_g_p_card_upper_reel_i">
                <i class="bi bi-instagram" />
              </div>
            </div>
            <div className="p_g_p_card_lower">
              <p>#GETTHISPRODUCT</p>
              <p>@₹299</p>
            </div>
          </div>
          <div className="p_g_p_card">
            <div className="p_g_p_card_upper">
              <img src={reel1} />
              <div className="p_g_p_card_upper_reel_i">
                <i class="bi bi-instagram" />
              </div>
            </div>
            <div className="p_g_p_card_lower">
              <p>#GETTHISPRODUCT</p>
              <p>@₹299</p>
            </div>
          </div>
          <div className="p_g_p_card">
            <div className="p_g_p_card_upper">
              <img src={reel1} />
              <div className="p_g_p_card_upper_reel_i">
                <i class="bi bi-instagram" />
              </div>
            </div>
            <div className="p_g_p_card_lower">
              <p>#GETTHISPRODUCT</p>
              <p>@₹299</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default productGProfile;
