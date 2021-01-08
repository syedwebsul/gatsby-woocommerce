import React, { useState, useContext, useEffect } from "react";
import Billing from "../billing";
import YourOrder from "../your-order";
import PaymentModes from "../payment-mode";
import { AppContext } from "../../context/AppContext";
import validateAndSanitizeCheckoutForm from "../../../validator/checkout";
import { useMutation, useQuery } from "@apollo/client";
import { getFormattedCart, createCheckoutData } from "../../../utils/functions";
import OrderSuccess from "../order-success";
import GET_CART from "../../../queries/get-cart";
import CHECKOUT_MUTATION from "../../../mutations/checkout";
import CheckoutError from "../checkout-error";

const CheckoutForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
    createAccount: false,
    username: "",
    password: "",
    customerNote: "",
    paymentMethod: "",
    errors: null,
  };

  // Use this for testing purposes, so you dont have to fill the checkout form over an over again.
  // const initialState = {
  //   firstName: "Imran",
  //   lastName: "Sayed",
  //   address1: "109 Hills Road Valley",
  //   address2: "Station Road",
  //   city: "Pune",
  //   state: "Maharastra",
  //   country: "IN",
  //   postcode: "400298",
  //   phone: "9959338989",
  //   email: "codeytek.academy@gmail.com",
  //   company: "Tech",
  //   createAccount: false,
  // username: '',
  // password: '',
  // customerNote: "My Order notes",
  //   paymentMethod: "cod",
  //   errors: null,
  // };

  const [cart, setCart] = useContext(AppContext);
  const [input, setInput] = useState(initialState);
  const [orderData, setOrderData] = useState(null);
  const [requestError, setRequestError] = useState(null);

  // Get Cart Data.
  const { data, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // console.warn( 'completed GET_CART' );

      // Update cart in the localStorage.
      const updatedCart = getFormattedCart(data);
      localStorage.setItem("woo-next-cart", JSON.stringify(updatedCart));

      // Update cart data in React Context.
      setCart(updatedCart);
    },
  });

  // Checkout or CreateOrder Mutation.
  const [
    checkout,
    { data: checkoutResponse, loading: checkoutLoading },
  ] = useMutation(CHECKOUT_MUTATION, {
    variables: {
      input: orderData,
    },
    onCompleted: () => {
      // console.warn( 'completed CHECKOUT_MUTATION' );
      refetch();
    },
    onError: (error) => {
      if (error) {
        setRequestError(error.graphQLErrors[0].message);
      }
    },
  });

  /*
   * Handle form submit.
   *
   * @param {Object} event Event Object.
   *
   * @return {void}
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const result = validateAndSanitizeCheckoutForm(input);
    if (!result.isValid) {
      setInput({ ...input, errors: result.errors });
      return;
    }
    const checkOutData = createCheckoutData(input);
    setOrderData(checkOutData);
    setRequestError(null);
  };

  /*
   * Handle onchange input.
   *
   * @param {Object} event Event Object.
   *
   * @return {void}
   */
  const handleOnChange = (event) => {
    if ("createAccount" === event.target.name) {
      const newState = { ...input, [event.target.name]: !input.createAccount };
      setInput(newState);
    } else {
      const newState = { ...input, [event.target.name]: event.target.value };
      setInput(newState);
    }
  };

  useEffect(() => {
    if (null !== orderData) {
      // Call the checkout mutation when the value for orderData changes/updates.
      /* eslint-disable */
      checkout();
    }
  }, [orderData]);

  return (
    <>
      {cart ? (
        <form onSubmit={handleFormSubmit} className="woo-next-checkout-form">
          <div className="row">
            <div className="col-md-12">
              <h2>Checkout</h2>
            </div>

            <div className="col-md-8">
              <div className="checkout-form">
                <Billing input={input} handleOnChange={handleOnChange} />
              </div>
            </div>

            <div className="col-md-4">
              <div className="checkout-sidebar">
                <h3>Your Order</h3>

                <YourOrder cart={cart} />

                {/*Payment*/}
                <PaymentModes input={input} handleOnChange={handleOnChange} />

                <div className="payment-btn-info">
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>

                  <button className="place-order" type="submit">
                    Place Order
                  </button>
                </div>

                {/* Checkout Loading*/}
                {checkoutLoading && <p>Processing Order...</p>}
                {requestError && <CheckoutError requestError={requestError} />}
              </div>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}

      {/*Show message if Order Success*/}
      <OrderSuccess response={checkoutResponse} />
    </>
  );
};

export default CheckoutForm;
