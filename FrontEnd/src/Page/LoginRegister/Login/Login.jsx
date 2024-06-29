import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Input from "../../../Component/Input/Input";
import Button from "../../../Component/Button/Button";

import { setSession } from "../../../Function/Session";
const Login = (props) => {
  const [Inputs, setInputs] = useState({
    Username: "",
    Password: ""
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(Inputs);
  };

  // Login system
  const [CredentialError, setCredentialError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const { Username, Password } = Inputs;
    const data = {
      Username: Username,
      Password: Password
    };

    fetch("http://localhost/CSC264/RoomAPI/UserLogin.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "Login Success") {
          if (data.RoleID == 1) {
            navigate(`/Admin/${data.UserID}`);
            const sessionData = {
              UserID: data.UserID,
              RoleID: data.RoleID,
              Username: data.Username
            };
            setSession(sessionData);
          } else {
            navigate(`/Product/${data.UserID}`);
            const sessionData = {
              UserID: data.UserID,
              RoleID: data.RoleID,
              Username: data.Username
            };
            setSession(sessionData);
          }
        } else {
          setCredentialError(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="LoginRegister">
        <div className="LoginRegister-Container">
          <div className="form-section">
            <div className="progress-container">
              <h1 className="Title">Sign In</h1>
              <h5>Welcome to Room Furniture Online store!</h5>
            </div>
            <form method="POST" onSubmit={handleSubmit}>
              <>
                <div className="page">
                  <div className="title-container">
                    <div className="title">
                      <h1>Sign in</h1>
                    </div>
                    <div className="title-detail">
                      <p>Sign in to your account.</p>
                    </div>
                  </div>
                  <div className="error-container">
                    {CredentialError == true ? (
                      <p className="Error">
                        Wrong Username/Password. Please Retry
                      </p>
                    ) : (
                      <p></p>
                    )}
                  </div>
                  <Input
                    formSize="full"
                    inputProps={{
                      type: "text",
                      name: "Username",
                      id: "Username",
                      label: "Username",
                      placeholder: "Username",
                      className: "input",
                      value: Inputs.Username,
                      onChange: handleChange
                    }}
                  />
                  <Input
                    formSize="full"
                    inputProps={{
                      type: "password",
                      name: "Password",
                      id: "Password",
                      label: "Password",
                      placeholder: "password",
                      className: "input",
                      value: Inputs.Password,
                      onChange: handleChange
                    }}
                  />
                  <div className="others">
                    <p>
                      New user? <Link to="/register">Create new Account</Link>
                    </p>
                  </div>
                </div>
                <div className="button-container end">
                  <Button
                    type="formsubmit"
                    className="fill primary"
                    value={"Sign In"}
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

export default Login;
