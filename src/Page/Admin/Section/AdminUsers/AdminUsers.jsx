import React, { useEffect, useState } from "react";
import axios from "axios";

import UserNav from "../../../User/UserNavigation/UserNav";
import AdminUsr from "../List/AdminUsr";
import "../AdminSection.css";
import { useParams } from "react-router-dom";

const AdminUsers = (props) => {
  // GET CATEGORY
  const [UserList, setUserList] = useState([]);

  const { AdminID } = useParams();

  // get from server
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    axios
      .get("http://localhost/CSC264/RoomAPI/getUser.php")
      .then((response) => {
        setUserList(response.data);
      });
  }

  return (
    <div className="AdminUsers" id="AdminUsers">
      <UserNav category="AdminUsers" />
      <div className="admin-Container Users">
        <div className="Page">
          <div className="Page-Container">
            <div className="List-Container">
              {UserList.map((item) => (
                <AdminUsr key={item.id} item={item} AdminID={AdminID} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
