import React from "react";

import "../Cart.css";

const CheckoutCart = (props) => {
  return (
    <div className="Checkout-Card">
      <div className="Title">
        <p>{props.Title}</p>
      </div>
      <div className="Seperator">
        <p>:</p>
      </div>
      <div className="Sub-Total">
        <h3>RM {props.Amount}</h3>
      </div>
    </div>
  );
};

export default CheckoutCart;
