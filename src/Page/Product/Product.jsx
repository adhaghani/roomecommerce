import React, { useEffect, useState } from "react";

import Navigation from "../../Component/Navigation/Navigation";
import Promotion from "../../Component/Promotion/Promotion";
import ProductCard from "../../Component/Product/ProductCard/ProductCard";
import Footer from "../../Component/Footer/Footer";
import "./Product.css";
import axios from "axios";

const Product = () => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    axios
      .get("http://localhost/CSC264/RoomAPI/GetProduct.php")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      });
  }
  return (
    <div className="Product" id="Product">
      <Navigation />
      <div className="Product-Container">
        <Promotion
          size="large"
          titleText="Summer Sales"
          mainText="Get 20% OFF all Product"
        />
        <div className="product-group">
          <ProductCard hasPromo={true} id="1" category="Sofa" />
          <ProductCard hasSpecial={true} />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
