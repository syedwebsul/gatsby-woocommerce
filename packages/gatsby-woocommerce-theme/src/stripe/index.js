import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onToken = (token) => {
      this.props.sendPaymentResponse(token)
  
  };
  onClosed = (onclosed) => {
    console.log(onclosed, "onclosed");
  };


  render() {
    console.log("STRIPE_PUBLISHABLE_KEY", process.env.STRIPE_PUBLISHABLE_KEY)
    return (
      <StripeCheckout
        stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
        name="Sergio's Marketplace" // the pop-in header title
        description="Order payment" // the pop-in header subtitle
        image="https://admin.sergiosmarketplace.com/wp-content/uploads/2020/12/cropped-home-sergio-logo.png" // the pop-in header image (default none)
        ComponentClass="div"
        panelLabel="Pay" // prepended to the amount in the bottom pay button
        amount={this.props.amount} // cents
        token={this.onToken}
        currency="USD"
        closed={this.onClosed}
        // onOpen={this.onOpen}
      >
        <button className="place-order">PAY ${this.props.amount / 100}</button>
      </StripeCheckout>
    );
  }
}
