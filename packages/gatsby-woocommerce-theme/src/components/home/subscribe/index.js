import React from "react";
import Link from "gatsby-link";
import leftimg from "../../../images/home-img-left.png";
import rightimg from "../../../images/home-img-right.png";

const Subscribe = () => {


  return (
    <div className="subscribe">
      
        <div className="subscribe-bg">
            <div className="container">
                <div className="subscribe-content">
                    <h2>Subscribe  to learn more</h2>
                    <p>Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam malesuada eros nec luctus laoreet.</p>
                   
                </div>
                <div className="subscribe-form">
                    <input type="email" className="form-control"  placeholder="Your email ..." />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>   
     
    </div>
  );
};

export default Subscribe;
