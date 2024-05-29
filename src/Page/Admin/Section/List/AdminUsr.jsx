import React from "react";

import "./List.css";

import Button from "../../../../Component/Button/Button";
import { useParams } from "react-router-dom";

const AdminUsr = (props) => {
  const { AdminID } = useParams();

  console.log(AdminID);
  return (
    <div className="userList" id="userList">
      <div className="Profile-Details">
        <div className="User-ID">
          <span className="title">User ID:</span>
          <span>{props.item.UserID}</span>
        </div>
        <div className="Full-Name">
          <span className="title">Full Name:</span>
          <span>{props.item.firstName + " " + props.item.lastName}</span>
        </div>
        <div className="UserName">
          <span className="title">UserName:</span>
          <span>{props.item.Username}</span>
        </div>
      </div>
      <div className="View-Detail">
        <Button
          title="View Detail"
          value="View Detail"
          type="link"
          link={`/Admin/UserDetails/${AdminID}/${props.item.UserID}/`}
          className="outline gray product"
        />
      </div>
    </div>
  );
};

export default AdminUsr;
