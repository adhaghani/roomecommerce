import React from "react";
import UserNav from "../../UserNavigation/UserNav";

import "./Liked.css";

import ProductUserCard from "../Purchase/UserProduct/ProductUserCard";

const Liked = (props) => {
  return (
    <div className="Like" id="Like">
      <div className="Like-Container">
        <ProductUserCard isLiked={true} />
        <ProductUserCard isLiked={true} />
        <ProductUserCard isLiked={true} />
        <ProductUserCard isLiked={true} />
        <ProductUserCard isLiked={true} />
      </div>
    </div>
  );
};

export default Liked;
