import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./Checkout.css";
import Navigation from "../../Component/Navigation/Navigation";
import Footer from "../../Component/Footer/Footer";

import Input from "../../Component/Input/Input";
import Button from "../../Component/Button/Button";

import CheckoutCart from "../Cart/CheckoutCart/CheckoutCart";

const Checkout = () => {
  const [IsUsingCard, setIsUsingCard] = useState(false);
  const handleInput = (field, value) => {
    setOrderData((prevOrderData) => ({
      ...prevOrderData,
      orderRecipient: {
        ...prevOrderData.orderRecipient,
        [field]: value
      }
    }));
    console.log(OrderData);
  };
  const handleSelectChange = (event) => {
    const selectedPaymentMethod = event.target.value;
    setNewOrder((prevOrderData) => ({
      ...prevOrderData,
      PaymentMethod: selectedPaymentMethod
    }));
    if (selectedPaymentMethod === "Card") {
      setIsUsingCard(true);
    } else {
      setIsUsingCard(false);
    }
    console.log(NewOrder);
  };

  const { UserID, TotalAmount } = useParams();
  const TotalPrice = TotalAmount;

  const [NewOrder, setNewOrder] = useState({
    UserID: UserID,
    TotalPrice: TotalPrice,
    PaymentMethod: "",
    StatusID: 1
  });

  const [OrderData, setOrderData] = useState({
    // fName,Lname,aL1,aL2,postcode,City,Country,TelNo
    orderRecipient: {
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      AddressLine1: "",
      AddressLine2: "",
      PostCode: "",
      City: "",
      Country: ""
    },
    // Products ID, OrderID, Quantity
    orderDetail: []
  });

  // GET CART DATA
  const getCartData = () => {
    axios
      .get(`http://localhost/CSC264/RoomAPI/getCartProductID.php/${UserID}`)
      .then((response) => {
        const cartData = response.data;
        const orderDetail = cartData.map((item) => ({
          ProductID: item.ProductID,
          Quantity: item.Quantity
        }));

        // Update the OrderData state with the orderDetail array
        setOrderData((prevOrderData) => ({
          ...prevOrderData,
          orderDetail
        }));
      });
  };
  useEffect(() => {
    getCartData();
  }, []);

  // CREATE ORDER FUNCTION

  const PostOrder = (event) => {
    fetch("http://localhost/CSC264/RoomAPI/PostOrder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(NewOrder)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
      });
  };
  const PostOrderDetails = (event) => {
    fetch("http://localhost/CSC264/RoomAPI/PostOrderDetails.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(OrderData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    PostOrder();
    setTimeout(() => {
      clearCart(UserID);
      subtractProductStock();
      PostOrderDetails();
      navigate(`/User/${UserID}`);
    }, 50);
  };

  const subtractProductStock = async () => {
    const productStocks = {};

    for (const item of OrderData.orderDetail) {
      const response = await axios.get(
        `http://localhost/CSC264/RoomAPI/getProductStock.php/${item.ProductID}`
      );
      const productStock = response.data.ProductStock;
      productStocks[item.ProductID] = productStock;
    }
    for (const item of OrderData.orderDetail) {
      const productStock = productStocks[item.ProductID];
      const newStock = productStock - item.Quantity;
      await axios.post(
        `http://localhost/CSC264/RoomAPI/UpdateProductStock.php`,
        {
          ProductID: item.ProductID,
          ProductStock: newStock
        }
      );
    }
  };

  const clearCart = async (UserID) => {
    const response = await axios.get(
      `http://localhost/CSC264/RoomAPI/getCart.php/${UserID}`
    );
    const cartItems = response.data;

    for (const item of cartItems) {
      const productID = item.ProductID;

      await axios.delete(`http://localhost/CSC264/RoomAPI/DeleteCart.php`, {
        params: {
          UserID: UserID,
          ProductID: productID
        }
      });
    }
  };

  return (
    <div className="Checkout" id="Checkout">
      <Navigation isOnHomePage={false} />
      <form action="POST" onSubmit={handleSubmit}>
        <div className="Container-Checkout">
          <div className="Checkout-Section">
            <div className="Title-Container">
              <div className="Title">
                <h1>Billing Details</h1>
              </div>
              <div className="title-detail">
                <p>Fill out the details to complete purchase</p>
              </div>
            </div>

            <Input
              formSize="half"
              inputProps={{
                type: "text",
                name: "firstName",
                id: "firstName",
                label: "First Name",
                placeholder: "First Name",
                className: "input",
                value: OrderData.orderRecipient.FirstName,
                onChange: (event) => {
                  handleInput("FirstName", event.target.value);
                }
              }}
              inputProps2={{
                type: "text",
                name: "LastName",
                id: "LastName",
                label: "Last Name",
                placeholder: "Last Name",
                className: "input",
                value: OrderData.orderRecipient.LastName,
                onChange: (event) => {
                  handleInput("LastName", event.target.value);
                }
              }}
            />
            <Input
              formSize="full"
              inputProps={{
                type: "text",
                name: "Address Line 1",
                id: "Address Line 1",
                label: "Address Line 1",
                placeholder: "Address Line 1",
                className: "input",
                value: OrderData.orderRecipient.AddressLine1,
                onChange: (event) => {
                  handleInput("AddressLine1", event.target.value);
                }
              }}
            />
            <Input
              formSize="full"
              inputProps={{
                type: "text",
                name: "Address Line 2",
                id: "Address Line 2",
                label: "Address Line 2",
                placeholder: "Address Line 2  ",
                className: "input",
                value: OrderData.orderRecipient.AddressLine2,
                onChange: (event) => {
                  handleInput("AddressLine2", event.target.value);
                }
              }}
            />
            <Input
              formSize="half"
              inputProps={{
                type: "text",
                name: "PostCode",
                id: "PostCode",
                label: "PostCode",
                placeholder: "PostCode",
                className: "input",
                value: OrderData.orderRecipient.PostCode,
                onChange: (event) => {
                  handleInput("PostCode", event.target.value);
                }
              }}
              inputProps2={{
                type: "text",
                name: "City",
                id: "City",
                label: "City",
                placeholder: "City",
                className: "input",
                value: OrderData.orderRecipient.City,
                onChange: (event) => {
                  handleInput("City", event.target.value);
                }
              }}
            />
            <Input
              formSize="full"
              inputProps={{
                type: "text",
                name: "Country",
                id: "Country",
                label: "Country",
                placeholder: "Country",
                className: "input",
                value: OrderData.orderRecipient.Country,
                onChange: (event) => {
                  handleInput("Country", event.target.value);
                }
              }}
            />
            <Input
              formSize="full"
              inputProps={{
                type: "text",
                name: "PhoneNumber",
                id: "PhoneNumber",
                label: "Phone Number",
                placeholder: "Phone",
                className: "input",
                value: OrderData.orderRecipient.PhoneNumber,
                onChange: (event) => {
                  handleInput("PhoneNumber", event.target.value);
                }
              }}
            />
            <div className="custom-select">
              <select
                className="PaymentMethod"
                name="PaymentMethod"
                id="PaymentMethod"
                onChange={handleSelectChange}
              >
                <option value="">Choose Payment Method</option>
                <option value="Cash">Cash on Delivery</option>
                <option value="Card">Credit/Debit Card</option>
              </select>
            </div>
          </div>
          <div
            className={
              IsUsingCard ? "Checkout-Section two Card" : "Checkout-Section two"
            }
          >
            {IsUsingCard && (
              <div className="Card-Section">
                <div className="Title-Container">
                  <div className="Title">
                    <h1>Card Information</h1>
                  </div>
                  <div className="title-detail">
                    <p>Provide your card information before proceed.</p>
                  </div>
                </div>
                <Input
                  formSize="full"
                  inputProps={{
                    type: "text",
                    name: "cc-number",
                    id: "cc-number",
                    label: "Card Number",
                    placeholder: "Card Number",
                    className: "input"
                  }}
                />
                <Input
                  formSize="half third"
                  inputProps={{
                    type: "text",
                    name: "Month",
                    id: "Month",
                    label: "Month",
                    placeholder: "Month",
                    className: "input"
                  }}
                  inputProps2={{
                    type: "text",
                    name: "Year",
                    id: "Year",
                    label: "Year",
                    placeholder: "Year",
                    className: "input"
                  }}
                  inputProps3={{
                    type: "text",
                    name: "SCC",
                    id: "SCC",
                    label: "SCC",
                    placeholder: "SCC",
                    className: "input"
                  }}
                />
              </div>
            )}
            <div className="Checkout-Container">
              <div className="Card">
                <CheckoutCart Title="Total Amount " Amount={TotalPrice} />
              </div>
              <div className="Checkout-Button">
                <Button
                  title="Login"
                  type="formsubmit"
                  className="fill primary long center"
                  value="Checkout"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Checkout;
