import React from "react";
import Link from "gatsby-link";
import oval from "../../../images/plan-oval.png";
import food from "../../../images/plan-food.png";

const HomePlan = () => {


  return (
    <div className="plan-home">
        <div className="convenient">
              <div className="plan-box">
                <div className="plan-heading">Convenient and Delicious delivered to your door</div>
                <div className="plan-text ">
                  Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam malesuada eros nec luctus laoreet.
                  Fusce sodales consequat velit eget dictum. Integer ornare magna vitae ex eleifend congue. Morbi sit
                  amet nisi iaculis, fringilla orci.
                </div>
                <a href="">View Plans</a>
              </div>
              <div className="overlap-plan">
                <img className="oval-plan" alt="" src={oval}/>
                <img className="plan-food" alt="" src={food}/>
              </div>
            </div> 
    </div>
  );
};

export default HomePlan;
