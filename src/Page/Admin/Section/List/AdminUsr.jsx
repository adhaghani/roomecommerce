import React from "react";

import "./List.css";

import Button from "../../../../Component/Button/Button";

const AdminUsr = (props) => {
  return (
    <div className="userList" id="userList">
      <div className="Profile-Details">
        <div className="User-ID">
          <span className="title">User ID:</span>
          <span>UID12312412</span>
        </div>
        <div className="Full-Name">
          <span className="title">Full Name:</span>
          <span>Ahmad Adha bin Mohd Ghani</span>
        </div>
        <div className="UserName">
          <span className="title">UserName:</span>
          <span>Mossad</span>
        </div>
      </div>
      <div className="View-Detail">
        <Button
          title="View Detail"
          value="View Detail"
          type="link"
          link={`/Admin/UserDetails/${props.AdminID}/${props.UserID}/`}
          className="outline gray"
        />
      </div>
    </div>
  );
};

export default AdminUsr;
