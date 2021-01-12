import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import { UPDATE_USER } from "../../../mutations/register";
import { useMutation } from "@apollo/client";
import { v4 } from "uuid";
const AccountDetails = ({ authData }) => {
  const { user } = authData;
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  const [
    updateUser,
    { loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_USER, {
    variables: {
      input: {
        clientMutationId: v4(), // Generate a unique id.,
        id: user.id,
        email: user.email,
        firstName: "vinsy",
        lastName: "krishna",
      },
    },
    onCompleted: (data) => {
      // If error.
      if (!isEmpty(updateError)) {
        setErrorMessage(updateError.graphQLErrors[0].message);
      }
    },
    onError: (error) => {
      if (error) {
        if (!isEmpty(error)) {
          setErrorMessage(error.graphQLErrors[0].message);
        }
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
  };
  useEffect(() => {
    setUserData({ firstName: user.firstName, lastName: user.lastName });
  }, []);
  if (isEmpty(authData)) {
    return null;
  }
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
      {console.log(
        "errorMessage",
        errorMessage,
        "successMessage",
        successMessage
      )}
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </p>

      {console.log(user, "userData")}

      <div className="account-tab row">
        {/* <Tabs defaultTab="account">
            <TabList>
              <Tab tabFor="account">User Account</Tab>
              <Tab tabFor="password">Change Password</Tab>
            </TabList>
            <TabPanel tabId="account"> */}
        <div className="account-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name *</label>
              <input
                type="text"
                placeholder="enter your first name"
                value={userData.firstName}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input
                type="text"
                placeholder="enter your last name"
                value={userData.lastName}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                placeholder="enter your email"
                value={user.email}
                readOnly={true}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Username *</label>
              <input
                type="text"
                placeholder="enter your display name"
                value={user.username}
                readOnly={true}
                className="form-control"
              />
            </div>
            <div className="form-group full-w">
              <button className="save-changes">Save Changes</button>
            </div>
          </form>
        </div>
        {/* </TabPanel>

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

          </Tabs> */}
      </div>
    </div>
  );
};

export default AccountDetails;
