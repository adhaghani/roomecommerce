import React, { useEffect, useState } from "react";

import Navigation from "../../Component/Navigation/Navigation";
import Promotion from "../../Component/Promotion/Promotion";
import ProductCard from "../../Component/Product/ProductCard/ProductCard";
import Footer from "../../Component/Footer/Footer";
import "./Product.css";
import axios from "axios";

const Product = () => {
  const [ProductList, setProductList] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    axios
      .get("http://localhost/CSC264/RoomAPI/GetProduct.php")
      .then((response) => {
        console.log(response.data);
        setProductList(response.data);
      });
  }
  return (
    <div className="Product" id="Product">
      <Navigation   />
      <div className="Product-Container">
        <Promotion
          size="large"
          titleText="Summer Sales"
          mainText="Get 20% OFF all Product"
        />
        <div className="product-group">
          {ProductList.map((item) => (
            <ProductCard key={item.ProductID} id={item.ProductID} data={item} />
          ))}
        </div>
        <Promotion
          size="large"
          titleText="Summer Sales"
          mainText="Get 20% OFF all Product"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
