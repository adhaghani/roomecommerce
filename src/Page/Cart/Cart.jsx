import React, { useEffect, useState } from "react";
import Navigation from "../../Component/Navigation/Navigation";
import Footer from "../../Component/Footer/Footer";

import CheckoutCart from "./CheckoutCart/CheckoutCart";
import ProductCart from "./ProductCart/ProductCart";

import Promotion from "../../Component/Promotion/Promotion";

import Button from "../../Component/Button/Button";

import "./Cart.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
const Cart = (props) => {
  const [products, setProducts] = useState([]);
  const [Cart, setCart] = useState([]);

  const { UserID } = useParams();

  const getCartData = () => {
    axios
      .get(`http://localhost/CSC264/RoomAPI/getCart.php/${UserID}`)
      .then((response) => {
        setCart(response.data);
      });
  };

  useEffect(() => {
    getCartData();
  }, []);

  const getProductData = async () => {
    const productDetail = await Promise.all(
      Cart.map(async (item) => {
        const response = await axios.get(
          `http://localhost/CSC264/RoomAPI/getProductDetail.php/${item.ProductID}`
        );
        return response.data;
      })
    );
    setProducts(productDetail);
  };

  useEffect(() => {
    getProductData();
  }, [Cart]);

  return (
    <div className="Cart" id="Cart">
      <Navigation isOnHomePage={false} />

      <div className="Cart-Container">
        <div className="Product-Container">
          {products.map((item) => (
            <ProductCart key={item.id} id={item.id} data={item} />
          ))}
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
