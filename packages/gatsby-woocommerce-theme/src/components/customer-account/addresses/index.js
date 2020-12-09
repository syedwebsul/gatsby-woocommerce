import React from "react";
import { useQuery } from "@apollo/client";
import { isEmpty } from "lodash";
import GET_CUSTOMER_ADDRESS from "../../../queries/get-customer-address";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

const Addresses = ({ authData }) => {
  // const {
  //   user: { id },
  // } = authData;

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

  return (
    // 
    
    <div className="account-address">

        <div className="account-address-header">
            <div className="address-title">
                <h2>Addreses</h2>
                <p>The following billing addresses will be used on the checkout page by default.</p>
            </div>
            <a href="#" className="add-address-btn">Add New Addresses</a>
        </div>


        <div className="account-address-content">

        <div className="account-tab">
          <Tabs defaultTab="billing">
            <TabList>
              <Tab tabFor="billing">Billing Addreses</Tab>
              <Tab tabFor="shipping">Shipping Addresses</Tab>
            </TabList>
            <TabPanel tabId="billing">
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

          </Tabs>
        </div>

        </div>

    </div>
  );
};

export default Addresses;
