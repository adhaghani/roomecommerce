import React, { useEffect, useState } from "react";

import "./List.css";

import Button from "../../../../Component/Button/Button";
import Loading from "../../../Loading/Loading";

import AdminProd from "./AdminProd";
import { useParams } from "react-router-dom";
import axios from "axios";
const AdminOrd = (props) => {
  const [Products, setProducts] = useState([]);
  const [ProductsDetail, setProductsDetail] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    getProductDetails();
  }, [Products]);

  const getProductData = () => {
    fetch(
      `http://localhost/CSC264/RoomAPI/getOrderDetail.php/${props.data.OrderID}`
    ).then((response) => {
      response.json().then((data) => {
        setProducts(data);
      });
    });
  };

  const getProductDetails = async () => {
    try {
      const promises = Products.map(async (product) => {
        const productDetail = await getProductDetail(product.ProductID);
        return { ...productDetail, Quantity: product.Quantity };
      });
      const results = await Promise.all(promises);
      setProductsDetail(results);
    } catch (error) {
      console.error(error);
    }
  };
  const getProductDetail = (ProductID) => {
    return fetch(
      `http://localhost/CSC264/RoomAPI/getProductDetail.php/${ProductID}`
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  const [ShowProduct, setShowProduct] = useState(false);

  const handleShowProduct = () => {
    setShowProduct(!ShowProduct);
  };

  const { AdminID } = useParams();

  const [UpdateOrder, setUpdateOrder] = useState({
    StatusID: props.data.StatusID,
    OrderID: props.data.OrderID,
    UserID: props.data.UserID
  });

  const handleOrderUpdate = () => {
    setIsLoading(true);
    if (UpdateOrder.StatusID === 1) {
      UpdateOrder.StatusID = 2;
      updateOrder();
      props.handleUpdateChange();
      props.handleUpdateChange();
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    } else if (UpdateOrder.StatusID === 2) {
      UpdateOrder.StatusID = 3;
      updateOrder();
      props.handleUpdateChange();
      props.handleUpdateChange();
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    }
  };

  const handleCancelOrder = () => {
    UpdateOrder.StatusID = 4;
    setIsLoading(true);
    updateOrder();
    props.handleUpdateChange();
    props.handleUpdateChange();
    window.location.reload();
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  const updateOrder = () => {
    axios
      .post(`http://localhost/CSC264/RoomAPI/UpdateOrder.php`, {
        ...UpdateOrder
      })
      .then((response) => {
        console.log(response.data);
      });
    props.handleUpdateChange();
    props.handleUpdateChange();
  };

  const deleteOrder = () => {
    axios.delete(`http://localhost/CSC264/RoomAPI/DeleteOrder.php`, {
      params: {
        OrderID: props.data.OrderID
      }
    });
    props.handleUpdateChange();
    props.handleUpdateChange();
  };

  const deleteOrderDetail = async (OrderID, Products) => {
    for (const item of Products) {
      await axios.delete(
        `http://localhost/CSC264/RoomAPI/DeleteOrderDetail.php`,
        {
          params: {
            OrderID: OrderID,
            ProductID: item.ProductID
          }
        }
      );
    }
  };

  const deleteOrderRecipient = () => {
    axios.delete(`http://localhost/CSC264/RoomAPI/DeleteOrderRecipient.php`, {
      params: {
        OrderID: props.data.OrderID
      }
    });
  };

  const [IsLoading, setIsLoading] = useState(false);

  const handleDeleteOrder = (event) => {
    event.preventDefault();
    setIsLoading(true);
    deleteOrderDetail(props.data.OrderID, Products);
    deleteOrderRecipient();
    deleteOrder();
    props.handleUpdateChange();
    props.handleUpdateChange();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {IsLoading ? (
        <Loading />
      ) : (
        <div className="orderList" id="orderList">
          {AdminID && (
            <div className="Product-Detail">
              <div className="Product-Text">
                <div className="Product-Title">
                  <div className="Product-Name">
                    <h3>
                      {props.data.OrderID} | {props.data.UserID}
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
                        <p className="yellow">pending</p>
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
                  {props.status === "Shipped" && (
                    <Button
                      title="Deliver Order"
                      value="Deliver Order"
                      type="Deliver Order"
                      onClick={handleOrderUpdate}
                      className="outline gray product"
                    />
                  )}
                  {props.status === "Ordered" && (
                    <Button
                      title="Ship Order"
                      value="Ship Order"
                      type="Ship Order"
                      onClick={handleOrderUpdate}
                      className="outline gray product"
                    />
                  )}
                  {props.status === "Completed" && (
                    <Button
                      title="Delete"
                      value="Delete"
                      type="Delete"
                      onClick={handleDeleteOrder}
                      className="outline gray product cancel"
                    />
                  )}
                  {props.status === "Cancelled" && (
                    <Button
                      title="Delete"
                      value="Delete"
                      type="Delete"
                      onClick={handleDeleteOrder}
                      className="outline gray product cancel"
                    />
                  )}
                  <Button
                    title="View Detail"
                    value="View Detail"
                    type="View Detail"
                    link={`/Admin/Order/${AdminID}/${props.data.UserID}/${props.data.OrderID}`}
                    className="outline gray product"
                  />
                  <button
                    className={ShowProduct ? "btn active" : "btn"}
                    onClick={handleShowProduct}
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
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
                      className="outline gray product"
                    />
                  )}
                  <Button
                    title="View Detail"
                    value="View Detail"
                    type="View Detail"
                    link={`/Order/${props.data.UserID}/${props.data.OrderID}`}
                    className="outline gray product"
                  />
                </div>
              </div>
            </div>
          )}
          {props.OrderPage == true && (
            <div className="Product-Detail">
              <div className="Product-Text">
                <div className="Product-Title">
                  <div className="Product-Name">
                    <h3>
                      {props.data.OrderID} | {props.data.UserID}
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
                        <p className="yellow">pending</p>
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
                  {props.status === "Ordered" && (
                    <Button
                      title="Cancel Order"
                      value="Cancel Order"
                      type="Cancel Order"
                      onClick={handleCancelOrder}
                      className="outline gray product cancel"
                    />
                  )}
                  <Button
                    title="View Detail"
                    value="View Detail"
                    type="View Detail"
                    link={`/Order/${props.data.UserID}/${props.data.OrderID}`}
                    className="outline gray product"
                  />
                  <button
                    className={ShowProduct ? "btn active" : "btn"}
                    onClick={handleShowProduct}
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
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
                      className="outline gray product"
                    />
                  )}
                  <Button
                    title="View Detail"
                    value="View Detail"
                    type="View Detail"
                    link={`/Order/${props.data.UserID}/${props.data.OrderID}`}
                    className="outline gray product"
                  />
                </div>
              </div>
            </div>
          )}

          <>
            {ShowProduct && (
              <div
                className={
                  ShowProduct ? "prod-Container active" : "prod-Container "
                }
              >
                {ProductsDetail.map((product) => (
                  <AdminProd
                    type="Order"
                    data={{ ...product, Quantity: product.Quantity }}
                    key={product.ProductID}
                  />
                ))}
              </div>
            )}
          </>
        </div>
      )}
    </>
  );
};

export default AdminOrd;
