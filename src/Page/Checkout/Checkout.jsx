import React, { useState } from "react";

import "./Checkout.css";
import Navigation from "../../Component/Navigation/Navigation";
import Footer from "../../Component/Footer/Footer";

import Input from "../../Component/Input/Input";
import Button from "../../Component/Button/Button";

import CheckoutCart from "../Cart/CheckoutCart/CheckoutCart";
const Checkout = () => {
  const [Inputs, setInputs] = useState({});

  const [IsUsingCard, setIsUsingCard] = useState(false);

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setIsUsingCard(selectedOption === "Card");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(Inputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Inputs);
  };

  return (
    <div className="Checkout" id="Checkout">
      <Navigation isOnHomePage={false} />
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
              onChange: handleChange
            }}
            inputProps2={{
              type: "text",
              name: "LastName",
              id: "LastName",
              label: "Last Name",
              placeholder: "Last Name",
              className: "input",
              onChange: handleChange
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
              onChange: handleChange
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
              onChange: handleChange
            }}
          />
          <Input
            formSize="half"
            inputProps={{
              type: "text",
              name: "Postcode",
              id: "Postcode",
              label: "Postcode",
              placeholder: "Postcode",
              className: "input",
              onChange: handleChange
            }}
            inputProps2={{
              type: "text",
              name: "City",
              id: "City",
              label: "City",
              placeholder: "City",
              className: "input",
              onChange: handleChange
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
              onChange: handleChange
            }}
          />
          <Input
            formSize="full"
            inputProps={{
              type: "text",
              name: "Phone",
              id: "Phone",
              label: "Phone Number",
              placeholder: "Phone",
              className: "input",
              onChange: handleChange
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
        <div className="Checkout-Section">
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
                  className: "input",
                  onChange: handleChange
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
                  className: "input",
                  onChange: handleChange
                }}
                inputProps2={{
                  type: "text",
                  name: "Year",
                  id: "Year",
                  label: "Year",
                  placeholder: "Year",
                  className: "input",
                  onChange: handleChange
                }}
                inputProps3={{
                  type: "text",
                  name: "SCC",
                  id: "SCC",
                  label: "SCC",
                  placeholder: "SCC",
                  className: "input",
                  onChange: handleChange
                }}
              />
            </div>
          )}
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
                link="/Checkout"
                className="fill primary long center"
                value="Checkout"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
