import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Input from "../../../Component/Input/Input";
import Button from "../../../Component/Button/Button";

const ForgotPassword = () => {
  const [Inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(Inputs);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Inputs);
  };

  return (
    <>
      <div className="LoginRegister">
        <div className="LoginRegister-Container">
          <div className="form-section">
            <div className="progress-container">
              <h1 className="Title">Forgot Password</h1>
              <h5>Make sure to never forget it next time!</h5>
            </div>
            <form onSubmit={handleSubmit}>
              <>
                <div className="page">
                  <div className="title-container">
                    <div className="title">
                      <h1>Change Password</h1>
                    </div>
                    <div className="title-detail">
                      <p>Fill in the details below</p>
                    </div>
                  </div>
                  <Input
                    formSize="full"
                    inputProps={{
                      type: "userID",
                      name: "UserID",
                      id: "UserID",
                      label: "UserID",
                      placeholder: "User ID",
                      className: "input",
                      onChange: handleChange
                    }}
                  />
                  <Input
                    formSize="full"
                    inputProps={{
                      type: "password",
                      name: "New Password",
                      id: "New Password",
                      label: "New Password",
                      placeholder: "New Password",
                      className: "input",
                      onChange: handleChange
                    }}
                  />
                  <Input
                    formSize="full"
                    inputProps={{
                      type: "password",
                      name: "confirm Password",
                      id: "confirm Password",
                      label: "Confirm Password",
                      placeholder: "confirm Password",
                      className: "input",
                      onChange: handleChange
                    }}
                  />
                  <div className="others">
                    <p>
                      New user? <Link to="/register">Create new Account</Link>
                    </p>
                    <p>
                      Wrong Page? <Link to="/Login">Back to Login</Link>
                    </p>
                  </div>
                </div>
                <div className="button-container end">
                  <Button
                    type="formsubmit"
                    className="fill primary"
                    value={"Change"}
                    link={"/login"}
                  />
                </div>
              </>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
