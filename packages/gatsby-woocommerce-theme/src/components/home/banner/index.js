import React from "react";
import Link from "gatsby-link";
import leftimg from "../../../images/home-img-left.png";
import rightimg from "../../../images/home-img-right.png";
import rightimgmbl from "../../../images/home-img-right-mbl.png";

const HomeBanner = () => {


  return (
    <div className="home-banner">
      
        <div className="banner-bg">

            <div className="left-graphic">
              <img src={leftimg} alt="" />
            </div>
           

            <div className="banner-content">
                <h2>Get everything Sergio’s all in one marketplace</h2>
                <a href="">Get Started</a>
            </div>

            <div className="right-graphic">
                <img src={rightimg} alt="" />
            </div>
            
            <img className="right-graphic-mbl" src={rightimgmbl} alt="" />
        </div>   
     
    </div>
  );
};

export default HomeBanner;
