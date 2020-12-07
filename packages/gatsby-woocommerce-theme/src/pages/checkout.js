import React from "react";
import Layout from "../components/layout";
import CheckoutForm from "../components/checkout/checkout-form";
import cartproduct1 from "../images/cartproduct1.png";
import cartproduct2 from "../images/cartproduct2.png";


const Checkout = () => (
  <Layout>
    <div className="checkout-page">
      <div className="container">      
        {/* <CheckoutForm /> */}

        <div className="row">
            <div className="col-md-12">
              <h2>Checkout</h2>
            </div>

          <div className="col-md-8">

            <div className="checkout-form">
            <form>
               <h3>Billing Details</h3>
              
                <div className="form-group">
                  <label>First Name *</label>
                  <input className="form-control" type="text" placeholder="enter your first name" />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input className="form-control" type="text" placeholder="enter your last name" />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input className="form-control" type="email" placeholder="enter your email" />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input className="form-control" type="text" placeholder="enter your phone number" />
                </div>
                <div className="form-group full-w">
                  <label>Company Name</label>
                  <input className="form-control" type="text" placeholder="enter company name" />
                </div>


                <h3>Shipping Informations</h3>

                <div className="form-group full-w">
                  <label>Country / Region *</label>
                  <select className="form-control">
                    <option>select country</option>
                  </select>
                </div>

                <div className="form-group full-w">
                  <label>Street Address *</label>
                  <input className="form-control" type="text" placeholder="house number and street name" />
                </div>

                <div className="form-group full-w">
                  <label>Apartement, suite, unit, etc. (optional)</label>
                  <input className="form-control" type="text" placeholder="house number and street name" />
                </div>


                <div className="form-group half-w">
                  <label>Town / City *</label>
                  <input className="form-control" type="text" placeholder="enter city" />
                </div>

                <div className="form-group half-w">
                  <label>State *</label>
                  <select className="form-control">
                    <option>select state</option>
                  </select>
                </div>

                <div className="form-group half-w">
                  <label>ZIP *</label>
                  <input className="form-control" type="text" placeholder="enter your zip code" />
                </div>

                <h3>Additional Informations</h3>

                <div className="form-group full-w">
                  <label>Order Note (optional)</label>
                  <teaxarea className="form-control" type="text" placeholder="enter your messages"></teaxarea>
                </div>

                
              </form>

            </div>

          </div>

          <div className="col-md-4">

            <div className="checkout-sidebar">

              <h3>Your Order</h3>

              <div className="cart-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>qty</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="cart-product">
                              <div className="cart-product-img">
                                <img src={cartproduct1} alt="" />
                              </div>
                              <div className="cart-product-detail">
                                <h4>Guava Pastry - 15 Pack</h4>                                      
                              </div>
                            </div>
                          </td>
                          <td>2</td>
                          <td>$40.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="cart-product">
                              <div className="cart-product-img">
                                <img src={cartproduct2} alt="" />
                              </div>
                              <div className="cart-product-detail">
                                <h4>Empanda</h4>                                      
                              </div>
                            </div>
                          </td>
                          <td>1</td>
                          <td>$20.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="checkout-subtotal">
                        <span>Subtotal</span>
                        <span>$80.00</span>
                    </div>

                    <div className="checkout-shipping">
                       <h4>Shipping</h4>
                       <div className="shipping-list">
                        <input type="radio" name="free" />
                         <div className="shipping-details">
                            <h6>Free Shipping</h6>
                            <p>Giving information on its origins, as well as a random Lipsum generator</p>
                          </div>
                          <div className="shipping-price">
                             <h5>$0.00</h5>
                          </div>
                       </div>
                       <div className="shipping-list">
                        <input type="radio" name="free" />
                         <div className="shipping-details">
                            <h6>Other Shipping Method</h6>
                          </div>
                       </div>
                    </div>


                    <div className="checkout-total">
                        <span>Total</span>
                        <span>$80.00</span>
                    </div>

              </div>





              <div className="payment-method">
                <h3>Payment Method</h3>
                <div className="payment-list">
                    <ul>
                      <li><input type="radio" name="payment" /> Direct Bank Transfer</li>
                      <li><input type="radio" name="payment" /> PAY WITH PAYPAL</li>
                      <li><input type="radio" name="payment" /> CREDIT CARD (STRIPE)</li>
                    </ul>
                </div>
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
              
                <button className="place-order">Place Order</button>
              
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </Layout>
);

export default Checkout;
