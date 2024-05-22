import React from "react";
import { Link } from "react-router-dom";

const IconButton = ({ icon: Icon, link }) => {
  return (
    <Link to={link}>
      <Icon />
    </Link>
  );
};

export default IconButton;
