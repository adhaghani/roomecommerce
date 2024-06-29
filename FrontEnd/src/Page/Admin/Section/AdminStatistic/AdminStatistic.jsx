import React, { useState } from "react";

import UserNav from "../../../User/UserNavigation/UserNav";
import AdminSta from "../List/AdminSta";
import "../AdminSection.css";

const AdminStatistic = () => {
  return (
    <div className="AdminStatistic" id="AdminStatistic">
      <div className="admin-Container Statistic">
        <div className="Page">
          <div className="Page-Container">
            <div className="List-Container">
              <AdminSta />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStatistic;
