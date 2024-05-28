import React from "react";

import "./List.css";

import Button from "../../../../Component/Button/Button";
const AdminOrd = (props) => {
  return (
    <div className="orderList" id="orderList">
      <div className="Product-Detail">
        <div className="Product-Image">
          <div className="Image"></div>
        </div>
        <div className="Product-Text">
          <div className="Product-Title">
            <div className="Product-Name">
              <h3>
                {props.data.OrderID} | {props.data.UserID}
              </h3>
            </div>
            {
              <div className="Product-Status">
                {props.status === "Shipped" && <p className="blue">Shipped</p>}
                {props.status === "Cancelled" && (
                  <p className="red">Cancelled</p>
                )}
                {props.status === "Ordered" && (
                  <p className="yellow">Pending</p>
                )}
                {props.status === "Completed" && (
                  <p className="green">Delivered</p>
                )}
              </div>
            }
          </div>
          <div className="Product-Quantity">
            <div className="Orders">
              <p>Date Ordered : {props.data.OrderDate}</p>
              <p>Payment Method : {props.data.PaymentMethod}</p>
            </div>
            <div className="Total-Orders">
              <h3>RM {props.data.TotalPrice}</h3>
            </div>
          </div>
          <div className="Product-Actions">
            <Button
              title="View Detail"
              value="View Detail"
              type="link"
              link={`/Order/${props.data.UserID}/${props.data.OrderID}`}
              className="outline gray product"
            />
            {props.status === "Shipped" && (
              <Button
                title="Deliver Order"
                value="Deliver Order"
                type="link"
                link={`/Product/`}
                className="outline gray product"
              />
            )}
            {props.status === "Ordered" && (
              <Button
                title="Ship Order"
                value="Ship Order"
                link={`/Product/`}
                className="outline gray product"
              />
            )}
            {props.status === "Completed" && (
              <Button
                title="Delete"
                value="Delete"
                type="Delete"
                className="outline gray product cancel"
              />
            )}
            {props.status === "Cancelled" && (
              <Button
                title="Delete"
                value="Delete"
                type="Delete"
                className="outline gray product cancel"
              />
            )}
          </div>
        </div>
        <div className="Product-Button Mobile">
          <div className="Product-Actions">
            {props.status === "Shipped" && (
              <Button
                title="Deliver Order"
                value="Deliver Order"
                type="link"
                link={`/Product/`}
                className="outline gray product"
              />
            )}
            {props.status === "Ordered" && (
              <Button
                title="Ship Order"
                value="Ship Order"
                type="link"
                link={`/Product/`}
                className="outline gray product"
              />
            )}
            {props.status === "Completed" && (
              <Button
                title="Ship Order"
                value="Ship Order"
                type="link"
                link={`/Product/`}
                className="outline gray product"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrd;
