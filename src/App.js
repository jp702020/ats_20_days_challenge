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
        </Routes>
      </Router>
    </>
  );
};

export default App;
