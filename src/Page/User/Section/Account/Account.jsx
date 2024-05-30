import React, { useEffect, useState } from "react";

import UserNav from "../../UserNavigation/UserNav";
import Input from "../../../../Component/Input/Input";
import Button from "../../../../Component/Button/Button";
import ProgressBar from "../../../LoginRegister/Register/ProgressBar";
import "./Account.css";
import axios from "axios";
import Loading from "../../../Loading/Loading";
const Account = (props) => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const [UserData, setUserData] = useState({});
  const [IsLoading, setIsLoading] = useState(false);

  // Set User Data received from props
  useEffect(() => {
    setUserData(props.UserData);
    console.log(UserData);
  }, [props.UserData]);

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
    setUserData((values) => ({ ...values, [name]: value }));
    console.log(UserData);
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

  const handleProfileUpdate = () => {
    setIsLoading(true);
    fetch();
    const {
      UserID,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      addressLine1,
      addressLine2,
      postCode,
      city,
      country,
      Password,
      Username
    } = UserData;
    const data = {
      UserID,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      addressLine1,
      addressLine2,
      postCode,
      city,
      country,
      Password,
      Username
    };
    fetch
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
                  value: UserData.firstName,
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
                  value: UserData.lastName,
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
                  className: "input",
                  value: UserData.emailAddress,
                  onChange: handleChange
                }}
              />
              <Input
                formSize="full"
                inputProps={{
                  type: "tel",
                  name: "phoneNumber",
                  id: "phoneNumber",
                  label: "phone Number",
                  placeholder: "phone Number",
                  className: "input",
                  value: UserData.phoneNumber,
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
                  value: UserData.Username,
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
                  name: "addressLine1",
                  id: "addressLine1",
                  label: "Address Line 1",
                  placeholder: "Address Line 1",
                  className: "input",
                  value: UserData.addressLine1,
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
                  value: UserData.addressLine2,
                  onChange: handleChange
                }}
              />
              <Input
                formSize="half"
                inputProps={{
                  type: "text",
                  name: "postCode",
                  id: "postCode",
                  label: "Postcode",
                  placeholder: "Postcode",
                  className: "input",
                  value: UserData.postCode,
                  onChange: handleChange
                }}
                inputProps2={{
                  type: "text",
                  name: "city",
                  id: "city",
                  label: "City",
                  placeholder: "City",
                  className: "input",
                  value: UserData.city,
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
                  className: "input",
                  value: UserData.country,
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
                  name: "oldpassword",
                  id: "oldpassword",
                  className: "input",
                  value: UserData.Password
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
                  placeholder: "NewPassword",
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
