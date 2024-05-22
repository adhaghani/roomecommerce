import React, { useState } from "react";

import UserNav from "../../../User/UserNavigation/UserNav";
import AdminSta from "../List/AdminSta";
import "../AdminSection.css";
const AdminStatistic = () => {
  return (
    <div className="AdminStatistic" id="AdminStatistic">
      <UserNav category="AdminStatistic" />
      <div className="admin-Container">
        <div className="Page">All</div>
      </div>
    </div>
  );
};

export default AdminStatistic;
