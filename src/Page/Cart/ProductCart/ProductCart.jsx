import React, { useEffect, useState } from "react";

import Button from "../../../Component/Button/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductCart = (props) => {
  const [Amount, setAmount] = useState(10);

  const addAmount = () => {
    if (Amount + 1 > props.data.ProductStock) {
      return;
    }
    setAmount(Amount + 1);
    props.updateQuantity(props.data.ProductID, Amount + 1);
  };

  const subAmount = () => {
    if (Amount === 1) return;
    setAmount(Amount - 1);
    props.updateQuantity(props.data.ProductID, Amount - 1);
  };

  const { UserID } = useParams();

  const getCartData = () => {
    axios
      .get(
        `http://localhost/CSC264/RoomAPI/getCart.php/${UserID}/${props.data.ProductID}`
      )
      .then((response) => {
        setAmount(response.data.Quantity);
      });
  };

  useEffect(() => {
    getCartData();
  }, []);

  const handleRemoveFromCart = () => {
    props.onRemoveFromCart();
  };

  return (
    <div className="ProductCart" id="ProductCart">
      <div className="Product-Details">
        <div className="Details">
          <div className="Product-Image">
            <img src={props.data.PicturePath} alt="" />
          </div>
          <div className="Product-Information">
            <div className="Product-Name">
              <h3>
                {props.data.Name} <span>{props.data.ProductID}</span>
              </h3>
              <p></p>
            </div>
            <div className="Product-ID">
              <p>{props.data.ProductStock} pieces Left</p>
            </div>
            <div className="Product-Price">
              <p>
                Price per Piece: RM<span>{props.data.Price}</span>
              </p>
            </div>

            <Button
              title="view details"
              value="View Details"
              type="link"
              link={`/Product/${UserID}/${props.data.CategoryID}/${props.data.ProductID}`}
              className="outline gray product"
            />
            <div className="Quantity">
              <button onClick={subAmount}>-</button>
              <div className="value">{Amount}</div>
              <button onClick={addAmount}>+</button>
            </div>
          </div>
        </div>
        <div className="Cancel" onClick={handleRemoveFromCart}>
          <button>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="Product-SubTotal">
        <h4>
          <span className="title">Quantity :</span>
          <span className="content">
            {Amount}
            <span className="Piece"> Pcs</span> x{" "}
            <span className="currency">RM</span>
            {props.data.Price}
          </span>
        </h4>
        <h4>
          <span className="title">subtotal :</span>
          <span className="content">
            <span className="currency">RM </span>
            {(Amount * props.data.Price).toFixed(2)}
          </span>
        </h4>
      </div>
      <div className="Cancel Part">
        <button onClick={handleRemoveFromCart}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
