import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ExpPro from "./components/ExpPro";
import Profile from "./components/ProfileProduct";
import Travel from "./components/TravelGuide";
import UploadedPost from "./components/UploadedPost.js";
import OpenPost from "./components/OpenPost.js";
import ManagePost from "./components/ManagePost.js";
import TravelGDashboard from "./components/TravelGDashboard.js";
import AddTravel from "./components/AddTravel.js";
import ProductGuide from "./components/ProductGuide.js";
import productGProfile from "./components/productGProfile.js";
import TravelGProfile from "./components/TravelGProfile.js";
import TravelGPost from "./components/TravelGPost.js";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/login" Component={Login}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/contact" Component={Contact}></Route>
          <Route exact path="/signup" Component={Signup}></Route>
          <Route exact path="/expPro" Component={ExpPro}></Route>
          <Route exact path="/profile" Component={Profile}></Route>
          <Route exact path="/travel" Component={Travel}></Route>
          <Route exact path="/uploaded_post" Component={UploadedPost}></Route>
          <Route exact path="/open_post" Component={OpenPost}></Route>
          <Route exact path="/manage_post" Component={ManagePost}></Route>
          <Route exact path="/product_guide" Component={ProductGuide}></Route>
          <Route
            exact
            path="/travel_guide_post"
            Component={TravelGPost}
          ></Route>
          <Route
            exact
            path="/product_g_profile"
            Component={productGProfile}
          ></Route>
          <Route
            exact
            path="/travel_g_profile"
            Component={TravelGProfile}
          ></Route>
          <Route
            exact
            path="/travel_g_dashboard"
            Component={TravelGDashboard}
          ></Route>
          <Route exact path="/add_travel" Component={AddTravel}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
