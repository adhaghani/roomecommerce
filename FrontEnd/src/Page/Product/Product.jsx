import React, { Suspense, useEffect, useState } from "react";

import Navigation from "../../Component/Navigation/Navigation";
import ProductCard from "../../Component/Product/ProductCard/ProductCard";
import Footer from "../../Component/Footer/Footer";
import "./Product.css";
import axios from "axios";
import NoData from "../Admin/Section/NoData";
import { useNavigate } from "react-router-dom";

import Notification from "../../Component/Notification/Notification";

import { getSession } from "../../Function/Session";
const Product = () => {
  const [ProductList, setProductList] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  useEffect(() => {
    getProduct();
  }, []);

  // SESSION FUNCTION
  const navigate = useNavigate();
  const [UserID, setUserID] = useState(null);

  useEffect(() => {
    const sessionData = getSession();
    if (!sessionData) {
      navigate("/NoSession");
    } else {
      console.log(sessionData);
      setUserID(sessionData.UserID);
      console.log(sessionData.UserID);
    }
  }, [navigate]);

  function getProduct() {
    axios
      .get("http://localhost/CSC264/RoomAPI/GetProduct.php")
      .then((response) => {
        setProductList(response.data);
      });
  }

  const filteredProductList = ProductList.filter(
    (item) =>
      item.Name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.Description.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="Product" id="Product">
      <Navigation onSearch={setsearchValue} />
      <Notification />
      <div className="Product-Container">
        <div className="product-group">
          {filteredProductList.length > 0 ? (
            filteredProductList.map((item) => (
              <ProductCard
                key={item.ProductID}
                id={item.ProductID}
                data={item}
                UserID={UserID}
              />
            ))
          ) : (
            <NoData ProductSearch={true} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
