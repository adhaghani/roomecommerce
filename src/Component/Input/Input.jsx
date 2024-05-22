import React from "react";
import "./Input.css";

const Input = ({ formSize, inputProps, inputProps2, inputProps3 }) => {
  return (
    <div className={`form-container ${formSize}`}>
      <div className="Input">
        <label
          className={inputProps.className == "input error" ? "error" : ""}
          htmlFor=""
        >
          {inputProps.label}
        </label>
        <input {...inputProps} />
      </div>
      {formSize === "half" && inputProps2 && (
        <div className="Input">
          <label
            className={inputProps2.className == "input error" ? "error" : ""}
            htmlFor=""
          >
            {inputProps2.label}
          </label>
          <input {...inputProps2} />
        </div>
      )}
      {formSize === "half third" && (
        <>
          <div className="Input">
            <label
              className={inputProps2.className == "input error" ? "error" : ""}
              htmlFor=""
            >
              {inputProps2.label}
            </label>
            <input {...inputProps2} />
          </div>
          <div className="Input">
            <label
              className={inputProps3.className == "input error" ? "error" : ""}
              htmlFor=""
            >
              {inputProps3.label}
            </label>
            <input {...inputProps3} />
          </div>
        </>
      )}
    </div>
  );
};

export default Input;
