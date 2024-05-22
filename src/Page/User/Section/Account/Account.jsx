import React, { useState } from "react";

import UserNav from "../../UserNavigation/UserNav";
import Input from "../../../../Component/Input/Input";
import Button from "../../../../Component/Button/Button";
import ProgressBar from "../../../LoginRegister/Register/ProgressBar";
import "./Account.css";
const Account = (props) => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const handleSubNavClick = (item) => {
    setCurrentPage(item);
  };
  const [Password, setPassword] = useState("");

  const [isValidLength, setIsValidLength] = useState(false);
  const [isValidSymbol, setIsValidSymbol] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(false);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsValidLength(validateLength(newPassword));
    setIsValidSymbol(validateSymbol(newPassword));
    setIsValidNumber(validateNumber(newPassword));
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

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Handle Confirm Password
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [IsValid2, setIsValid2] = useState(false);
  const handleConfirmPassword = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    setIsValid2(validateConfirmPassword(newConfirmPassword));
  };
  const validateConfirmPassword = (password) => {
    return password === Password;
  };

  return (
    <div className="Account" id="Account">
      <UserNav category="Account" onClick={handleSubNavClick} />
      <div className="Account-Container">
        {/* Profile */}
        {CurrentPage == 1 && (
          <div className="page">
            <div className="Page-Container">
              <div className="title-container">
                <div className="title">
                  <h1>Personal Information</h1>
                </div>
                <div className="title-detail">
                  <p>Update your Personal Information Here</p>
                </div>
              </div>
              <Input
                formSize="half"
                inputProps={{
                  type: "text",
                  name: "firstName",
                  id: "firstName",
                  label: "First Name",
                  placeholder: "First Name",
                  className: "input",
                  onChange: handleChange
                }}
                inputProps2={{
                  type: "text",
                  name: "lastName",
                  id: "lastName",
                  label: "Last Name",
                  placeholder: "Last Name",
                  className: "input",
                  onChange: handleChange
                }}
              />
              <Input
                formSize="full"
                inputProps={{
                  type: "email",
                  name: "email",
                  id: "email",
                  label: "Email Address",
                  placeholder: "Email Address",
                  className: "input",
                  onChange: handleChange
                }}
              />
              <Input
                formSize="full"
                inputProps={{
                  type: "tel",
                  name: "phone",
                  id: "phone",
                  label: "phone Number",
                  placeholder: "phone Number",
                  className: "input",
                  onChange: handleChange
                }}
              />

              <div className="title-container">
                <div className="title">
                  <h1>Username</h1>
                </div>
                <div className="title-detail">
                  <p>Update your Username Here</p>
                </div>
              </div>
              <Input
                formSize="full"
                inputProps={{
                  type: "tel",
                  name: "New Username",
                  id: "New Username",
                  label: "New Username",
                  placeholder: "New Username",
                  className: "input",
                  onChange: handleChange
                }}
              />
              <div className="button-container end">
                <Button type="update" className="fill primary" />
              </div>
            </div>
          </div>
        )}
        {/* Address */}
        {CurrentPage == 2 && (
          <div className="page">
            <div className="Page-Container">
              <div className="title-container">
                <div className="title">
                  <h1>Home Address</h1>
                </div>
                <div className="title-detail">
                  <p>
                    Provide your home address so it will be easier for us to
                    ship the product directly to your doorstep
                  </p>
                </div>
              </div>

              <Input
                formSize="full"
                inputProps={{
                  type: "text",
                  name: "Address Line 1",
                  id: "Address Line 1",
                  label: "Address Line 1",
                  placeholder: "Address Line 1",
                  className: "input",
                  onChange: handleChange
                }}
              />
              <Input
                formSize="full"
                inputProps={{
                  type: "text",
                  name: "Address Line 2",
                  id: "Address Line 2",
                  label: "Address Line 2",
                  placeholder: "Address Line 2  ",
                  className: "input",
                  onChange: handleChange
                }}
              />
              <Input
                formSize="half"
                inputProps={{
                  type: "text",
                  name: "Postcode",
                  id: "Postcode",
                  label: "Postcode",
                  placeholder: "Postcode",
                  className: "input",
                  onChange: handleChange
                }}
                inputProps2={{
                  type: "text",
                  name: "City",
                  id: "City",
                  label: "City",
                  placeholder: "City",
                  className: "input",
                  onChange: handleChange
                }}
              />

              <Input
                formSize="full"
                inputProps={{
                  type: "text",
                  name: "Country",
                  id: "Country",
                  label: "Country",
                  placeholder: "Country",
                  className: "input",
                  onChange: handleChange
                }}
              />
              <div className="button-container end">
                <Button type="update" className="fill primary" />
              </div>
            </div>
          </div>
        )}
        {/* Password */}
        {CurrentPage == 3 && (
          <div className="page">
            <div className="Page-Container">
              <div className="title-container">
                <div className="title">
                  <h1>Password</h1>
                </div>
                <div className="title-detail">
                  <p>To secure your account, let's create a password.</p>
                </div>
              </div>
              <Input
                formSize="full"
                inputProps={{
                  type: "password",
                  name: "CurrentPassword",
                  id: "CurrentPassword",
                  label: "Current Password",
                  placeholder: "Current Password",
                  className: "input"
                }}
              />
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
                  name: "NewPassword",
                  id: "NewPassword",
                  label: "New Password",
                  placeholder: "New Password",
                  className: "input",
                  value: Password,
                  onChange: handlePasswordChange
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
                  name: "ConfirmNewPassword",
                  id: "ConfirmNewPassword",
                  label: "Confirm New Password",
                  placeholder: "Confirm New Password",
                  className: "input",
                  value: ConfirmPassword,
                  onChange: handleConfirmPassword
                }}
              />
              <div className="button-container end">
                <Button type="update" className="fill primary" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
