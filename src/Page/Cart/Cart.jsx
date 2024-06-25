import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Navigation from "../../Component/Navigation/Navigation";
import Footer from "../../Component/Footer/Footer";

import CheckoutCart from "./CheckoutCart/CheckoutCart";
import ProductCart from "./ProductCart/ProductCart";

import Button from "../../Component/Button/Button";
import NoData from "../Admin/Section/NoData";

import Notification from "../../Component/Notification/Notification";
import "./Cart.css";

import { getUserCart } from "../../Function/getUserCart";
import { getProductData } from "../../Function/getProductData";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [Cart, setCart] = useState([]);

  const { UserID } = useParams();

  // GET CART DATA

  const fetchUserCart = async () => {
    try {
      const data = await getUserCart(UserID);
      setCart(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductData = async () => {
    try {
      const productDetail = await Promise.all(
        Cart.map(async (item) => {
          const productData = await getProductData(item.ProductID);
          return productData;
        })
      );
      setProducts(productDetail);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCartUpdate = () => {
    getProductData();
    fetchUserCart();
  };

  // UPDATE CART QUANTITY
  const UpdateQuantity = (ProductID, Quantity) => {
    axios.post(`http://localhost/CSC264/RoomAPI/updateCart.php`, {
      UserID: UserID,
      ProductID: ProductID,
      Quantity: Quantity
    });
    handleCartUpdate();
  };

  // REMOVE FROM CART
  const RemoveFromCart = (UserID, ProductID) => {
    axios
      .delete(`http://localhost/CSC264/RoomAPI/DeleteCart.php`, {
        params: {
          UserID: UserID,
          ProductID: ProductID
        }
      })
      .then((response) => {
        handleCartUpdate();
      });
    window.dispatchEvent(
      new CustomEvent("showNotification", {
        detail: { message: "Product Removed to cart", type: "success" }
      })
    );
  };

  const calculateFee = (subtotal, percentage) => {
    let fee = 0;
    fee = subtotal * (percentage / 100);

    return fee;
  };

  const [subtotal, setSubtotal] = useState(0);

  // CALCULATE SUBTOTAL FOR EACH PRODUCT BY USING PRODUCT PRICE FROM WITH QUANTITY FROM CART LIKNED WITH PRODUCTID
  const calculateSubtotal = () => {
    let totalSubtotal = 0;
    fetchUserCart();
    products.forEach((products) => {
      const cartItem = Cart.find(
        (item) => item.ProductID === products.ProductID
      );
      if (cartItem) {
        totalSubtotal += products.Price * cartItem.Quantity;
      }
    });
    setSubtotal(totalSubtotal);
  };

  useEffect(() => {
    calculateSubtotal();
  }, [Cart]);

  const calculateTotalAmount = (subtotal, serviceFee1, serviceFee2) => {
    const serviceFeeAmount1 = subtotal * (serviceFee1 / 100);
    const serviceFeeAmount2 = subtotal * (serviceFee2 / 100);
    return subtotal + serviceFeeAmount1 + serviceFeeAmount2;
  };

  const totalAmount = calculateTotalAmount(subtotal, 6, 5);

  useEffect(() => {
    fetchProductData();
  }, [Cart]);
  useEffect(() => {
    fetchUserCart();
  }, []);

  // SESSION FUNCTION
  const navigate = useNavigate();

  useEffect(() => {
    const sessionData = getSession();
    if (!sessionData) {
      navigate("/NoSession");
    }
  }, [navigate]);

  return (
    <div className="Cart" id="Cart">
      <Navigation isOnHomePage={false} />
      <Notification />
      <div className="Cart-Container">
        <div className="Product-Container">
          {products.length > 0 ? (
            products.map((item) => (
              <ProductCart
                key={item.id}
                id={item.id}
                data={item}
                updateQuantity={UpdateQuantity}
                onRemoveFromCart={() => RemoveFromCart(UserID, item.ProductID)}
              />
            ))
          ) : (
            <NoData goShop={true} />
          )}
        </div>
        {products.length > 0 && (
          <div className="Checkout-Container">
            <div className="Card">
              <CheckoutCart Title="Sub Total " Amount={subtotal.toFixed(2)} />
              <CheckoutCart
                Title="SST (6%) "
                Amount={calculateFee(subtotal, 6).toFixed(2)}
              />
              <CheckoutCart
                Title="Service Fee (5%) "
                Amount={calculateFee(subtotal, 5).toFixed(2)}
              />
              <CheckoutCart
                Title="Total Amount "
                Amount={calculateTotalAmount(subtotal, 6, 5).toFixed(2)}
              />
            </div>
            <div className="Checkout-Button">
              <Button
                title="Login"
                type="formsubmit"
                link={`/Checkout/${UserID}/${totalAmount.toFixed(2)}`}
                className="fill primary long center"
                value="checkout"
                TotalAmount={calculateTotalAmount(subtotal, 6, 5).toFixed(2)}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
