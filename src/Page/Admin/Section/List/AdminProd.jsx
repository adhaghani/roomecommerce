import React from "react";

import "./List.css";

import ProductUserCard from "../../../User/Section/Purchase/UserProduct/ProductUserCard";
const AdminProd = (props) => {
  return (
    <div className="productList" id="productList">
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
      <ProductUserCard AdminPage={true} />
    </div>
  );
};

export default AdminProd;
