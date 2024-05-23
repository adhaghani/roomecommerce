import React, { useEffect, useState } from "react";

import "./UserDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const UserDetail = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  const { UserID } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(`http://localhost/CSC264/RoomAPI/getUser.php/${UserID}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  };

  return (
    <div className="UserDetail" id="UserDetail">
      <div className="UserDetail-Container">
        <div className="User-Title">
          <h2>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 12H15M21 8H3M18 16H15M13 19C12.6218 17.2883 10.9747 16 9 16C7.03262 16 5.39034 17.2788 5.00424 18.9811M9 12H9.01M5.00424 18.9811C5.31776 19 5.70396 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.33038 18.9035 4.60979 18.9572 5.00424 18.9811ZM10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            User Detail
          </h2>
          <div className="back">
            <Link to={`/Admin/${props.AdminID}`}>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 9L15 15M15 9L9 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="User-Details">
          <div className="Section">
            <div className="Section-Title">
              <h3>
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 7H12M15 15H16M8 11H16M8 16L9 17L11 15M7.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V6.2C20 5.0799 20 4.51984 19.782 4.09202C19.5903 3.71569 19.2843 3.40973 18.908 3.21799C18.4802 3 17.9201 3 16.8 3H7.2C6.0799 3 5.51984 3 5.09202 3.21799C4.71569 3.40973 4.40973 3.71569 4.21799 4.09202C4 4.51984 4 5.07989 4 6.2V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40973 20.2843 4.71569 20.5903 5.09202 20.782C5.51984 21 6.07989 21 7.2 21Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Personal Information
              </h3>
            </div>
            <div className="Section-Details">
              <div className="details-Name">
                <div className="details First-Name">
                  <div className="container-details">
                    <p className="label">First Name</p>
                    <p>{user.firstName}</p>
                  </div>
                </div>
                <div className="details Last-Name">
                  <p className="container-details">
                    <p className="label">Last Name</p>
                    <p>{user.lastName}</p>
                  </p>
                </div>
              </div>
              <div className="details Email-Address">
                <div className="container-details">
                  <p className="label">Email Address</p>
                  <p>{user.emailAddress}</p>
                </div>
              </div>
              <div className="details Phone-Number">
                <div className="container-details">
                  <p className="label">phone Number</p>
                  <p>{user.phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Section">
            <div className="Section-Title">
              <h3>
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Home Address
              </h3>
            </div>
            <div className="Section-Details">
              <div className="details Address Line 1">
                <div className="container-details">
                  <p className="label">Address Line 1</p>
                  <p>{user.addressLine1}</p>
                </div>
              </div>
              {user.addressLine2 && (
                <div className="details Address Line 2">
                  <div className="container-details">
                    <p className="label">Address Line 2</p>
                    <p>{user.addressLine2}</p>
                  </div>
                </div>
              )}
              <div className="details-State">
                <div className="details Postcode">
                  <div className="container-details">
                    <p className="label">Postcode</p>
                    <p>{user.postCode}</p>
                  </div>
                </div>
                <div className="details City">
                  <div className="container-details">
                    <p className="label">City</p>
                    <p>{user.city}</p>
                  </div>
                </div>
              </div>
              <div className="details Country">
                <div className="container-details">
                  <p className="label">Country</p>
                  <p>{user.country}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Section">
            <div className="Section-Title">
              <h3>
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 15.5C14.7164 14.3589 13.481 13.5 12 13.5C10.519 13.5 9.28364 14.3589 9 15.5M12 9.5H12.01M13 9.5C13 10.0523 12.5523 10.5 12 10.5C11.4477 10.5 11 10.0523 11 9.5C11 8.94772 11.4477 8.5 12 8.5C12.5523 8.5 13 8.94772 13 9.5ZM7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Account Details
              </h3>
            </div>
            <div className="Section-Details">
              <div className="details User-Name">
                <div className="container-details">
                  <p className="label">UserName</p>
                  <p>{user.Username}</p>
                </div>
              </div>
              <div className="details Account-Password">
                <div className="container-details">
                  <p className="label">Password</p>
                  <p>{user.Password}</p>
                </div>
              </div>
              <div className="details-State">
                <div className="details Postcode">
                  <div className="container-details">
                    <p className="label">Date Registered</p>
                    <p>{user.dateRegistered}</p>
                  </div>
                </div>
                <div className="details City">
                  <div className="container-details">
                    <p className="label">UserID</p>
                    <p>{user.UserID}</p>
                  </div>
                </div>
              </div>
              <div className="details Account-Password">
                <div className="container-details">
                  <p className="label">User Role</p>
                  {user.RoleID == 1 && <p>Admin</p>}
                  {user.RoleID == 2 && <p>Customer</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
