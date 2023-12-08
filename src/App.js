import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
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
        </Routes>
      </Router>
    </>
  );
};

export default App;
