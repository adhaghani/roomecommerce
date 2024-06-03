import React from "react";

import Button from "../../../../Component/Button/Button";
import axios from "axios";

import "../../../User/Section/Purchase/UserProduct/ProductUser.css";
import { useParams } from "react-router-dom";
const AdminProd = (props) => {
  function deleteProduct(ProductID) {
    if (confirm("Are you sure you want to delete this Product?")) {
      axios
        .delete("http://localhost/CSC264/RoomAPI/DeleteProduct.php", {
          params: {
            ProductID
          }
        })
        .then((response) => {
          if (response.data.status == 0) {
            window.dispatchEvent(
              new CustomEvent("showNotification", {
                detail: {
                  message: "Unable to Delete Product",
                  type: "Error"
                }
              })
            );
          } else {
            props.onDelete();
            window.dispatchEvent(
              new CustomEvent("showNotification", {
                detail: { message: "Product Delete", type: "success" }
              })
            );
          }
        });
    }
  }

  const { AdminID } = useParams();

  return (
    <>
      {props.type !== "Order" && (
        <div className="Product" id="ProductPurchase">
          <div className="Product-Detail">
            <div className="Image">
              <img src={props.PicturePath} alt="" />
            </div>
            <div className="Product-Text">
              <div className="Product-Title">
                <div className="Product-Name">
                  <h3>
                    {props.Name} <span> | {props.ProductID}</span>
                  </h3>
                </div>
                <div className="Product-Status">
                  <p>Date Uploaded: {props.DateAdded}</p>
                </div>
              </div>
              <div className="Product-Quantity">
                <div className="Orders">
                  <p>
                    <span>Category ID:</span> {props.CategoryID}
                  </p>
                  <p>Stock : {props.ProductStock} Piece</p>
                </div>

                <div className="Total-Orders">
                  <h3>RM {props.Price}</h3>
                </div>
              </div>
              <div className="Product-Actions">
                <Button
                  title="view details"
                  value="View Details"
                  type="link"
                  link={`/Product/${AdminID}/${props.CategoryID}/${props.ProductID}`}
                  className="outline gray product"
                />
                <Button
                  title="Delete"
                  value="remove Product"
                  Name="ProductID"
                  type="delete"
                  className="outline gray product cancel"
                  onClick={() => deleteProduct(props.ProductID)}
                />
              </div>
            </div>
            <div className="Product-Button Mobile">
              <div className="Product-Actions">
                <Button
                  title="view details"
                  value="View Details"
                  type="link"
                  link={`/Product/${props.UserID}/${props.CategoryID}/${props.ProductID}`}
                  className="outline gray product"
                />
                <Button
                  title="Delete"
                  value={props.ProductID}
                  Name="ProductID"
                  type="delete"
                  className="outline gray product cancel"
                  onClick={() => deleteProduct(props.ProductID)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {props.type === "Order" && (
        <div className="Product Order" id="ProductPurchase">
          <div className="Product-Detail">
            <div className="Image">
              <img src={props.data.PicturePath} alt="" />
            </div>
            <div className="Product-Text">
              <div className="Product-Title">
                <div className="Product-Name">
                  <h3>
                    {props.data.Name} <span> | {props.data.ProductID}</span>
                  </h3>
                </div>
              </div>
              <div className="Product-Quantity">
                <div className="Orders">
                  <p>
                    <span>Category ID:</span> {props.data.CategoryID}
                  </p>
                  <p>Stock : {props.data.ProductStock} Piece</p>
                  <p>Quantity Ordered : {props.data.Quantity} Piece</p>
                </div>

                <div className="Total-Orders">
                  <h3>
                    RM {props.data.Price} x {props.data.Quantity} Pieces
                  </h3>
                  <h3>
                    Total : RM{" "}
                    {(props.data.Price * props.data.Quantity).toFixed(2)}
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

export default AdminProd;
