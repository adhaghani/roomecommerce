import React, { useState } from "react";

import "./Select.css";

const Select = (props) => {
  return (
    <>
      {props.selectAdmin == "Category" && (
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
                data-img_src={item.PicturePath}
              >
                <div className="test">Test Test</div>
                {item.Name}
              </option>
            ))}
          </select>
        </div>
      )}
      {props.selectAdmin == "Product" && (
        <div className="Select-Container">
          <label htmlFor="">{props.defaultValue}</label>
          <select
            onChange={props.onChange}
            name="ProductID"
            id={props.id}
            className="Select"
          >
            <option className="Option" value="0">
              {props.defaultValue}
            </option>
            {props.Category.map((item) => (
              <option
                className="Option"
                key={item.ProductID}
                value={item.ProductID}
                name="ProductID"
                id="ProductID"
              >
                <img src={item.PicturePath} alt={item.Name} />
                {item.Name}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default Select;
