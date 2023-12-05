import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nanbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Nanbar />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/contact" Component={Contact}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
