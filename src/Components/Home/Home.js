import React from "react";
import About from "../About/About";
import Services from "../Services/Services";
import "../Home/Home.css";
const Home = () => {
  return (
    <>
      <div className=" p-2 slide-container">
        <div className="banner-one__bubble-1"></div>
        <div className="banner-one__bubble-2"></div>
        <div className="banner-one__bubble-3 mr-5"></div>
        <img
          src="/assets/images/slider-1-scratch.png"
          alt=""
          className="banner-one__scratch"
        />
        <img
          src="/assets/images/slider-1-person-1.png"
          className="banner-one__person"
          alt=""
        />
        <div className="row no-gutters">
          <div className="col-xl-12 p-2">
            <h1 className=" ">Explore the Wide Range of Options</h1>
            <h3 className="p-2 banner-one__title ">We Can Teach You</h3>
            <p className="p-2 ">are you ready to learn?</p>
            <a href="#" className="">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <About></About>
      <Services></Services>
    </>
  );
};

export default Home;
