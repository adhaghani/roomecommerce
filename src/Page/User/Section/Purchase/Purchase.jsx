import React, { useState } from "react";
import UserNav from "../../UserNavigation/UserNav";

import "./Purchase.css";

import ProductUserCard from "./UserProduct/ProductUserCard";
const Purchase = (props) => {
  const [CurrentPage, setCurrentPage] = useState(1);
  const handleSubNavClick = (item) => {
    setCurrentPage(item);
  };
  return (
    <div className="Purchase" id="Purchase">
      <UserNav category="Purchase" onClick={handleSubNavClick} />
      <div className="Purchase-Container">
        {CurrentPage === 1 && (
          <div className="page">
            <div className="productCard-Container">
              <ProductUserCard status="Ordered" OrderPage={true} />
              <ProductUserCard status="Cancelled" OrderPage={true} />
              <ProductUserCard status="Ordered" OrderPage={true} />
              <ProductUserCard status="Shipped" OrderPage={true} />
              <ProductUserCard status="Shipped" OrderPage={true} />
              <ProductUserCard status="Shipped" OrderPage={true} />
              <ProductUserCard hasCompleted={true} OrderPage={true} />
              <ProductUserCard hasCompleted={true} OrderPage={true} />
              <ProductUserCard status="Ordered" OrderPage={true} />
            </div>
          </div>
        )}
        {CurrentPage === 2 && (
          <div className="page">
            <div className="productCard-Container">
              <ProductUserCard status="Ordered" OrderPage={true} />
              <ProductUserCard status="Ordered" OrderPage={true} />
              <ProductUserCard status="Ordered" OrderPage={true} />
            </div>
          </div>
        )}
        {CurrentPage === 3 && (
          <div className="page">
            <div className="productCard-Container">
              <ProductUserCard status="Shipped" OrderPage={true} />
              <ProductUserCard status="Shipped" OrderPage={true} />
              <ProductUserCard status="Shipped" OrderPage={true} />
            </div>
          </div>
        )}
        {CurrentPage === 4 && (
          <div className="page">
            <div className="productCard-Container">
              <ProductUserCard status="Received" OrderPage={true} />
              <ProductUserCard status="Received" OrderPage={true} />
              <ProductUserCard status="Received" OrderPage={true} />
            </div>
          </div>
        )}
        {CurrentPage === 5 && (
          <div className="page">
            <div className="productCard-Container">
              <ProductUserCard status="Cancelled" OrderPage={true} />
              <ProductUserCard status="Cancelled" OrderPage={true} />
              <ProductUserCard status="Cancelled" OrderPage={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchase;
