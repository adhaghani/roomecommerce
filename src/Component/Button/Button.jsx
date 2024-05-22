import React from "react";

import "./Button.css";
import { Link } from "react-router-dom";
const Button = (props) => {
  if (props.link == null && props.type == "formsubmit") {
    return (
      <input
        className={"layout " + props.className}
        onClick={props.onClick}
        type="submit"
        value={props.value}
      />
    );
  } else if (props.link != null) {
    return (
      <Link
        to={props.link}
        className={"layout " + props.className}
        onClick={props.onClick}
      >
        {props.value}
      </Link>
    );
  } else if (props.type == "delete") {
    return (
      <button
        name={props.name}
        className={"layout " + props.className}
        onClick={props.onClick}
      >
        Delete
      </button>
    );
  } else {
    return (
      <button className={"layout " + props.className} onClick={props.onClick}>
        {props.type}
      </button>
    );
  }
};

export default Button;
