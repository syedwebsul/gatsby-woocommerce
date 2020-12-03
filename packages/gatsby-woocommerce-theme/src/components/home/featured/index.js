import React from "react";
import Link from "gatsby-link";
import featurebg from "../../../images/featurebg.png";
import featureicon1 from "../../../images/featureicon1.png";
import featureicon2 from "../../../images/featureicon2.png";
import featureicon3 from "../../../images/featureicon3.png";
import featureicon4 from "../../../images/featureicon4.png";


const HomeFeature = () => {


  return (
    <div className="feature-home">
        <img className="feature-graphic" src={featurebg} alt="" />
        <div className="container">
            <div className="feature-content">

                <div className="feature-box">
                    <img src={featureicon1} alt="" />
                    <h2>Locally Prepared</h2>
                    <p>Nullam faucibus a libero quis vesibulum proin vetibulum</p>
                </div>

                <div className="feature-box">
                    <img src={featureicon2} alt="" />
                    <h2>Trusted Name</h2>
                    <p>Nullam faucibus a libero quis vesibulum proin vetibulum</p>
                </div>

                <div className="feature-box">
                    <img src={featureicon3} alt="" />
                    <h2>Miami Favourites</h2>
                    <p>Nullam faucibus a libero quis vesibulum proin vetibulum</p>
                </div>

                <div className="feature-box">
                    <img src={featureicon4} alt="" />
                    <h2>Weekly Plans</h2>
                    <p>Nullam faucibus a libero quis vesibulum proin vetibulum</p>
                </div>
                
            </div>   
        </div>
    </div>
  );
};

export default HomeFeature;
