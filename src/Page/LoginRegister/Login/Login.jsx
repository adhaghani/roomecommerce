import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Input from "../../../Component/Input/Input";
import Button from "../../../Component/Button/Button";
import Notification from "../../../Component/Notification/Notification";

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

  const [Users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

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
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Login Success") {
          if (data.RoleID == 1) {
            navigate(`/Admin/${data.UserID}`);
          } else {
            navigate(`/Product/${data.UserID}`);
          }
        } else {
          window.dispatchEvent(
            new CustomEvent("showNotification", {
              detail: {
                message: "Wrong Credential.",
                type: "Error"
              }
            })
          );
        }
      });
  };

  function getUsers() {
    axios
      .get("http://localhost/CSC264/RoomAPI/getUser.php")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      });
  }

  return (
    <>
      <div className="LoginRegister">
        <Notification />
        <div className="LoginRegister-Container">
          <div className="form-section">
            <div className="progress-container">
              <h1 className="Title">Sign In</h1>
              <h5>Welcome to Room Furniture Online store!</h5>=
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
