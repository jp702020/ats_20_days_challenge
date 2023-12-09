import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div>
          <div className="div_1st">
            <div>Product</div>
            <div>Info</div>
            <div>Compony</div>
          </div>
          <div>
            <div>Register</div>
            <div>FAQ</div>
            <div>About us</div>
          </div>
          <div>
            <div>Loging</div>
            <div>Blog</div>
            <div>Careers</div>
          </div>
          <div>
            <div>Dashbord</div>
            <div>suport</div>
            <div>COntact us</div>
          </div>
        </div>
        <div className="soci_div">
          <div>
            <p>Social Community</p>
          </div>
          <div className="icon_div">
            <i class="bi bi-facebook h4 m-1"></i>
            <i class="bi bi-instagram h4 m-1"></i>
            <i class="bi bi-linkedin h4 m-1"></i>
            <i class="bi bi-twitter h4 m-1"></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
