import React from "react";

const AboutCard = (props) => {
  return (
    <div className="AboutCard" id="AboutCard">
      <div className="About-Text">
        <h1>{props.title}</h1>
        <p>{props.details}</p>
      </div>
      <div className="About-Image">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

export default AboutCard;
