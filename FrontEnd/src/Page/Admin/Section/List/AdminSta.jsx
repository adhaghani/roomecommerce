import React, { useEffect, useState } from "react";

import "./List.css";
import axios from "axios";
const AdminSta = () => {
  const [CartData, setCartData] = useState([]);
  const [OrderData, setOrderData] = useState([]);
  const [UserData, setUserData] = useState([]);
  const [ProductData, setProductData] = useState([]);
  const [CategoryData, setCategoryData] = useState([]);

  const getUser = () => {
    axios
      .get("http://localhost/CSC264/RoomAPI/getUser.php")
      .then((response) => {
        setUserData(response.data);
      });
  };
  const getOrder = () => {
    axios
      .get("http://localhost/CSC264/RoomAPI/getOrder.php")
      .then((response) => {
        setOrderData(response.data);
      });
  };

  const getProduct = () => {
    axios
      .get("http://localhost/CSC264/RoomAPI/getProduct.php")
      .then((response) => {
        setProductData(response.data);
      });
  };
  const getCart = () => {
    axios
      .get("http://localhost/CSC264/RoomAPI/GetCart.php")
      .then((response) => {
        setCartData(response.data);
      });
  };
  const getCategory = () => {
    axios
      .get("http://localhost/CSC264/RoomAPI/getCategory.php")
      .then((response) => {
        setCategoryData(response.data);
      });
  };

  useEffect(() => {
    getUser();
    getOrder();
    getProduct();
    getCart();
    getCategory();
  }, []);

  // PRODUCTS
  const getLowOnStockProducts = () => {
    const lowOnStockProducts = ProductData.filter(
      (product) => product.ProductStock <= 10
    );
    return lowOnStockProducts.length;
  };

  const getOutOfStockProducts = () => {
    const outOfStockProducts = ProductData.filter(
      (product) => product.ProductStock === 0
    );
    return outOfStockProducts.length;
  };

  const getAverageProductPrice = () => {
    const totalPrice = ProductData.reduce(
      (sum, product) => sum + parseFloat(product.Price),
      0
    );
    const averagePrice = totalPrice / ProductData.length;
    return averagePrice.toFixed(2); // Round to 2 decimal places
  };

  const getNewlyArrivedProducts = () => {
    const today = new Date();
    const newlyArrivedProducts = ProductData.filter((product) => {
      const productDate = new Date(product.DateAdded);
      const diffTime = Math.abs(today - productDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    });
    return newlyArrivedProducts.length;
  };

  // ORDERS

  const getPendingOrders = () => {
    const pendingOrders = OrderData.filter((order) => order.StatusID === 1);
    return pendingOrders.length;
  };

  const getShippedOrders = () => {
    const shippedOrders = OrderData.filter((order) => order.StatusID === 2);
    return shippedOrders.length;
  };

  const getDeliveredOrders = () => {
    const deliveredOrders = OrderData.filter((order) => order.StatusID === 3);
    return deliveredOrders.length;
  };

  const getCancelledOrders = () => {
    const cancelledOrders = OrderData.filter((order) => order.StatusID === 4);
    return cancelledOrders.length;
  };

  const getTotalSales = () => {
    const totalSales = OrderData.reduce(
      (sum, order) => sum + parseFloat(order.TotalPrice),
      0
    );
    return totalSales.toFixed(2); // Round to 2 decimal places
  };

  const getAveragePerOrder = () => {
    const totalPrice = OrderData.reduce(
      (sum, order) => sum + parseFloat(order.TotalPrice),
      0
    );
    const averagePrice = totalPrice / OrderData.length;
    return averagePrice.toFixed(2); // Round to 2 decimal places
  };

  return (
    <div className="statisticList" id="statisticList">
      {/* Essentials Info */}
      <div className="ContainerStat">
        <div className="Title">
          <h2>Essentials Information</h2>
        </div>
        <div className="Cont">
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Number Of Accounts</h3>
            </div>
            <div className="data">
              <h2>{UserData.length}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Number Of Category</h3>
            </div>
            <div className="data">
              <h2>{CategoryData.length}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Number Of Products</h3>
            </div>
            <div className="data">
              <h2>{ProductData.length}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Number Of Orders</h3>
            </div>
            <div className="data">
              <h2>{OrderData.length}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Product Info */}
      <div className="ContainerStat">
        <div className="Title">
          <h2>Product Information</h2>
        </div>
        <div className="Cont">
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Total Products</h3>
            </div>
            <div className="data">
              <h2>{ProductData.length}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Low on Stock Products</h3>
            </div>
            <div className="data">
              <h2>{getLowOnStockProducts()}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Out of Stock Product</h3>
            </div>
            <div className="data">
              <h2>{getOutOfStockProducts()}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Average Product Price</h3>
            </div>
            <div className="data">
              <h2>RM {getAverageProductPrice()}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Newly Arrived Product</h3>
            </div>
            <div className="data">
              <h2>{getNewlyArrivedProducts()}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Orders Info */}
      <div className="ContainerStat">
        <div className="Title">
          <h2>Orders Information</h2>
        </div>
        <div className="Cont">
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Total Orders</h3>
            </div>
            <div className="data">
              <h2>{OrderData.length}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Pending Orders</h3>
            </div>
            <div className="data">
              <h2>{getPendingOrders()}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Shipped Orders</h3>
            </div>
            <div className="data">
              <h2>{getShippedOrders()}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Delivered Orders</h3>
            </div>
            <div className="data">
              <h2>{getDeliveredOrders()}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Cancelled Orders</h3>
            </div>
            <div className="data">
              <h2>{getCancelledOrders()}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Sales Info */}
      <div className="ContainerStat">
        <div className="Title">
          <h2>Sales Information</h2>
        </div>
        <div className="Cont">
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Total Sales </h3>
            </div>
            <div className="data">
              <h2>RM {getTotalSales()}</h2>
            </div>
          </div>
          <div className="Statistic-Container">
            <div className="DataTitle">
              <h3>Average Sales/Order </h3>
            </div>
            <div className="data">
              <h2>RM {getAveragePerOrder()}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSta;
