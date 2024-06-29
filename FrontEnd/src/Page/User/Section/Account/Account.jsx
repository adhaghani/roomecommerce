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
  }, [props.UserData]);

  const handleSubNavClick = (item) => {
    setCurrentPage(item);
  };
  const [NewPassword, setNewPassword] = useState("");

  const [isValidLength, setIsValidLength] = useState(false);
  const [isValidSymbol, setIsValidSymbol] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(false);

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setNewPassword(value);
    setIsValidLength(validateLength(value));
    setIsValidSymbol(validateSymbol(value));
    setIsValidNumber(validateNumber(value));
    console.log(NewPassword);
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
    if (password === NewPassword) return true;
    return false;
  };

  const handleProfileUpdate = (event) => {
    setIsLoading(true);
    event.preventDefault();
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
      Username
    };
    fetch("http://localhost/CSC264/RoomAPI/UpdateUser.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 0) {
          window.dispatchEvent(
            new CustomEvent("showNotification", {
              detail: {
                message: "Username or Email Address Already Exist",
                type: "Error"
              }
            })
          );
        } else {
          window.dispatchEvent(
            new CustomEvent("showNotification", {
              detail: { message: "Profile Updated", type: "success" }
            })
          );
        }
      });
  };

  const handlePasswordUpdate = () => {
    if (!IsValid2) return;
    if (!isValidLength || !isValidSymbol || !isValidNumber) return;

    setIsLoading(true);
    const { UserID } = UserData;
    const Password = ConfirmPassword;
    const data = {
      UserID,
      Password
    };
    console.log(data.Password);
    fetch("http://localhost/CSC264/RoomAPI/UpdateUserPassword.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    window.dispatchEvent(
      new CustomEvent("showNotification", {
        detail: { message: "Password Updated", type: "success" }
      })
    );
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
                  name: "Username",
                  id: "Username",
                  label: "New Username",
                  placeholder: "New Username",
                  className: "input",
                  value: UserData.Username,
                  onChange: handleChange
                }}
              />
              <div className="button-container end">
                <Button
                  type="update"
                  className="fill primary"
                  onClick={handleProfileUpdate}
                />
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
                  <p>Update your home address here.</p>
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
                <Button
                  type="update"
                  className="fill primary"
                  onClick={handleProfileUpdate}
                />
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
                  <p>Hate your old password? Update it here.</p>
                </div>
              </div>
              <Input
                formSize="full"
                inputProps={{
                  type: "password",
                  name: "oldpassword",
                  id: "oldpassword",
                  className: "input",
                  value: "***"
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
                  value: NewPassword,
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
                <Button
                  type="update"
                  className="fill primary"
                  onClick={handlePasswordUpdate}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
