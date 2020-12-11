import React from "react";
import Layout from "../components/layout";
import phone from "../images/phone-icon.svg";
import email from "../images/mail-icon.svg";

const Contact = () => (
  <Layout>
    <div className="contact-page">
      <div className="container"> 
      <div className="contact-page-content">  
        <div className="row">
            <div className="col-md-5">
                <div className="contact-info">
                    <h2>Contact Support</h2>
                    <p>Have an inquiry or feedback for us? Fill out the form to contact our team. </p>
                    <ul>
                        <li><img src={phone} alt="" /> +1-305-552-9623</li>
                        <li><img src={email} alt="" /> support@sergiosmarketplace.com</li>
                    </ul>
                </div>
            </div>

            <div className="col-md-7">
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label>Name *</label>
                            <input type="text" placeholder="enter your name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email *</label>
                            <input type="email" placeholder="enter your email" className="form-control" />
                        </div>
                        <div className="form-group full-w">
                            <label>Message *</label>
                            <textarea placeholder="enter your message" className="form-control"></textarea>
                        </div>
                        <div className="form-group full-w">
                            <button className="send-btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        </div>  
      </div>
    </div>
  </Layout>
);

export default Contact;
