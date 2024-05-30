import React, { useEffect, useState } from "react";

import AdminCategory from "./Section/AdminCategory/AdminCategory";
import AdminOrders from "./Section/AdminOrders/AdminOrders";
import AdminProduct from "./Section/AdminProduct/AdminProduct";
import AdminUsers from "./Section/AdminUsers/AdminUsers";
import AdminStatistic from "./Section/AdminStatistic/AdminStatistic";
import Notification from "../../Component/Notification/Notification";
import "./Admin.css";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Admin = (props) => {
  const { AdminID } = useParams();

  const [User, setUser] = useState({});
  const getUser = () => {
    axios
      .get(`http://localhost/CSC264/RoomAPI/getUser.php/${AdminID}`)
      .then((response) => {
        setUser(response.data);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  const [IsActive, setIsActive] = useState(false);

  const [CurrentPage, setCurrentPage] = useState("Statistic");
  return (
    <div className="Admin" id="Admin">
      <Notification />
      <div className="Admin-Container">
        <button
          className={IsActive ? "hamburger active" : "hamburger"}
          id="hamburger"
          onClick={() => setIsActive(!IsActive)}
        >
          <div className="top"></div>
          <div className="mid"></div>
          <div className="bot"></div>
        </button>
        <div className={IsActive ? "Profile Mobile active" : "Profile Mobile"}>
          <h3 className="greeting">Hello, {User.Username}</h3>
          <ul className="List">
            <button
              className={IsActive ? "hamburger active" : "hamburger"}
              id="hamburger"
              onClick={() => setIsActive(!IsActive)}
            >
              <div className="top"></div>
              <div className="mid"></div>
              <div className="bot"></div>
            </button>
            <li
              className={CurrentPage === "Statistic" ? "active" : ""}
              onClick={() => setCurrentPage("Statistic")}
            >
              <div className="icon">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M15 4V8M11 8V12M7 13V17M19 4V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="name">
                <h4>Statistic</h4>
              </div>
            </li>
            <li
              className={CurrentPage === "Product" ? "active" : ""}
              onClick={() => setCurrentPage("Product")}
            >
              <div className="icon">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 6.00008V4.2844C16 3.51587 16 3.13161 15.8387 2.88321C15.6976 2.66587 15.4776 2.5118 15.2252 2.45345C14.9366 2.38677 14.5755 2.51809 13.8532 2.78073L6.57982 5.4256C6.01064 5.63257 5.72605 5.73606 5.51615 5.91845C5.33073 6.07956 5.18772 6.28374 5.09968 6.51304C5 6.77264 5 7.07546 5 7.6811V12.0001M9 17.0001H15M9 13.5001H15M9 10.0001H15M8.2 21.0001H15.8C16.9201 21.0001 17.4802 21.0001 17.908 20.7821C18.2843 20.5903 18.5903 20.2844 18.782 19.9081C19 19.4802 19 18.9202 19 17.8001V9.20008C19 8.07997 19 7.51992 18.782 7.0921C18.5903 6.71577 18.2843 6.40981 17.908 6.21807C17.4802 6.00008 16.9201 6.00008 15.8 6.00008H8.2C7.0799 6.00008 6.51984 6.00008 6.09202 6.21807C5.71569 6.40981 5.40973 6.71577 5.21799 7.0921C5 7.51992 5 8.07997 5 9.20008V17.8001C5 18.9202 5 19.4802 5.21799 19.9081C5.40973 20.2844 5.71569 20.5903 6.09202 20.7821C6.51984 21.0001 7.07989 21.0001 8.2 21.0001Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="name">
                <h4>Product</h4>
              </div>
            </li>
            <li
              className={CurrentPage === "Category" ? "active" : ""}
              onClick={() => setCurrentPage("Category")}
            >
              <div className="icon">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 14H17M7 10H17M6.2 18H17.8C18.9201 18 19.4802 18 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C21 16.4802 21 15.9201 21 14.8V9.2C21 8.07989 21 7.51984 20.782 7.09202C20.5903 6.71569 20.2843 6.40973 19.908 6.21799C19.4802 6 18.9201 6 17.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="name">
                <h4>Category</h4>
              </div>
            </li>

            <li
              className={CurrentPage === "Orders" ? "active" : ""}
              onClick={() => setCurrentPage("Orders")}
            >
              <div className="icon">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3V5M12 3V5M15 3V5M13 9H9M15 13H9M8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V7.2C19 6.0799 19 5.51984 18.782 5.09202C18.5903 4.71569 18.2843 4.40973 17.908 4.21799C17.4802 4 16.9201 4 15.8 4H8.2C7.0799 4 6.51984 4 6.09202 4.21799C5.71569 4.40973 5.40973 4.71569 5.21799 5.09202C5 5.51984 5 6.07989 5 7.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="name">
                <h4>Orders</h4>
              </div>
            </li>

            <li
              className={CurrentPage === "Users" ? "active" : ""}
              onClick={() => setCurrentPage("Users")}
            >
              <div className="icon">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17C7 17 8 14 12 14C16 14 17 17 17 17M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9ZM12 20L14.5314 17.4686C14.7043 17.2957 14.7908 17.2092 14.8917 17.1474C14.9812 17.0925 15.0787 17.0521 15.1808 17.0276C15.2959 17 15.4182 17 15.6627 17H16.8C17.9201 17 18.4802 17 18.908 16.782C19.2843 16.5903 19.5903 16.2843 19.782 15.908C20 15.4802 20 14.9201 20 13.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V13.8C4 14.9201 4 15.4802 4.21799 15.908C4.40973 16.2843 4.71569 16.5903 5.09202 16.782C5.51984 17 6.0799 17 7.2 17H8.33726C8.58185 17 8.70414 17 8.81923 17.0276C8.92127 17.0521 9.01881 17.0925 9.10828 17.1474C9.2092 17.2092 9.29568 17.2957 9.46863 17.4686L12 20Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="name">
                <h4>Users</h4>
              </div>
            </li>
            <Link to={"/"}>
              <li
                className={CurrentPage === "Out" ? "active" : ""}
                onClick={() => setCurrentPage("Out")}
              >
                <div className="icon">
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.9866C4.67275 16.9698 4.43855 16.9322 4.23463 16.8478C3.74458 16.6448 3.35523 16.2554 3.15224 15.7654C3 15.3978 3 14.9319 3 14V7.2C3 6.0799 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V14C21 14.9319 21 15.3978 20.8478 15.7654C20.6448 16.2554 20.2554 16.6448 19.7654 16.8478C19.5615 16.9322 19.3273 16.9698 19 16.9866M9.14074 20H14.8593C15.4237 20 15.706 20 15.8367 19.875C15.9501 19.7666 16.0103 19.6039 15.9986 19.4375C15.9851 19.2456 15.7855 19.0222 15.3863 18.5753L12.5271 15.3741C12.3426 15.1675 12.2503 15.0642 12.144 15.0255C12.0504 14.9915 11.9496 14.9915 11.856 15.0255C11.7497 15.0642 11.6574 15.1675 11.4729 15.3741L8.61365 18.5753C8.2145 19.0222 8.01492 19.2456 8.00144 19.4375C7.98974 19.6039 8.04992 19.7666 8.16332 19.875C8.29401 20 8.57626 20 9.14074 20Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="name">
                  <h4>Sign Out</h4>
                </div>
              </li>
            </Link>
          </ul>
          <ul className="List Mobile">
            <li
              className={CurrentPage === "Statistic" ? "active" : ""}
              onClick={() => {
                setCurrentPage("Statistic");
                setIsActive(!IsActive);
              }}
            >
              <div className="icon">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M15 4V8M11 8V12M7 13V17M19 4V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="name">
                <h4>Statistic</h4>
              </div>
            </li>
            <li
              className={CurrentPage === "Product" ? "active" : ""}
              onClick={() => {
                setCurrentPage("Product");
                setIsActive(!IsActive);
              }}
            >
              <div className="icon">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 6.00008V4.2844C16 3.51587 16 3.13161 15.8387 2.88321C15.6976 2.66587 15.4776 2.5118 15.2252 2.45345C14.9366 2.38677 14.5755 2.51809 13.8532 2.78073L6.57982 5.4256C6.01064 5.63257 5.72605 5.73606 5.51615 5.91845C5.33073 6.07956 5.18772 6.28374 5.09968 6.51304C5 6.77264 5 7.07546 5 7.6811V12.0001M9 17.0001H15M9 13.5001H15M9 10.0001H15M8.2 21.0001H15.8C16.9201 21.0001 17.4802 21.0001 17.908 20.7821C18.2843 20.5903 18.5903 20.2844 18.782 19.9081C19 19.4802 19 18.9202 19 17.8001V9.20008C19 8.07997 19 7.51992 18.782 7.0921C18.5903 6.71577 18.2843 6.40981 17.908 6.21807C17.4802 6.00008 16.9201 6.00008 15.8 6.00008H8.2C7.0799 6.00008 6.51984 6.00008 6.09202 6.21807C5.71569 6.40981 5.40973 6.71577 5.21799 7.0921C5 7.51992 5 8.07997 5 9.20008V17.8001C5 18.9202 5 19.4802 5.21799 19.9081C5.40973 20.2844 5.71569 20.5903 6.09202 20.7821C6.51984 21.0001 7.07989 21.0001 8.2 21.0001Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="name">
                <h4>Product</h4>
              </div>
            </li>
            <li
              className={CurrentPage === "Category" ? "active" : ""}
              onClick={() => {
                setCurrentPage("Category");
                setIsActive(!IsActive);
              }}
            >
              <div className="icon">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 14H17M7 10H17M6.2 18H17.8C18.9201 18 19.4802 18 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C21 16.4802 21 15.9201 21 14.8V9.2C21 8.07989 21 7.51984 20.782 7.09202C20.5903 6.71569 20.2843 6.40973 19.908 6.21799C19.4802 6 18.9201 6 17.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="name">
                <h4>Category</h4>
              </div>
            </li>

            <li
              className={CurrentPage === "Orders" ? "active" : ""}
              onClick={() => {
                setCurrentPage("Orders");
                setIsActive(!IsActive);
              }}
            >
              <div className="icon">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3V5M12 3V5M15 3V5M13 9H9M15 13H9M8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V7.2C19 6.0799 19 5.51984 18.782 5.09202C18.5903 4.71569 18.2843 4.40973 17.908 4.21799C17.4802 4 16.9201 4 15.8 4H8.2C7.0799 4 6.51984 4 6.09202 4.21799C5.71569 4.40973 5.40973 4.71569 5.21799 5.09202C5 5.51984 5 6.07989 5 7.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="name">
                <h4>Orders</h4>
              </div>
            </li>

            <li
              className={CurrentPage === "Users" ? "active" : ""}
              onClick={() => {
                setCurrentPage("Users");
                setIsActive(!IsActive);
              }}
            >
              <div className="icon">
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17C7 17 8 14 12 14C16 14 17 17 17 17M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9ZM12 20L14.5314 17.4686C14.7043 17.2957 14.7908 17.2092 14.8917 17.1474C14.9812 17.0925 15.0787 17.0521 15.1808 17.0276C15.2959 17 15.4182 17 15.6627 17H16.8C17.9201 17 18.4802 17 18.908 16.782C19.2843 16.5903 19.5903 16.2843 19.782 15.908C20 15.4802 20 14.9201 20 13.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V13.8C4 14.9201 4 15.4802 4.21799 15.908C4.40973 16.2843 4.71569 16.5903 5.09202 16.782C5.51984 17 6.0799 17 7.2 17H8.33726C8.58185 17 8.70414 17 8.81923 17.0276C8.92127 17.0521 9.01881 17.0925 9.10828 17.1474C9.2092 17.2092 9.29568 17.2957 9.46863 17.4686L12 20Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="name">
                <h4>Users</h4>
              </div>
            </li>
            <Link to={"/"}>
              <li
                className={CurrentPage === "Out" ? "active" : ""}
                onClick={() => setCurrentPage("Out")}
              >
                <div className="icon">
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.9866C4.67275 16.9698 4.43855 16.9322 4.23463 16.8478C3.74458 16.6448 3.35523 16.2554 3.15224 15.7654C3 15.3978 3 14.9319 3 14V7.2C3 6.0799 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V14C21 14.9319 21 15.3978 20.8478 15.7654C20.6448 16.2554 20.2554 16.6448 19.7654 16.8478C19.5615 16.9322 19.3273 16.9698 19 16.9866M9.14074 20H14.8593C15.4237 20 15.706 20 15.8367 19.875C15.9501 19.7666 16.0103 19.6039 15.9986 19.4375C15.9851 19.2456 15.7855 19.0222 15.3863 18.5753L12.5271 15.3741C12.3426 15.1675 12.2503 15.0642 12.144 15.0255C12.0504 14.9915 11.9496 14.9915 11.856 15.0255C11.7497 15.0642 11.6574 15.1675 11.4729 15.3741L8.61365 18.5753C8.2145 19.0222 8.01492 19.2456 8.00144 19.4375C7.98974 19.6039 8.04992 19.7666 8.16332 19.875C8.29401 20 8.57626 20 9.14074 20Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="name">
                  <h4>Sign Out</h4>
                </div>
              </li>
            </Link>
          </ul>
        </div>
        <div className={IsActive ? "CurrentPage active" : "CurrentPage"}>
          {CurrentPage === "Statistic" && <AdminStatistic AdminID={AdminID} />}
          {CurrentPage === "Product" && <AdminProduct AdminID={AdminID} />}
          {CurrentPage === "Category" && <AdminCategory AdminID={AdminID} />}
          {CurrentPage === "Orders" && <AdminOrders AdminID={AdminID} />}
          {CurrentPage === "Users" && <AdminUsers AdminID={AdminID} />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
