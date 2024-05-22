import React from "react";

import "./ProductUser.css";

import Button from "../../../../../Component/Button/Button";
import { Link } from "react-router-dom";
const ProductUserCard = (props) => {
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
        <Link
          to={`/Product/${props.UserID}/${props.CategoryID}/${props.ProductID}`}
          className="Product-Link"
        >
          <div className="Product" id="ProductPurchase">
            <div className="Product-Detail">
              <div className="Product-Image">
                <div className="Image"></div>
              </div>
              <div className="Product-Text">
                <div className="Product-Title">
                  <div className="Product-Name">
                    <h3>Product Name</h3>
                  </div>
                </div>
                <div className="Product-Quantity">
                  <div className="Orders">
                    <p>Product Category</p>
                  </div>
                  <div className="Total-Orders">
                    <h3>RM 500.00</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
      {props.OnOrder && (
        <div className="Product Order" id="ProductPurchase">
          <div className="Product-Detail">
            <div className="Product-Image">
              <div className="Image"></div>
            </div>
            <div className="Product-Text">
              <div className="Product-Title">
                <div className="Product-Name">
                  <h3>
                    Product Name <span>| PID055324</span>
                  </h3>
                </div>
              </div>
              <div className="Product-Quantity">
                <div className="Orders">
                  <p>RM 250.00/pcs</p>
                </div>
                <div className="Total-Orders">
                  <p>2 pcs</p>
                  <h3>RM 500.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.AdminPage && (
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
                <div className="Product-Status">
                  <p>Date Uploaded: 21 February 2023</p>
                </div>
              </div>
              <div className="Product-Quantity">
                <div className="Orders">
                  <p>
                    <span>Category ID:</span> CID2553142889
                  </p>
                  <p>Price Per Piece : RM2500.00</p>
                </div>

                <div className="Total-Orders">
                  <h3>RM 500.00</h3>
                </div>
              </div>
              <div className="Product-Actions">
                <Button
                  title="view details"
                  value="View Details"
                  type="link"
                  link={`/Product/${props.UserID}/${props.CategoryID}/${props.ProductID}`}
                  className="outline gray product"
                />
                <Button
                  title="Remove"
                  value="Remove"
                  type="Remove"
                  className="outline gray product cancel"
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
                  title="Remove"
                  value="Remove"
                  type="Remove"
                  className="outline gray product cancel"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductUserCard;
