import React, { useState } from "react";

import UserNav from "../../../User/UserNavigation/UserNav";
import AdminUsr from "../List/AdminUsr";
import "../AdminSection.css";
const AdminUsers = () => {
  return (
    <div className="AdminUsers" id="AdminUsers">
      <UserNav category="AdminUsers" />
      <div className="admin-Container Users">
        <div className="Page">
          <div className="Page-Container">
            <div className="List-Container">
              <AdminUsr />
              <AdminUsr />
              <AdminUsr />
              <AdminUsr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
