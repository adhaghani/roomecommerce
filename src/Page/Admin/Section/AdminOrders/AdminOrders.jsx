import React, { useEffect, useState } from "react";
import axios from "axios";

import UserNav from "../../../User/UserNavigation/UserNav";
import AdminOrd from "../List/AdminOrd";
import "../AdminSection.css";
import Order from "../../../User/Order/Order";
import Loading from "../../../Loading/Loading";
import NoData from "../NoData";

const AdminOrders = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const handleSubNavClick = (item) => {
    setCurrentPage(item);
  };

  const [OrderData, setOrderData] = useState([]);

  useEffect(() => {
    getOrderData();
  }, []);

  const getOrderData = () => {
    axios
      .get("http://localhost/CSC264/RoomAPI/getOrder.php")
      .then((response) => {
        setOrderData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    setUpdatedStatus(status);
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

  const handleUpdateChange = () => {
    getOrderData();
    getOrderData();
    determineOrdersType();
    determineOrdersType();
  };

  determineOrdersType();

  const [updatedStatus, setUpdatedStatus] = useState(null);

  return (
    <div className="AdminOrders" id="AdminOrder">
      {/* <Loading /> */}
      <UserNav category="AdminOrders" onClick={handleSubNavClick} />
      <div className="admin-Container Orders">
        {CurrentPage == 1 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                {OrderData.length > 0 ? (
                  OrderData.map((item) => (
                    <AdminOrd
                      key={item.id}
                      status={decideStatus(item.StatusID)}
                      data={item}
                      handleUpdateChange={handleUpdateChange}
                    />
                  ))
                ) : (
                  <NoData />
                )}
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 2 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                {OrderedOrders.length > 0 ? (
                  OrderedOrders.map((item) => (
                    <AdminOrd
                      key={item.id}
                      status={decideStatus(item.StatusID)}
                      handleUpdateChange={handleUpdateChange}
                      data={item}
                    />
                  ))
                ) : (
                  <NoData />
                )}
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 3 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                {shippedOrders.length > 0 ? (
                  shippedOrders.map((item) => (
                    <AdminOrd
                      key={item.id}
                      status={decideStatus(item.StatusID)}
                      data={item}
                      handleUpdateChange={handleUpdateChange}
                    />
                  ))
                ) : (
                  <NoData />
                )}
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 4 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                {completedOrders.length > 0 ? (
                  completedOrders.map((item) => (
                    <AdminOrd
                      key={item.id}
                      status={decideStatus(item.StatusID)}
                      data={item}
                      handleUpdateChange={handleUpdateChange}
                    />
                  ))
                ) : (
                  <NoData />
                )}
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 5 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                {cancelledOrders.length > 0 ? (
                  cancelledOrders.map((item) => (
                    <AdminOrd
                      key={item.id}
                      status={decideStatus(item.StatusID)}
                      data={item}
                      handleUpdateChange={handleUpdateChange}
                    />
                  ))
                ) : (
                  <NoData />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
