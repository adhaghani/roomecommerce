import React, { useEffect, useState } from "react";

import Navigation from "../../../Component/Navigation/Navigation";
import Footer from "../../../Component/Footer/Footer";
import CommentSection from "./Comment/CommentSection";

import "./Detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [Product, setProduct] = useState([]);
  const [CategoryName, setCategoryName] = useState([]);
  const [User, setUser] = useState([]);

  const { UserID, categoryID, ProductID } = useParams();

  useEffect(() => {
    getUser();
    getProduct();

    getCategoryName();
  }, []);

  function getProduct() {
    axios
      .get(`http://localhost/CSC264/RoomAPI/GetProductDetail.php/${ProductID}`)
      .then((response) => {
        setProduct(response.data);
      });
  }
  const getCategoryName = () => {
    axios
      .get(
        `http://localhost/CSC264/RoomAPI/GetCategoryName.php/${categoryID}`,
        {}
      )
      .then((response) => {
        setCategoryName(response.data);
      });
  };
  const getUser = () => {
    axios
      .get(`http://localhost/CSC264/RoomAPI/getUser.php/${UserID}`)
      .then((response) => {
        setUser(response.data);
      });
  };

  const determineAdmin = () => {
    if (User.RoleID === 1) {
      return true;
    } else {
      return false;
    }
  };

  const [Quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(Quantity + 1);
  };

  const handleDecrement = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    }
  };

  const [IsLiked, setIsLiked] = useState(false);
  useEffect(() => {
    getLikes();
  }, []);
  const getLikes = () => {
    axios
      .get(
        `http://localhost/CSC264/RoomAPI/getLikeSpecific.php/${ProductID}/${UserID}`
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
    if (IsLiked) {
      removeLike(UserID, ProductID);
    } else {
      addLike(UserID, ProductID);
    }
  };

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

  const [IsNew, setIsNew] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const createdDate = new Date(Product.DateAdded);
    const timeDiff = currentDate.getTime() - createdDate.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays <= 7) {
      setIsNew(true);
    }
  }, [Product.DateAdded]);

  const handleAddToCart = (event) => {
    event.preventDefault();
    addToCart(UserID, ProductID, Quantity);
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
    <>
      {determineAdmin() === false && (
        <div className="ProductDetail" id="ProductDetail">
          <Navigation isOnHomePage={false} />
          <div className="Container-ProductDetail">
            <div className="Product-Image-Container">
              <div className="Main-Image-Container">
                <div className="Main-Image">
                  <img src={Product.PicturePath} alt="" />
                </div>
              </div>
            </div>
            <div className="Product-Detail-Container">
              <div className="product-special">
                {IsNew && <p>Newly Arrived</p>}
              </div>
              <div className="product-title">
                <div className="title">
                  <h3>{Product.Name}</h3>
                </div>
              </div>
              <div className="product-price">
                <div className="product-category">
                  <p>{CategoryName.Name}</p>
                </div>
                <div className="price-latest">
                  <h3>
                    <span>RM</span>
                    {Product.Price}
                  </h3>
                </div>
              </div>
              <div className="product-description">
                <p>{Product.Description}</p>
              </div>
              <div className="product-category">
                <p>{Product.ProductStock} items left</p>
              </div>
              <div className="quantity">
                <div className="quantity-button">
                  <button onClick={handleDecrement}>-</button>
                  <div className="quantity-button-value">{Quantity}</div>
                  <button onClick={handleIncrement}>+</button>
                </div>
              </div>
              <div className="product-buttons">
                <button
                  className="product-button cart"
                  onClick={handleAddToCart}
                >
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
                    IsLiked
                      ? "product-button like active"
                      : "product-button like"
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
          {/* Comment Section */}
          <div className="Container-ProductDetail Comment">
            <CommentSection />
          </div>
          <Footer />
        </div>
      )}
      {determineAdmin() === true && (
        <div className="ProductDetail" id="ProductDetail">
          <div className="product-title-admin">
            <h2>Example Product Page</h2>
          </div>
          <div className="Container-ProductDetail">
            <div className="Product-Image-Container">
              <div className="Main-Image-Container">
                <div className="Main-Image">
                  <img src={Product.PicturePath} alt="" />
                </div>
              </div>
            </div>
            <div className="Product-Detail-Container">
              <div className="product-special">
                {IsNew && <p>Newly Arrived</p>}
              </div>
              <div className="product-title">
                <div className="title">
                  <h3>{Product.Name}</h3>
                </div>
              </div>
              <div className="product-price">
                <div className="product-category">
                  <p>{CategoryName.Name}</p>
                </div>
                <div className="price-latest">
                  <h3>
                    <span>RM</span>
                    {Product.Price}
                  </h3>
                </div>
              </div>
              <div className="product-description">
                <p>{Product.Description}</p>
              </div>
              <div className="quantity">
                <div className="quantity-button">
                  <button onClick={handleDecrement}>-</button>
                  <div className="quantity-button-value">{Quantity}</div>
                  <button onClick={handleIncrement}>+</button>
                </div>
              </div>
              <div className="product-buttons">
                <div className="product-button cart">
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
                </div>
                <div className="product-button like">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
