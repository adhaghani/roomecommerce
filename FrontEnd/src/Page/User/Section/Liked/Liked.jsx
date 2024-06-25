import React, { useEffect, useState } from "react";
import UserNav from "../../UserNavigation/UserNav";

import "./Liked.css";

import ProductUserCard from "../Purchase/UserProduct/ProductUserCard";
import { useParams } from "react-router-dom";
import axios from "axios";

import NoData from "../../../Admin/Section/NoData";
const Liked = (props) => {
  const [Like, setLike] = useState([]);

  const { UserID } = useParams();
  const getLike = () => {
    axios
      .get(`http://localhost/CSC264/RoomAPI/getLikeUser.php/${UserID}`)
      .then((response) => {
        setLike(response.data);
      });
  };

  useEffect(() => {
    getLike();
  }, []);

  const [Product, setProduct] = useState([]);

  const getProductDetail = async () => {
    const productDetails = await Promise.all(
      Like.map(async (item) => {
        const response = await axios.get(
          `http://localhost/CSC264/RoomAPI/getProductDetail.php/${item.ProductID}`
        );
        return response.data;
      })
    );
    setProduct(productDetails);
  };

  useEffect(() => {
    getProductDetail();
  }, [Like]);

  function removeLike(UserID, ProductID) {
    axios
      .delete(`http://localhost/CSC264/RoomAPI/DeleteLike.php/`, {
        params: {
          UserID,
          ProductID
        }
      })
      .then((response) => {
        getLike();
        getProductDetail();
      });
    window.dispatchEvent(
      new CustomEvent("showNotification", {
        detail: { message: "Removed Successfully", type: "success" }
      })
    );
  }

  return (
    <div className="Like" id="Like">
      <div className="Like-Container" onClick={getLike}>
        {Product.length == 0 ? (
          <NoData />
        ) : (
          Product.map((item) => (
            <ProductUserCard
              isLiked={true}
              data={item}
              onRemoveClick={() => removeLike(UserID, item.ProductID)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Liked;
