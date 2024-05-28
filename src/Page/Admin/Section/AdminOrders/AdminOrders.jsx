import React, { useEffect, useState } from "react";
import axios from "axios";

import UserNav from "../../../User/UserNavigation/UserNav";
import AdminOrd from "../List/AdminOrd";
import "../AdminSection.css";
import Order from "../../../User/Order/Order";

const AdminOrders = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const handleSubNavClick = (item) => {
    setCurrentPage(item);
  };

  const [OrderData, setOrderData] = useState([]);

  // TODO: GET ORDER FROM ORDERTABLE

  useEffect(() => {
    getOrderData();
  }, []);

  const getOrderData = () => {
    axios
      .get("http://localhost/CSC264/RoomAPI/getOrder.php")
      .then((response) => {
        console.log(response.data);
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
  };

  const OrderedOrders = OrderData.filter(
    (item) => decideStatus(item.StatusID) === "Ordered"
  );
  const shippedOrders = OrderData.filter(
    (item) => decideStatus(item.StatusID) === "Shipped"
  );
  const completedOrders = OrderData.filter(
    (item) => decideStatus(item.StatusID) === "Completed"
  );
  const cancelledOrders = OrderData.filter(
    (item) => decideStatus(item.StatusID) === "Cancelled"
  );

  // TODO: AT EACH ADMINORD, GET ORDERDETAILS, PRODUCTDETAILS

  return (
    <div className="AdminOrders" id="AdminOrder">
      <UserNav category="AdminOrders" onClick={handleSubNavClick} />
      <div className="admin-Container Orders">
        {CurrentPage == 1 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                {OrderData.map((item) => (
                  <AdminOrd
                    key={item.id}
                    status={decideStatus(item.StatusID)}
                    data={item}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 2 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                {OrderedOrders.map((item) => (
                  <AdminOrd
                    key={item.id}
                    status={decideStatus(item.StatusID)}
                    data={item}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 3 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                {shippedOrders.map((item) => (
                  <AdminOrd
                    key={item.id}
                    status={decideStatus(item.StatusID)}
                    data={item}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 4 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                {completedOrders.map((item) => (
                  <AdminOrd
                    key={item.id}
                    status={decideStatus(item.StatusID)}
                    data={item}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 5 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                {cancelledOrders.map((item) => (
                  <AdminOrd
                    key={item.id}
                    status={decideStatus(item.StatusID)}
                    data={item}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
