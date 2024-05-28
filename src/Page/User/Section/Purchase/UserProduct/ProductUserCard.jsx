import React, { useEffect, useState } from "react";

import "./ProductUser.css";

import Button from "../../../../../Component/Button/Button";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const ProductUserCard = (props) => {
  const { UserID } = useParams();

  const [Categories, setCategories] = useState({
    Name: ""
  });

  useEffect(() => {
    getCategoryName();
  }, []);
  const getCategoryName = () => {
    if (props.data && props.data.CategoryID) {
      axios
        .get(
          `http://localhost/CSC264/RoomAPI/GetCategoryName.php/${props.data.CategoryID}`,
          {}
        )
        .then((response) => {
          setCategories(response.data);
        });
    }
  };

  const handleRemoveLike = () => {
    props.onRemoveClick();
  };

  return (
    <>
      {props.OrderPage && (
        <div className="Product" id="ProductPurchase">
          <div className="Product-Detail">
            <div className="Product-Image">
              <div className="Image"></div>
            </div>
            <div className="Product-Text">
              <div className="Product-Title">
                <div className="Product-Name">
                  <h3>
                    Product Name <span> | PID2550133</span>
                  </h3>
                </div>
                {
                  <div className="Product-Status">
                    {props.status === "Shipped" && (
                      <p className="blue">Shipped</p>
                    )}
                    {props.status === "Cancelled" && (
                      <p className="red">Cancelled</p>
                    )}
                    {props.status === "Ordered" && (
                      <p className="yellow">Ordered</p>
                    )}
                    {props.status === "Received" && (
                      <p className="green">Received</p>
                    )}
                  </div>
                }
              </div>
              <div className="Product-Quantity">
                <div className="Orders">
                  <p>
                    <span>2</span> pcs ordered
                  </p>
                  <p>RM 250.00/pcs</p>
                </div>

                <div className="Total-Orders">
                  <h3>RM 500.00</h3>
                </div>
              </div>
              <div className="Product-Actions">
                {props.status === "Shipped" && (
                  <Button
                    title="Receive Order"
                    value="Receive Order"
                    type="link"
                    link={`/Product/`}
                    className="fill primary product"
                  />
                )}
                <Button
                  title="view details"
                  value="View Details"
                  type="link"
                  link={`/Order/${props.UserID}/${props.OrderID}`}
                  className="outline gray product"
                />
                {props.status === "Ordered" && (
                  <Button
                    title="Cancel Order"
                    value="Cancel Order"
                    type="link"
                    link={`/Product/`}
                    className="outline gray product cancel"
                  />
                )}
              </div>
            </div>
            <div className="Product-Button Mobile">
              <div className="Product-Actions">
                {props.status === "Shipped" && (
                  <Button
                    title="Receive Order"
                    value="Receive Order"
                    type="link"
                    link={`/Product/`}
                    className="fill primary product"
                  />
                )}
                <Button
                  title="view details"
                  value="View Details"
                  type="link"
                  link={`/Order/${props.UserID}/${props.OrderID}`}
                  className="outline gray product"
                />
                {props.status === "Ordered" && (
                  <Button
                    title="Cancel Order"
                    value="Cancel Order"
                    type="link"
                    link={`/Product/`}
                    className="outline gray product cancel"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {props.isLiked && (
        <div className="Product" id="ProductPurchase">
          <div className="Product-Detail">
            <div className="Product-Image">
              <div className="Image">
                <Link
                  to={`/Product/${UserID}/${props.data.CategoryID}/${props.data.ProductID}`}
                  className="Product-Link"
                >
                  <img src={props.data.PicturePath} alt="" />
                </Link>
              </div>
            </div>
            <div className="Product-Text">
              <div className="Product-Title">
                <div className="Product-Name">
                  <h3>
                    {props.data.Name} <span> {props.data.ProductID}</span>
                  </h3>
                </div>
              </div>
              <div className="Product-Quantity">
                <div className="Orders">
                  <p>
                    {props.data.CategoryID} | {Categories.Name}
                  </p>
                  <p>Stocks: {props.data.ProductStock} items left</p>
                </div>
                <div className="Total-Orders">
                  <h3>RM {props.data.Price}</h3>
                </div>
              </div>
              <div className="Product-Actions">
                <Button
                  title="Goto"
                  value="View Product"
                  link={`/Product/${UserID}/${props.data.CategoryID}/${props.data.ProductID}`}
                  className="fill primary product"
                />

                <Button
                  title="Delete"
                  value="Remove Like"
                  type="delete"
                  className="outline gray product cancel"
                  onClick={handleRemoveLike}
                />
              </div>
            </div>
            <div className="Product-Button Mobile">
              <div className="Product-Actions">
                <Button
                  title="Goto"
                  value="View Product"
                  link={`/Product/${UserID}/${props.data.CategoryID}/${props.data.ProductID}`}
                  className="fill primary product"
                />
                <Button
                  title="Delete"
                  value="Unlike"
                  type="delete"
                  className="outline gray product cancel"
                  onClick={() => removeLike(UserID, props.data.ProductID)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {props.OnOrder && (
        <div className="Product Order" id="ProductPurchase">
          <div className="Product-Detail">
            <div className="Product-Image">
              <div className="Image">
                <img src={props.data.PicturePath} alt="" />
              </div>
            </div>
            <div className="Product-Text">
              <div className="Product-Title">
                <div className="Product-Name">
                  <h3>
                    {props.data.Name} <span>| {props.data.ProductID}</span>
                  </h3>
                </div>
              </div>
              <div className="Product-Quantity">
                <div className="Orders">
                  <p>RM {props.data.Price} per Piece</p>
                </div>
                <div className="Total-Orders">
                  <p>{props.data.Quantity} Pieces</p>
                  <h3>
                    RM {(props.data.Price * props.data.Quantity).toFixed(2)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductUserCard;
