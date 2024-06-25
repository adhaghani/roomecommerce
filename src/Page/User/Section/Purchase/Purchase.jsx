import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";

import UserNav from "../../UserNavigation/UserNav";

import "./Purchase.css";

import ProductUserCard from "./UserProduct/ProductUserCard";
import AdminOrd from "../../../Admin/Section/List/AdminOrd";
import NoData from "../../../Admin/Section/NoData";
import { useParams } from "react-router-dom";

const Purchase = (props) => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const handleSubNavClick = (item) => {
    setCurrentPage(item);
  };

  const { UserID } = useParams();
  const [OrderData, setOrderData] = useState([]);

  const getOrderData = () => {
    axios
      .get(`http://localhost/CSC264/RoomAPI/getOrderUser.php/${UserID}`)
      .then((response) => {
        setOrderData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getOrderData();
  }, []);

  const decideStatus = (status) => {
    if (status === 1) {
      return "Ordered";
    } else if (status === 2) {
      return "Shipped";
    } else if (status === 3) {
      return "Completed";
    } else if (status === 4) {
      return "Cancelled";
    }
  };

  let OrderedOrders = [];
  let shippedOrders = [];
  let completedOrders = [];
  let cancelledOrders = [];

  const determineOrdersType = () => {
    OrderedOrders = OrderData.filter(
      (item) => decideStatus(item.StatusID) === "Ordered"
    );
    shippedOrders = OrderData.filter(
      (item) => decideStatus(item.StatusID) === "Shipped"
    );
    completedOrders = OrderData.filter(
      (item) => decideStatus(item.StatusID) === "Completed"
    );
    cancelledOrders = OrderData.filter(
      (item) => decideStatus(item.StatusID) === "Cancelled"
    );
  };
  determineOrdersType();
  determineOrdersType();
  const handleUpdateChange = () => {
    getOrderData();
    determineOrdersType();
    getOrderData();
    determineOrdersType();
    window.dispatchEvent(
      new CustomEvent("showNotification", {
        detail: { message: "Order Cancelled", type: "success" }
      })
    );
  };

  return (
    <div className="Purchase" id="Purchase">
      <UserNav category="Purchase" onClick={handleSubNavClick} />
      <div className="Purchase-Container">
        {CurrentPage === 1 && (
          <div className="page">
            <div className="productCard-Container">
              {OrderData.length > 0 ? (
                OrderData.map((item) => (
                  <AdminOrd
                    key={item.OrderID}
                    status={decideStatus(item.StatusID)}
                    data={item}
                    OrderPage={true}
                    handleUpdateChange={handleUpdateChange}
                  />
                ))
              ) : (
                <NoData />
              )}
            </div>
          </div>
        )}
        {CurrentPage === 2 && (
          <div className="page">
            <div className="productCard-Container">
              {OrderedOrders.length > 0 ? (
                OrderedOrders.map((item) => (
                  <AdminOrd
                    key={item.id}
                    status={decideStatus(item.StatusID)}
                    handleUpdateChange={handleUpdateChange}
                    data={item}
                    OrderPage={true}      
                  />
                ))
              ) : (
                <NoData />
              )}
            </div>
          </div>
        )}
        {CurrentPage === 3 && (
          <div className="page">
            <div className="productCard-Container">
              {shippedOrders.length > 0 ? (
                shippedOrders.map((item) => (
                  <AdminOrd
                    key={item.id}
                    status={decideStatus(item.StatusID)}
                    data={item}
                    OrderPage={true}
                    handleUpdateChange={handleUpdateChange}
                  />
                ))
              ) : (
                <NoData />
              )}
            </div>
          </div>
        )}
        {CurrentPage === 4 && (
          <div className="page">
            <div className="productCard-Container">
              {completedOrders.length > 0 ? (
                completedOrders.map((item) => (
                  <AdminOrd
                    key={item.id}
                    status={decideStatus(item.StatusID)}
                    data={item}
                    OrderPage={true}
                    handleUpdateChange={handleUpdateChange}
                  />
                ))
              ) : (
                <NoData />
              )}
            </div>
          </div>
        )}
        {CurrentPage === 5 && (
          <div className="page">
            <div className="productCard-Container">
              {cancelledOrders.length > 0 ? (
                cancelledOrders.map((item) => (
                  <AdminOrd
                    key={item.id}
                    status={decideStatus(item.StatusID)}
                    data={item}
                    OrderPage={true}
                    handleUpdateChange={handleUpdateChange}
                  />
                ))
              ) : (
                <NoData />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchase;
