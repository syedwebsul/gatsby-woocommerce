import React from "react";
import { isEmpty } from "lodash";
import order1 from "../../../images/order-latest.png";
import payment from "../../../images/PayPal.png";

const Dashboard = ({ authData }) => {
  // if (isEmpty(authData)) {
  //   return null;
  // }

  // const { user } = authData;
  return (
    // <div className="card-body">
    //   <div className="">
    //     {!isEmpty(user.firstName) || !isEmpty(user.lastName) ? (
    //       <p>
    //         Hello{" "}
    //         <strong>
    //           {user.firstName} {user.lastName}!
    //         </strong>
    //       </p>
    //     ) : (
    //       <p>
    //         Hello <strong>{user.username}!</strong>
    //       </p>
    //     )}
    //     <section>
    //       From your account dashboard you can view your recent orders, manage
    //       your shipping and billing addresses
    //     </section>
    //   </div>
    // </div>

    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="dashboard-content">
        <div className="row">
          <div className="col-md-6">
            <div className="latest-order">
              <h3>Latest Order</h3>

              <div className="latet-order-list">
                <div className="latest-order-detail">
                  <img src={order1} alt="" />
                  <div className="latest-order-info">
                    <h4>Guava Pastry - 15 Pack</h4>
                    <span>1X Empanda </span>
                    <a href="#">..more</a>
                  </div>
                </div>

                <div className="latest-order-price">
                  <h5>$40.00</h5>
                </div>
              </div>

              <div className="latet-order-list">
                <div className="latest-order-detail">
                  <img src={order1} alt="" />
                  <div className="latest-order-info">
                    <h4>Guava Pastry - 15 Pack</h4>
                    <span>1X Empanda </span>
                    <a href="#">..more</a>
                  </div>
                </div>

                <div className="latest-order-price">
                  <h5>$40.00</h5>
                </div>
              </div>

              <div className="latet-order-list">
                <div className="latest-order-detail">
                  <img src={order1} alt="" />
                  <div className="latest-order-info">
                    <h4>Guava Pastry - 15 Pack</h4>
                    <span>1X Empanda </span>
                    <a href="#">..more</a>
                  </div>
                </div>

                <div className="latest-order-price">
                  <h5>$40.00</h5>
                </div>
              </div>

              <div className="latet-order-list">
                <div className="latest-order-detail">
                  <img src={order1} alt="" />
                  <div className="latest-order-info">
                    <h4>Guava Pastry - 15 Pack</h4>
                    <span>1X Empanda </span>
                    <a href="#">..more</a>
                  </div>
                </div>

                <div className="latest-order-price">
                  <h5>$40.00</h5>
                </div>
              </div>

              <div className="latet-order-list">
                <div className="latest-order-detail">
                  <img src={order1} alt="" />
                  <div className="latest-order-info">
                    <h4>Guava Pastry - 15 Pack</h4>
                    <span>1X Empanda </span>
                    <a href="#">..more</a>
                  </div>
                </div>

                <div className="latest-order-price">
                  <h5>$40.00</h5>
                </div>
              </div>

              <a href="" className="view-all-order">
                View All Order
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="address-account">
              <span>Detault Billing Adddress</span>
              <h2>Michele Angela</h2>
              <h4>312-567-8866</h4>
              <p>4473 Happy Hollow Road, Garland, North Carolina 28441</p>
              <button className="addtess-btn">Change</button>
            </div>

            <div className="address-account">
              <span>Detault Shipping Adddress</span>
              <h2>Michele Angela</h2>
              <h4>312-567-8866</h4>
              <p>4473 Happy Hollow Road, Garland, North Carolina 28441</p>
              <button className="addtess-btn">Change</button>
            </div>

            <div className="payment-method">
              <span>Default Payment Method</span>
              <img src={payment} alt="" />
              <h2>Michele Angela</h2>
              <p>mi*****@gmail.com</p>
              <button className="payment-btn">Change</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
