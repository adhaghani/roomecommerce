import React, { useState } from "react";

import "./Select.css";
const Select = (props) => {
  return (
    <div className="Select-Container">
      <label htmlFor="">{props.defaultValue}</label>
      <select
        onChange={props.onChange}
        name="CategoryID"
        id={props.id}
        className="Select"
      >
        <option className="Option" value="0">
          {props.defaultValue}
        </option>
        {props.Category.map((item) => (
          <option
            className="Option"
            key={item.CategoryID}
            value={item.CategoryID}
            name="CategoryID"
            id="CategoryID"
          >
            {item.Name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
