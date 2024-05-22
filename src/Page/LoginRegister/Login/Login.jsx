import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Input from "../../../Component/Input/Input";
import Button from "../../../Component/Button/Button";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/CSC264/RoomAPI/Login.php",
        {
          username: Inputs.Username,
          password: Inputs.Password
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Login system

  const [Users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

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
        <div className="LoginRegister-Container">
          <div className="form-section">
            <div className="progress-container">
              <h1 className="Title">Sign In</h1>
              <h5>Welcome to Room Furniture Online store!</h5>
            </div>
            <form onSubmit={handleSubmit} method="POST">
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
                      Forgot Password? <Link to="/Forgot-Password">Reset</Link>
                    </p>
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
