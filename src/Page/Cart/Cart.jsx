import React from "react";
import Navigation from "../../Component/Navigation/Navigation";
import Footer from "../../Component/Footer/Footer";

import CheckoutCart from "./CheckoutCart/CheckoutCart";
import ProductCart from "./ProductCart/ProductCart";

import Promotion from "../../Component/Promotion/Promotion";

import Button from "../../Component/Button/Button";

import "./Cart.css";
const Cart = (props) => {
  return (
    <div className="Cart" id="Cart">
      <Navigation isOnHomePage={false} />

      <div className="Cart-Container">
        <div className="Product-Container">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        <div className="Checkout-Container">
          <div className="Card">
            <CheckoutCart Title="Sub Total " Amount="90.00" />
            <CheckoutCart Title="SST (10%) " Amount="9.00" />
            <CheckoutCart Title="Service Fee (10%) " Amount="9.00" />
            <CheckoutCart Title="Total Amount " Amount="108.00" />
          </div>
          <div className="Checkout-Button">
            <Button
              title="Login"
              type="formsubmit"
              link={`/Checkout/${props.id}`}
              className="fill primary long center"
              value="Checkout"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
