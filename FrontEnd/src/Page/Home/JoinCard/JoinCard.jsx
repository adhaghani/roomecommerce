import React from "react";

import "./JoinCard.css";
import { Link } from "react-router-dom";

const JoinCard = () => {
  return (
    <div className="section">
      <div className="JoinCard" id="JoinCard">
        <div className="Text">
          <h2>Join Now</h2>
          <p>Setup an account and start buying!</p>
          <Link to="/Login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
