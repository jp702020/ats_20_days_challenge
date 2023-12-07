import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/login" Component={Login}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/contact" Component={Contact}></Route>
          <Route exact path="/signup" Component={Signup}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
