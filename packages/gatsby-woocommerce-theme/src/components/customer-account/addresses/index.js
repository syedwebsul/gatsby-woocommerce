import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { isEmpty } from "lodash";
import GET_CUSTOMER_ADDRESS from "../../../queries/get-customer-address";
import validateAndSanitizeCheckoutForm from "../../../validator/billing";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import Billing from "../billing";
import { userInstance } from "../../../config/axios.js";
const Addresses = ({ authData }) => {
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
    errors: null,
  };
  const [input, setInput] = useState(initialState);
  const [update, setUpdate] = useState(false);
  const {
    user: { id },
  } = authData;

  // // Get Cart Data.
  // const { data } = useQuery(GET_CUSTOMER_ADDRESS, {
  //   variables: {
  //     id: id,
  //   },
  // });

  // if (isEmpty(data)) {
  //   return null;
  // }

  // const {
  //   customer: { billing, shipping },
  // } = data;
  const handleOnChange = (event) => {
    const newState = { ...input, [event.target.name]: event.target.value };
    setInput(newState);
  };

  const handleFormSubmit = async () => {
    const result = validateAndSanitizeCheckoutForm(input);

    if (!result.isValid) {
      setInput({ ...input, errors: result.errors });
      return;
    }
    const payload = {
      id: id,
      billing_first_name: input.firstName,
      billing_email: input.email,
      billing_phone: input.phone,
      billing_last_name: input.lastName,
      billing_company: input.company,
      billing_address_1: input.address1,
      billing_address_2: input.address2,
      billing_city: input.city,
      billing_state: input.state,
      billing_postcode: input.postcode,
      billing_country: input.country,
    };
    const res = await userInstance.post("/wp-json/add/billing/save", payload);
    console.log(res, "resss");
  };
  return (
    //

    <div className="account-address">
      <div className="account-address-header">
        <div className="address-title">
          <h2>Billing Information</h2>
          <p>
            The following billing information will be used on the checkout page
            by default.
          </p>
        </div>
        {/* <a href="#" className="add-address-btn">Add New Addresses</a> */}
      </div>

      <div className="account-address-content">
        <div className="account-tab">
          {/* <Tabs defaultTab="billing">
            <TabList>
              <Tab tabFor="billing">Billing Addreses</Tab>
              <Tab tabFor="shipping">Shipping Addresses</Tab>
            </TabList>
            <TabPanel tabId="billing"> */}
          <div className="billing-address">
            {!update ? (
              <div className="address-account">
                <span>Personal BIlling</span>
                <h2>Michele Angela</h2>
                <h4>312-567-8866</h4>
                <p>4473 Happy Hollow Road, Garland, North Carolina 28441</p>

                <button className="addtess-btn" onClick={() => setUpdate(true)}>
                  Edit
                </button>
              </div>
            ) : (
              <Billing
                input={input}
                handleOnChange={handleOnChange}
                handleFormSubmit={handleFormSubmit}
              />
            )}
          </div>
          {/* </TabPanel>

            <TabPanel tabId="shipping">

                <div className="billing-address">

                    <div className="address-account">
                      <span>Personal BIlling</span>
                      <h2>Michele Angela</h2>
                      <h4>312-567-8866</h4>
                      <p>4473  Happy Hollow Road, Garland, North Carolina 28441</p>
                      <button className="delete-address-btn">Delete</button>
                      <button className="addtess-btn">Edit</button>
                    </div>

                    <div className="address-account">
                      <span>Business Billing</span>
                      <h2>Patrick L Brown</h2>
                      <h4>212-745-2983</h4>
                      <p>1362  Shinn Street, New York, New York 10022</p>
                      <button className="delete-address-btn">Delete</button>
                      <button className="addtess-btn">Edit</button>
                    </div>

                    <div className="address-account">
                      <span>Another Billing</span>
                      <h2>Vincent B McCowan</h2>
                      <h4>406-698-9143</h4>
                      <p>1479 Nutter Street, Alabama Montana 59103</p>
                      <button className="delete-address-btn">Delete</button>
                      <button className="addtess-btn">Edit</button>
                    </div>

                </div>

            </TabPanel>

          </Tabs> */}
        </div>
      </div>
    </div>
  );
};

export default Addresses;
