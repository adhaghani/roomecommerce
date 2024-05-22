import React from "react";

import "./Promotion.css";

import Button from "../Button/Button";
const Promotion = (props) => {
  return (
    <>
      {/* Large Promotion Banner */}
      {props.size === "large" && (
        <div className="Promotion Large">
          <div className="promotion-Card">
            <div className="container">
              <div className="promo-title">
                <p>{props.titleText}</p>
              </div>
              <div className="percent-off">
                <h2>{props.mainText}</h2>
              </div>
              {props.button && (
                <Button
                  title={props.button.title}
                  type={props.button.type}
                  className={props.button.className}
                  value={props.button.value}
                />
              )}
            </div>
          </div>
        </div>
      )}
      {/* 50/50 / Small Promotion Banner */}
      {props.size === "small" && (
        <div className="Promotion Small">
          <div className="promotion-Card">
            <div className="container">
              <div className="promo-title">
                <p>{props.promo1.titleText}</p>
              </div>
              <div className="percent-off">
                <h2>{props.promo1.mainText}</h2>
              </div>
              <Button
                title={props.promo1.button.title}
                type={props.promo1.button.type}
                className={props.promo1.button.className}
                value={props.promo1.button.value}
              />
            </div>
          </div>
          <div className="promotion-Card">
            <div className="container">
              <div className="promo-title">
                <p>{props.promo2.titleText}</p>
              </div>
              <div className="percent-off">
                <h2>{props.promo2.mainText}</h2>
              </div>
              <Button
                title={props.promo2.button.title}
                type={props.promo2.button.type}
                className={props.promo2.button.className}
                value={props.promo2.button.value}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Promotion;
