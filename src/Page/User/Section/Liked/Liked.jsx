import React, { useEffect, useState } from "react";
import UserNav from "../../UserNavigation/UserNav";

import "./Liked.css";

import ProductUserCard from "../Purchase/UserProduct/ProductUserCard";
import { useParams } from "react-router-dom";
import axios from "axios";

const Liked = (props) => {
  const [Like, setLike] = useState([]);

  const { UserID } = useParams();
  const getLike = () => {
    axios
      .get(`http://localhost/CSC264/RoomAPI/getLikeUser.php/${UserID}`)
      .then((response) => {
        console.log(response.data);
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

    console.log(productDetails);
    setProduct(productDetails);
  };

  useEffect(() => {
    getProductDetail();
  }, [Like]);

  return (
    <div className="Like" id="Like">
      <div className="Like-Container">
        {Product.map((item) => (
          <ProductUserCard isLiked={true} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Liked;
