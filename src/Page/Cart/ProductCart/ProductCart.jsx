import React, { useEffect, useState } from "react";

import Button from "../../../Component/Button/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductCart = (props) => {
  const [Amount, setAmount] = useState(1);

  const addAmount = () => {
    setAmount(Amount + 1);
    UpdateQuantity(Amount + 1);
  };

  const subAmount = () => {
    if (Amount === 1) return;
    setAmount(Amount - 1);
    UpdateQuantity(Amount - 1);
  };

  const { UserID } = useParams();

  const UpdateQuantity = (Quantity) => {
    axios.post(`http://localhost/CSC264/RoomAPI/updateCart.php`, {
      UserID: UserID,
      ProductID: props.data.ProductID,
      Quantity: Quantity
    });
  };

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

  const RemoveFromCart = (UserID, ProductID) => {
    axios
      .delete(`http://localhost/CSC264/RoomAPI/DeleteCart.php`, {
        params: {
          UserID: UserID,
          ProductID: ProductID
        }
      })
      .then((response) => {
        window.location.reload();
        console.log(response.data);
      });
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
            </div>
            <div className="Product-ID"></div>
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
              <input type="number" value={Amount} />
              <button onClick={addAmount}>+</button>
            </div>
          </div>
        </div>
        <div className="Cancel">
          <button onClick={() => RemoveFromCart(UserID, props.data.ProductID)}>
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
        <button
          button
          onClick={() => RemoveFromCart(UserID, props.data.ProductID)}
        >
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
