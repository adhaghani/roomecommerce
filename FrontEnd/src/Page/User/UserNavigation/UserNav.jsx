import React, { useState } from "react";

import "./UserNav.css";
const UserNav = (props) => {
  const [Page, setPage] = useState(1);

  const handlePage = (item) => {
    setPage(item);
    props.onClick(item);
  };
  return (
    <div className="USerNav" id="UserNav">
      {props.category === "Account" && (
        <ul>
          <li
            className={Page == 1 ? "active" : ""}
            onClick={() => handlePage(1)}
          >
            <p>Profile</p>
          </li>
          <li
            className={Page == 2 ? "active" : ""}
            onClick={() => handlePage(2)}
          >
            <p>Address</p>
          </li>
          <li
            className={Page == 3 ? "active" : ""}
            onClick={() => handlePage(3)}
          >
            <p>Password</p>
          </li>
        </ul>
      )}
      {props.category === "Like" && (
        <ul>
          <li className="active">
            <p>Liked</p>
          </li>
        </ul>
      )}
      {props.category === "Purchase" && (
        <ul>
          <li
            className={Page == 1 ? "active" : ""}
            onClick={() => handlePage(1)}
          >
            <p>All</p>
          </li>
          <li
            className={Page == 2 ? "active" : ""}
            onClick={() => handlePage(2)}
          >
            <p>To Ship</p>
          </li>
          <li
            className={Page == 3 ? "active" : ""}
            onClick={() => handlePage(3)}
          >
            <p>To Receive</p>
          </li>
          <li
            className={Page == 4 ? "active" : ""}
            onClick={() => handlePage(4)}
          >
            <p>Completed</p>
          </li>
          <li
            className={Page == 5 ? "active" : ""}
            onClick={() => handlePage(5)}
          >
            <p>Cancelled</p>
          </li>
        </ul>
      )}
      {props.category === "AdminStatistic" && (
        <ul>
          <li
            className={Page == 1 ? "active" : ""}
            onClick={() => handlePage(1)}
          >
            <p>Statistical Data</p>
          </li>
        </ul>
      )}
      {props.category === "AdminProduct" && (
        <ul>
          <li
            className={Page == 1 ? "active" : ""}
            onClick={() => handlePage(1)}
          >
            <p>Add</p>
          </li>
          <li
            className={Page == 2 ? "active" : ""}
            onClick={() => handlePage(2)}
          >
            <p>Update</p>
          </li>
          <li
            className={Page == 3 ? "active" : ""}
            onClick={() => handlePage(3)}
          >
            <p>List</p>
          </li>
        </ul>
      )}
      {props.category === "AdminCategory" && (
        <ul>
          <li
            className={Page == 1 ? "active" : ""}
            onClick={() => handlePage(1)}
          >
            <p>Add</p>
          </li>
          <li
            className={Page == 2 ? "active" : ""}
            onClick={() => handlePage(2)}
          >
            <p>Update</p>
          </li>
          <li
            className={Page == 3 ? "active" : ""}
            onClick={() => handlePage(3)}
          >
            <p>List</p>
          </li>
        </ul>
      )}
      {props.category === "AdminOrders" && (
        <ul>
          <li
            className={Page == 1 ? "active" : ""}
            onClick={() => handlePage(1)}
          >
            <p>All</p>
          </li>
          <li
            className={Page == 2 ? "active" : ""}
            onClick={() => handlePage(2)}
          >
            <p>To Ship</p>
          </li>
          <li
            className={Page == 3 ? "active" : ""}
            onClick={() => handlePage(3)}
          >
            <p>To Receive</p>
          </li>
          <li
            className={Page == 4 ? "active" : ""}
            onClick={() => handlePage(4)}
          >
            <p>Completed</p>
          </li>
          <li
            className={Page == 5 ? "active" : ""}
            onClick={() => handlePage(5)}
          >
            <p>Cancelled</p>
          </li>
        </ul>
      )}
      {props.category === "AdminUsers" && (
        <ul>
          <li
            className={Page == 1 ? "active" : ""}
            onClick={() => handlePage(1)}
          >
            <p>List</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserNav;
