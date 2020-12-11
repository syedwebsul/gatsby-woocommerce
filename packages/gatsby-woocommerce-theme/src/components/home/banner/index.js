import React from "react";
import Link from "gatsby-link";
import leftimg from "../../../images/home-img-left.png";
import rightimg from "../../../images/home-img-right.png";
import rightimgmbl from "../../../images/home-img-right-mbl.png";

const HomeBanner = () => {


  return (
    <div className="home-banner">
      
        <div className="banner-bg">
            <img className="left-graphic" src={leftimg} alt="" />

            <div className="banner-content">
                <h2>Get everything Sergio’s all in one marketplace</h2>
                <a href="">Get Started</a>
            </div>
            <img className="right-graphic" src={rightimg} alt="" />
            <img className="right-graphic-mbl" src={rightimgmbl} alt="" />
        </div>   
     
    </div>
  );
};

export default HomeBanner;
