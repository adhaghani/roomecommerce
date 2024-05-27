import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductCard.css";
import axios from "axios";
const ProductCard = (props) => {
  const [Categories, setCategories] = useState({
    Name: ""
  });

  const [IsLiked, setIsLiked] = useState(false);
  const [IsNew, setIsNew] = useState(false);

  const ProductDateAdded = props.data.DateAdded;
  const date = new Date(ProductDateAdded);
  const currentDate = new Date();

  const { UserID } = useParams();

  useEffect(() => {
    const currentDate = new Date();
    const createdDate = new Date(props.data.DateAdded);
    const timeDiff = currentDate.getTime() - createdDate.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays <= 7) {
      setIsNew(true);
    }
  }, [props.data.DateAdded]);

  useEffect(() => {
    getCategoryName();
  }, []);

  const getCategoryName = () => {
    axios
      .get(
        `http://localhost/CSC264/RoomAPI/GetCategoryName.php/${props.data.CategoryID}`,
        {}
      )
      .then((response) => {
        setCategories(response.data);
      });
  };

  const getLikes = () => {
    axios
      .get(
        `http://localhost/CSC264/RoomAPI/getLikeSpecific.php/${props.data.ProductID}/${UserID}`
      )
      .then((response) => {
        if (response.data === 1) {
          setIsLiked(true);
        } else if (response.data === 0) {
          setIsLiked(false);
        }
      });
  };

  const handleLike = (event) => {
    event.preventDefault();
    if (IsLiked) {
      removeLike(UserID, props.data.ProductID);
    } else {
      addLike(UserID, props.data.ProductID);
    }
  };
  function removeLike(UserID, ProductID) {
    axios
      .delete(`http://localhost/CSC264/RoomAPI/DeleteLike.php/`, {
        params: {
          UserID,
          ProductID
        }
      })
      .then((response) => {
        getLikes();
        console.log(response.data);
      });
  }

  function addLike(UserID, ProductID) {
    fetch("http://localhost/CSC264/RoomAPI/PostLike.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        UserID: UserID,
        ProductID: ProductID
      })
    })
      .then((response) => response.json())
      .then((data) => {
        getLikes();
        console.log(data);
      });
  }

  useEffect(() => {
    getLikes();
  }, []);

  const handleAddToCart = (event) => {
    event.preventDefault();
    addToCart(UserID, props.data.ProductID, 1);
  };

  const addToCart = (UserID, ProductID, Quantity) => {
    fetch("http://localhost/CSC264/RoomAPI/PostCart.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        UserID: UserID,
        ProductID: ProductID,
        Quantity: Quantity
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Link
      to={`/Product/${props.UserID}/${props.data.CategoryID}/${props.data.ProductID}/`}
      className="ProductCard"
      id="ProductCard"
    >
      <div className="Card-Container">
        <div className="product-image">
          <img src={props.data.PicturePath} alt="" loading="lazy" />
        </div>
        <div className="product-details">
          {IsNew && (
            <div className="product-special">
              <p>Newly Arrived</p>
            </div>
          )}
          <div className="product-title">
            <h3>{props.data.Name}</h3>
          </div>
          <div className="product-category">
            <p>{Categories.Name}</p>{" "}
            <p>{props.data.ProductStock} pieces left</p>
          </div>
          <div className="product-price">
            <div className="price-latest">
              <h3>
                <span>RM</span>
                {props.data.Price}
              </h3>
            </div>
            {props.hasPromo && (
              <div className="price-before">
                <p>Previous price RM500.00</p>
              </div>
            )}
          </div>
          <div className="product-buttons">
            <button className="product-button cart" onClick={handleAddToCart}>
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
            <button
              className={
                IsLiked ? "product-button like active" : "product-button like"
              }
              onClick={handleLike}
            >
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
