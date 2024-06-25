import React from "react";

import "./Title.css";
const Title = (props) => {
  return (
    <div className="Title" id="Title">
      <h1 className="Title">{props.Title}</h1>
      <p className="Subtitle">{props.SubTitle}</p>
    </div>
  );
};

export default Title;
