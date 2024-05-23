import React, { useEffect, useState } from "react";

import Input from "../../../Component/Input/Input";
import Button from "../../../Component/Button/Button";
import ProgressBar from "./ProgressBar";
import "./Register.css";
import axios from "axios";
const Register = () => {
  // Flipping page
  const [CurrentPage, setCurrentPage] = useState(0);

  const NextPage = (e) => {
    e.preventDefault();
    if (CurrentPage == 0) {
      if (
        isInputEmpty.firstName ||
        isInputEmpty.lastName ||
        isInputEmpty.emailAddress ||
        isInputEmpty.phoneNumber
      ) {
      } else {
        setCurrentPage(CurrentPage + 1);
      }
    } else if (CurrentPage == 1) {
      if (
        isInputEmpty.addressLine1 ||
        isInputEmpty.city ||
        isInputEmpty.country ||
        isInputEmpty.postCode
      ) {
      } else {
        setCurrentPage(CurrentPage + 1);
      }
    } else if (CurrentPage == 2) {
      if (isInputEmpty.Password || isInputEmpty.confirmPassword) {
      } else {
        if (Inputs.Password === Inputs.confirmPassword) {
          setCurrentPage(CurrentPage + 1);
        } else {
          console.log("password not same");
        }
      }
    }
    if (CurrentPage == 3) {
      if (isInputEmpty.Username) {
      } else {
        setCurrentPage(CurrentPage + 1);
      }
    }
  };

  const PreviousPage = () => {
    if (CurrentPage != 0) {
      setCurrentPage(CurrentPage - 1);
    }
  };

  // Password Management

  const [isValidLength, setIsValidLength] = useState(false);
  const [isValidSymbol, setIsValidSymbol] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(false);

  const [Inputs, setInputs] = useState({
    Username: "",
    Password: "",
    RoleID: 2,
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    postCode: "",
    city: "",
    country: "",
    confirmPassword: ""
  });

  const [isInputEmpty, setIsInputEmpty] = useState({
    Username: true,
    Password: true,
    firstName: true,
    lastName: true,
    emailAddress: true,
    phoneNumber: true,
    addressLine1: true,
    addressLine2: true,
    postCode: true,
    city: true,
    country: true,
    confirmPassword: true
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setIsInputEmpty((state) => ({
      ...state,
      [name]: value.trim() === ""
    }));
    console.log(Inputs);

    if (name === "Password") {
      setIsValidLength(validateLength(value));
      setIsValidSymbol(validateSymbol(value));
      setIsValidNumber(validateNumber(value));
    }
  };

  const validateLength = (password) => {
    const minLength = 8;
    return password.length >= minLength;
  };

  const validateSymbol = (password) => {
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return hasSymbol.test(password);
  };

  const validateNumber = (password) => {
    const hasNumber = /[0-9]+/;
    return hasNumber.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      Username,
      Password,
      RoleID,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      addressLine1,
      addressLine2,
      postCode,
      city,
      country
    } = Inputs;
    const data = {
      Username,
      Password,
      RoleID,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      addressLine1,
      addressLine2,
      postCode,
      city,
      country
    };
    fetch("http://localhost/CSC264/RoomAPI/RegisterUser.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="LoginRegister">
        <div className="LoginRegister-Container">
          <div className="form-section">
            <div className="progress-container">
              <h1 className="Title">Sign Up</h1>
              <h5>Create an account with us today.</h5>
              <div className="section-container">
                <div className={CurrentPage < 0 ? "section" : "section active"}>
                  <div className="number">
                    <h2>1</h2>
                  </div>
                  <div className="page-name">
                    <h4>Personal Information</h4>
                  </div>
                </div>
                <div className={CurrentPage < 1 ? "section" : "section active"}>
                  <div className="number">
                    <h2>2</h2>
                  </div>
                  <div className="page-name">
                    <h4>Home address</h4>
                  </div>
                </div>
                <div className={CurrentPage < 2 ? "section" : "section active"}>
                  <div className="number">
                    <h2>3</h2>
                  </div>
                  <div className="page-name">
                    <h4>Password</h4>
                  </div>
                </div>
                <div className={CurrentPage < 3 ? "section" : "section active"}>
                  <div className="number">
                    <h2>4</h2>
                  </div>
                  <div className="page-name">
                    <h4>Finishing Up</h4>
                  </div>
                </div>
              </div>
            </div>
            <form method="POST" onSubmit={handleSubmit} autoComplete="off">
              {/* Personal Information */}
              {CurrentPage == 0 && (
                <>
                  <div className="page">
                    <div className="title-container">
                      <div className="title">
                        <h1>Personal Information</h1>
                      </div>
                      <div className="title-detail">
                        <p>
                          Let's start by filling your personal information,
                          please fill your name, email address and phone number
                        </p>
                      </div>
                      <div className="error"></div>
                    </div>
                    <Input
                      formSize="half"
                      inputProps={{
                        type: "text",
                        name: "firstName",
                        id: "firstName",
                        label: "First Name",
                        placeholder: "First Name",
                        className: isInputEmpty.firstName
                          ? "input error"
                          : "input",
                        value: Inputs.firstName,
                        onChange: handleChange
                      }}
                      inputProps2={{
                        type: "text",
                        name: "lastName",
                        id: "lastName",
                        label: "Last Name",
                        placeholder: "Last Name",
                        className: isInputEmpty.lastName
                          ? "input error"
                          : "input",
                        value: Inputs.lastName,
                        onChange: handleChange
                      }}
                    />
                    <Input
                      formSize="full"
                      inputProps={{
                        type: "email",
                        name: "emailAddress",
                        id: "emailAddress",
                        label: "Email Address",
                        placeholder: "Email Address",
                        className: isInputEmpty.emailAddress
                          ? "input error"
                          : "input",
                        value: Inputs.emailAddress,
                        onChange: handleChange
                      }}
                    />
                    <Input
                      formSize="full"
                      inputProps={{
                        type: "tel",
                        name: "phoneNumber",
                        id: "phoneNumber",
                        label: "Phone Number",
                        placeholder: "phone Number",
                        className: isInputEmpty.phoneNumber
                          ? "input error"
                          : "input",
                        value: Inputs.phoneNumber,
                        onChange: handleChange
                      }}
                    />
                  </div>
                  <div className="button-container end">
                    <Button
                      type="Next"
                      className="fill primary"
                      onClick={NextPage}
                    />
                  </div>
                </>
              )}
              {/* Address */}
              {CurrentPage == 1 && (
                <>
                  <div className="page">
                    <div className="title-container">
                      <div className="title">
                        <h1>Home Address</h1>
                      </div>
                      <div className="title-detail">
                        <p>
                          Provide your home address so it will be easier for us
                          to ship the product directly to your doorstep
                        </p>
                      </div>
                    </div>

                    <Input
                      formSize="full"
                      inputProps={{
                        type: "text",
                        name: "addressLine1",
                        id: "addressLine1",
                        label: "Address Line 1",
                        placeholder: "Address Line 1",
                        className: isInputEmpty.addressLine1
                          ? "input error"
                          : "input",
                        value: Inputs.addressLine1,
                        onChange: handleChange
                      }}
                    />
                    <Input
                      formSize="full"
                      inputProps={{
                        type: "text",
                        name: "addressLine2",
                        id: "addressLine2",
                        label: "Address Line 2",
                        placeholder: "Address Line 2  ",
                        className: "input",
                        value: Inputs.addressLine2,
                        onChange: handleChange
                      }}
                    />
                    <Input
                      formSize="half"
                      inputProps={{
                        type: "text",
                        name: "postCode",
                        id: "postCode",
                        label: "postCode",
                        placeholder: "postCode",
                        className: isInputEmpty.postCode
                          ? "input error"
                          : "input",
                        value: Inputs.postCode,
                        onChange: handleChange
                      }}
                      inputProps2={{
                        type: "text",
                        name: "city",
                        id: "city",
                        label: "City",
                        placeholder: "City",
                        className: isInputEmpty.city ? "input error" : "input",
                        value: Inputs.city,
                        onChange: handleChange
                      }}
                    />
                    <Input
                      formSize="full"
                      inputProps={{
                        type: "text",
                        name: "country",
                        id: "country",
                        label: "Country",
                        placeholder: "Country",
                        className: isInputEmpty.country
                          ? "input error"
                          : "input",
                        value: Inputs.country,
                        onChange: handleChange
                      }}
                    />
                  </div>
                  <div className="button-container">
                    <Button
                      type="Back"
                      className="outline gray"
                      onClick={PreviousPage}
                    />
                    <Button
                      type="Next"
                      className="fill primary"
                      onClick={NextPage}
                    />
                  </div>
                </>
              )}
              {/* Password */}
              {CurrentPage == 2 && (
                <>
                  <div className="page">
                    <div className="title-container">
                      <div className="title">
                        <h1>Password</h1>
                      </div>
                      <div className="title-detail">
                        <p>To secure your account, let's create a password.</p>
                      </div>
                    </div>
                    <div className="bar ">
                      <ProgressBar
                        haveNumber={isValidNumber}
                        haveSymbol={isValidSymbol}
                        meetMinimumCharacter={isValidLength}
                      />
                    </div>
                    <Input
                      formSize="full"
                      inputProps={{
                        type: "password",
                        name: "Password",
                        id: "Password",
                        label: "New Password",
                        placeholder: "Password",
                        className: isInputEmpty.Password
                          ? "input error"
                          : "input",
                        value: Inputs.Password,
                        onChange: handleChange
                      }}
                    />
                    {(isValidLength && isValidSymbol && isValidNumber) || (
                      <div className="error-container">
                        {!isValidLength && <p>Minimum Length is 8</p>}
                        {!isValidSymbol && <p>Password Require Symbol</p>}
                        {!isValidNumber && <p>Password Require Number</p>}
                      </div>
                    )}
                    {isValidLength && isValidSymbol && isValidNumber && (
                      <div className="good-container">
                        <p>Password is strong</p>
                      </div>
                    )}
                    <Input
                      formSize="full"
                      inputProps={{
                        type: "password",
                        name: "confirmPassword",
                        id: "confirmPassword",
                        label: "Confirm Password",
                        placeholder: "Confirm Password",
                        className: isInputEmpty.confirmPassword
                          ? "input error"
                          : "input",
                        value: Inputs.confirmPassword,
                        onChange: handleChange
                      }}
                    />
                  </div>
                  <div className="button-container">
                    <Button
                      type="Back"
                      className="outline gray"
                      onClick={PreviousPage}
                    />
                    <Button
                      type="Next"
                      className="fill primary"
                      onClick={NextPage}
                    />
                  </div>
                </>
              )}
              {/* Username */}
              {CurrentPage == 3 && (
                <>
                  <div className="page">
                    <div className="title-container">
                      <div className="title">
                        <h1>Wrapping up</h1>
                      </div>
                      <div className="title-detail">
                        <p>
                          You're almost done, but first provide your username so
                          we would know what to call you.
                        </p>
                      </div>
                    </div>

                    <Input
                      formSize="full"
                      inputProps={{
                        type: "text",
                        name: "Username",
                        id: "Username",
                        label: "Username",
                        placeholder: "username",
                        className: isInputEmpty.Username
                          ? "input error"
                          : "input",
                        onChange: handleChange
                      }}
                    />
                  </div>
                  <div className="button-container">
                    <Button
                      type="Back"
                      className="outline gray"
                      onClick={PreviousPage}
                    />
                    <Button
                      type="formsubmit"
                      className="fill primary"
                      value={"Register"}
                    />
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
