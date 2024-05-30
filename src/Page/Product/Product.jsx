import React, { Suspense, useEffect, useState } from "react";

import Navigation from "../../Component/Navigation/Navigation";
import ProductCard from "../../Component/Product/ProductCard/ProductCard";
import Footer from "../../Component/Footer/Footer";
import Loading from "../Loading/Loading";
import "./Product.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const [ProductList, setProductList] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    axios
      .get("http://localhost/CSC264/RoomAPI/GetProduct.php")
      .then((response) => {
        setProductList(response.data);
      });
  }

  const { UserID } = useParams();

  const [sessionId, setSessionId] = useState("");

  return (
    <div className="Product" id="Product">
      <Navigation />
      <div className="Product-Container">
        <div className="product-group">
          {ProductList.map((item) => (
            <ProductCard
              key={item.ProductID}
              id={item.ProductID}
              data={item}
              UserID={UserID}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
