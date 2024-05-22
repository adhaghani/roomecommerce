import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = (props) => {
  return (
    <Link
      to={`/Product/${props.UserID}/${props.CategoryID}/${props.ProductID}/`}
      className="ProductCard"
      id="ProductCard"
    >
      <div className="Card-Container">
        <div className="product-image"></div>
        <div className="product-details">
          {props.hasSpecial && (
            <div className="product-special">
              <p>New Lower Price</p>
            </div>
          )}
          <div className="product-title">
            <h3>Hemlingby</h3>
          </div>
          <div className="product-category">
            <p>2-Seat Sofa</p>
          </div>
          <div className="product-price">
            <div className="price-latest">
              <h3>
                <span>RM</span>250.00
              </h3>
            </div>
            {props.hasPromo && (
              <div className="price-before">
                <p>Previous price RM500.00</p>
              </div>
            )}
          </div>
          <div className="product-buttons">
            <button className="product-button cart">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M12 4V20"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="product-button like">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="#000000"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
