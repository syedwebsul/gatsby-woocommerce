import React, { useState } from "react";
import "./style.scss";
import Dashboard from "./dashboard";
import Orders from "./orders";
import { isUserLoggedIn } from "../../utils/functions";
import Logout from "./logout";
import Addresses from "./addresses";
import AccountDetails from "./account-details";
import user from "../../images/img-profile.png"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import dashboard from "../../images/dashboard-icon.png";
import order from "../../images/order-icon.png";
import track from "../../images/track-icon.png";
import payment from "../../images/payment-icon.png";
import address from "../../images/address-icon.png";
import account from "../../images/account-icon.png";
import logout from "../../images/logout-icon.png";
import TrackOrders from "./trackorder";
import PaymentMethod from "./paymentmethod";


// const auth = isUserLoggedIn();

// const tabItems = [
//   {
//     id: 1,
//     title: "Dashboard",
//     icon: "tabitem__icon tab-dashboard",
//     content: <Dashboard authData={auth} />,
//   },
//   {
//     id: 2,
//     title: "Orders",
//     icon: "tabitem__icon tab-users",
//     content: <Orders authData={auth} />,
//   },
//   {
//     id: 3,
//     title: "Addresses",
//     icon: "tabitem__icon tab-addresses",
//     content: <Addresses authData={auth} />,
//   },
//   {
//     id: 4,
//     title: "Account Details",
//     icon: "tabitem__icon tab-account-details",
//     content: <AccountDetails authData={auth} />,
//   },
//   {
//     id: 5,
//     title: "Logout",
//     icon: "tabitem__icon tab-logout",
// 	content: "",
//   },
// ];

// const TabItemComponent = ({
//   icon = "",
//   title = "",
//   onItemClicked = () => console.error("You passed no action to the component"),
//   isActive = false,
// }) => {
//   return (
//   	<div className={isActive ? "tabitem" : "tabitem tabitem--inactive"}>
// 	    <button
// 		    onClick={onItemClicked}
// 		    style={{ width: '100%' }}
// 	    >
// 		    <i className={icon} />
// 		    <p className="tabitem__title">{title}</p>
// 	    </button>
//     </div>
//   );
// };

const CustomerAccount = ({ handleLogout }) => {
 // const [active, setActive] = useState(1);

  return (
    // <div className="row">
    //   <div className="account-details-menu col-3">
    //     {tabItems.map(({ id, icon, title }) =>
    //       5 === id ? (
    //         <Logout key={title} handleLogout={handleLogout} />
    //       ) : (
    //         <TabItemComponent
    //           key={title}
    //           icon={icon}
    //           title={title}
    //           onItemClicked={() => setActive(id)}
    //           isActive={active === id}
    //         />
    //       )
    //     )}
    //   </div>
    //   <div className="account-details-content card col-9 px-0">
    //     {tabItems.map(({ id, content }) => {
    //       return active === id ? <div key={id}>{content}</div> : "";
    //     })}
    //   </div>
    // </div>

    <div className="my-account-wrapper">

        <div className="my-account-header">
            <div className="container">
                <div className="row">
                  <div className="col-md-9">
                      <div className="user-info">
                        <h3>My Account</h3>
                        <h5>Welcome Back Michel!</h5>
                        <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="user-info">
                        <img src={user} alt="" />
                      </div>
                  </div>
                </div>
            </div>
        </div>



        <div className="my-account-content">
            <div className="container">
              <div className="row">
                  <div className="col-md-12">

                  <Tabs defaultTab="vertical-tab-one" vertical>
                    <TabList>
                      <Tab tabFor="vertical-tab-one"><img src={dashboard} alt="" /> Dashboard</Tab>
                      <Tab tabFor="vertical-tab-two"><img src={order} alt="" /> Orders</Tab>
                      <Tab tabFor="vertical-tab-three"><img src={track} alt="" /> Track My Order</Tab>
                      <Tab tabFor="vertical-tab-four"><img src={payment} alt="" /> Payment Method</Tab>
                      <Tab tabFor="vertical-tab-five"><img src={address} alt="" />Addresses</Tab>
                      <Tab tabFor="vertical-tab-six"><img src={account} alt="" /> Account Details</Tab>
                      <Tab tabFor="vertical-tab-seven"><img src={logout} alt="" /> Logout</Tab>
                    </TabList>
                    <TabPanel tabId="vertical-tab-one">
                      <Dashboard />
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-two">
                      <Orders />
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-three">
                      <TrackOrders />
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-four">
                      <PaymentMethod />
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-five">
                      <Addresses />
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-six">
                      <AccountDetails />
                    </TabPanel>
                  </Tabs>

                  </div>
              </div>
            </div>
        </div>

    </div>
  );
};

export default CustomerAccount;
