import React, { useEffect, useState } from "react";

import "./List.css";
import axios from "axios";

import StatisticContainer from "../AdminStatistic/StatisticContainer";

import { Pie, Line } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import {
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement
} from "chart.js";
ChartJS.register(ArcElement, Tooltip);
ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement);
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
  const getAveragePerOrder = () => {
    const totalPrice = OrderData.reduce(
      (sum, order) => sum + parseFloat(order.TotalPrice),
      0
    );
    const averagePrice = totalPrice / OrderData.length;
    return averagePrice.toFixed(2); // Round to 2 decimal places
  };

  // Charts

  // Orders PieChart
  const dataOrders = {
    labels: [
      "Pending Orders",
      "Shipped Orders",
      "Delivered Orders",
      "Cancelled Orders"
    ],
    datasets: [
      {
        label: "# of Orders",
        data: [
          getPendingOrders(),
          getShippedOrders(),
          getDeliveredOrders(),
          getCancelledOrders()
        ],
        backgroundColor: ["#ffce54", "#4fc1e9", "#48cfad", "#ed5565"],
        borderColor: ["#ffce54", "#4fc1e9", "#48cfad", "#ed5565"]
      }
    ]
  };

  // Sales Per Day LineChart
  const [OrdersPDay, setOrdersPDay] = useState({
    labels: [],
    datasets: [
      {
        label: "Order This Day",
        data: [],
        fill: true,
        backgroundColor: "#0058A3",
        borderColor: "#0058A3",
        borderWidth: 4,
        tension: 0.4,
        borderJoinStyle: "bevel"
      }
    ]
  });
  const [SalesPDay, setSalesPDay] = useState({
    labels: [],
    datasets: [
      {
        label: "Sales This Day",
        data: [],
        fill: true,
        backgroundColor: "#48CFAD",
        borderColor: "#48CFAD",
        borderWidth: 4,
        tension: 0.4,
        borderJoinStyle: "bevel"
      }
    ]
  });

  const calculateOrdersPerDay = () => {
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 6);

    const extractedDates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      extractedDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const sortedDates = extractedDates.sort((a, b) => a - b);
    const last7Dates = sortedDates
      .slice(-7)
      .map((date) => date.toLocaleDateString());

    const orders = last7Dates.map(() => 0); // Initialize the orders array with zeros

    OrderData.forEach((order) => {
      const orderDate = new Date(order.OrderDate);
      const index = last7Dates.findIndex(
        (date) => date === orderDate.toLocaleDateString()
      );
      if (index !== -1) {
        orders[index]++;
      }
    });

    console.log("OrderData:", OrderData);
    console.log("last7Dates:", last7Dates);
    console.log("orders:", orders);

    return {
      labels: last7Dates,
      datasets: [{ ...OrdersPDay.datasets[0], data: orders }]
    };
  };

  const calculateSalesPerDay = () => {
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 6);

    const extractedDates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      extractedDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const sortedDates = extractedDates.sort((a, b) => a - b);
    const last7Dates = sortedDates
      .slice(-7)
      .map((date) => date.toLocaleDateString());

    const sales = last7Dates.map(() => 0); // Initialize the sales array with zeros

    OrderData.forEach((order) => {
      const orderDate = new Date(order.OrderDate);
      const index = last7Dates.findIndex(
        (date) => date === orderDate.toLocaleDateString()
      );
      if (index !== -1) {
        sales[index] += parseFloat(order.TotalPrice); // Sum up the sales amount for each day
      }
    });

    console.log("OrderData:", OrderData);
    console.log("last7Dates:", last7Dates);
    console.log("sales:", sales);

    return {
      labels: last7Dates,
      datasets: [{ ...SalesPDay.datasets[0], data: sales }]
    };
  };

  useEffect(() => {
    const ordersPerDayData = calculateOrdersPerDay();
    const salesPerDayData = calculateSalesPerDay();

    setOrdersPDay(ordersPerDayData);
    setSalesPDay(salesPerDayData);
  }, [OrderData]);

  const options = {
    interaction: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="statisticList" id="statisticList">
      {/* Essentials Info */}
      {/* <div className="ContainerStat">
        <SalesChart />
        <SalesChart data={dataSales} />
      </div> */}
      {/* <div className="ContainerStat">
        <div className="Title">
          <h2>Essentials Information</h2>
        </div>
        <div className="Cont">
          <StatisticContainer
            title="Number of Accounts"
            data={UserData.length}
          />
          <StatisticContainer
            title="Number of Categories"
            data={CategoryData.length}
          />
          <StatisticContainer
            title="Number of Products"
            data={ProductData.length}
          />
          <StatisticContainer
            title="Number of Orders"
            data={OrderData.length}
          />
        </div>
      </div> */}
      {/* Product Info */}
      {/* <div className="ContainerStat">
        <div className="Title">
          <h2>Product Information</h2>
        </div>
        <div className="Cont">
          <StatisticContainer
            title="Total Products"
            data={ProductData.length}
          />
          <StatisticContainer
            title="Low on Stock Products"
            data={getLowOnStockProducts()}
          />
          <StatisticContainer
            title="Low on Stock Products"
            data={getOutOfStockProducts()}
          />
          <StatisticContainer
            title="Low on Stock Products"
            data={getAveragePerOrder()}
          />
          <StatisticContainer
            title="Low on Stock Products"
            data={getNewlyArrivedProducts()}
          />
        </div>
      </div> */}
      {/* Orders Info */}
      {/* <div className="ContainerStat">
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
          <div className="wrapper">
            <h2>Number Of Orders</h2>
            // <OrderChart data={dataOrders} />
          </div>{" "}
        </div>
      </div> */}
      {/* Sales Info */}
      {/* <div className="ContainerStat">
        <div className="Title">
          <h2>Sales Information</h2>
        </div>
        <div className="Cont">
          <StatisticContainer
            title="Total Sales"
            data={"RM" + getTotalSales()}
          />
          <StatisticContainer
            title="Average Sales / Order"
            data={"RM" + getAveragePerOrder()}
          />
        </div>
      </div> */}

      <div className="Data-Container Line">
        <h2 className="Data-Title">Orders per Day For the past 7 days</h2>
        <Line data={OrdersPDay} options={options} />
      </div>
      <div className="Data-Container Line">
        <h2 className="Data-Title">Total Sales For the past 7 days</h2>
        <Line data={SalesPDay} options={options} />
      </div>
      <div className="Data-Container">
        <h2 className="Data-Title">Number of Orders</h2>
        <Pie data={dataOrders} />
      </div>
      <div className="Data-Container sm">
        <div className="container-sm">
          <h2 className="Data-Title">Number of Account</h2>
          <h1>{UserData.length}</h1>
        </div>
        <div className="container-sm">
          <h2 className="Data-Title">Number of Products</h2>
          <h1>{ProductData.length}</h1>
        </div>
        <div className="container-sm">
          <h2 className="Data-Title">Average Revenue</h2>
          <h1>RM {getAveragePerOrder()}</h1>
        </div>
      </div>

      <div className="Data-Container sm">
        <div className="container-sm">
          <h2 className="Data-Title">Product Out of Stock</h2>
          <h1>{getOutOfStockProducts()}</h1>
        </div>
        <div className="container-sm">
          <h2 className="Data-Title">Product Low on stock</h2>
          <h1>{getLowOnStockProducts()}</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminSta;
