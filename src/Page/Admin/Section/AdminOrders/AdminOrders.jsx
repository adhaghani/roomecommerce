import React, { useState } from "react";
import UserNav from "../../../User/UserNavigation/UserNav";
import AdminOrd from "../List/AdminOrd";
import "../AdminSection.css";
const AdminOrders = () => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const handleSubNavClick = (item) => {
    setCurrentPage(item);
  };
  return (
    <div className="AdminOrders" id="AdminOrder">
      <UserNav category="AdminOrders" onClick={handleSubNavClick} />
      <div className="admin-Container Orders">
        {CurrentPage == 1 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                <AdminOrd status="Ordered" />
                <AdminOrd status="Ordered" />
                <AdminOrd status="Ordered" />
                <AdminOrd status="Shipped" />
                <AdminOrd status="Shipped" />
                <AdminOrd status="Shipped" />
                <AdminOrd status="Completed" />
                <AdminOrd status="Completed" />
                <AdminOrd status="Completed" />
                <AdminOrd status="Cancelled" />
                <AdminOrd status="Cancelled" />
                <AdminOrd status="Cancelled" />
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 2 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                <AdminOrd status="Ordered" />
                <AdminOrd status="Ordered" />
                <AdminOrd status="Ordered" /> 
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 3 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                <AdminOrd status="Shipped" />
                <AdminOrd status="Shipped" />
                <AdminOrd status="Shipped" />
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 4 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                <AdminOrd status="Completed" />
                <AdminOrd status="Completed" />
                <AdminOrd status="Completed" />
              </div>
            </div>
          </div>
        )}
        {CurrentPage == 5 && (
          <div className="Page">
            <div className="Page-Container">
              <div className="List-Container">
                <AdminOrd status="Cancelled" />
                <AdminOrd status="Cancelled" />
                <AdminOrd status="Cancelled" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
