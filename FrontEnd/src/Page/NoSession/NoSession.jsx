import React from "react";

import "./NoSession.css";
import NoData from "../Admin/Section/NoData";
const NoSession = () => {
  return (
    <div className="NoSession">
      <NoData NoSession={true} />
    </div>
  );
};

export default NoSession;
