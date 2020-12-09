import React from "react";
import { isEmpty } from "lodash";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';


const AccountDetails = ({ authData }) => {
  // if (isEmpty(authData)) {
  //   return null;
  // }

  // const { user } = authData;

  return (
    // <div className="card-body">
    //   {!isEmpty(user.firstName) ? (
    //     <p>
    //       First Name: <strong>{user.firstName}</strong>
    //     </p>
    //   ) : null}
    //   {!isEmpty(user.lastName) ? (
    //     <p>
    //       Last Name: <strong>{user.lastName}</strong>
    //     </p>
    //   ) : null}
    //   {!isEmpty(user.username) ? (
    //     <p>
    //       Username: <strong>{user.username}</strong>
    //     </p>
    //   ) : null}
    //   {!isEmpty(user.email) ? (
    //     <p>
    //       Email: <strong>{user.email}</strong>
    //     </p>
    //   ) : null}
    // </div>

    <div className="account-page">

      <h2>Account Details</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>



      <div className="account-tab">
          <Tabs defaultTab="account">
            <TabList>
              <Tab tabFor="account">User Account</Tab>
              <Tab tabFor="password">Change Password</Tab>
            </TabList>
            <TabPanel tabId="account">
                <div className="account-form">
                    <form>
                        <div className="form-group">
                            <label>First Name *</label>
                            <input type="text" placeholder="enter your first name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Last Name *</label>
                            <input type="text" placeholder="enter your last name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email  *</label>
                            <input type="email" placeholder="enter your email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Display Name  *</label>
                            <input type="text" placeholder="enter your display name" className="form-control" />
                        </div>
                        <div className="form-group full-w">
                          <button className="save-changes">Save Changes</button>
                        </div>
                    </form>
                </div>
            </TabPanel>

            <TabPanel tabId="password">
            <div className="account-form">
                    <form>
                        <div className="form-group">
                            <label>Old password *</label>
                            <input type="password" placeholder="Old password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>New Password *</label>
                            <input type="password" placeholder="New Password" className="form-control" />
                        </div>
                        <div className="form-group full-w">
                            <label>Confirm Password  *</label>
                            <input type="password" placeholder="Confirm Password" className="form-control" />
                        </div>
                        <div className="form-group full-w">
                          <button className="save-changes">Save Changes</button>
                        </div>
                    </form>
                </div>
            </TabPanel>

          </Tabs>
        </div>

    </div>
  );
};

export default AccountDetails;
