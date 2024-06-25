import axios from "axios";

export const getProductData = (ProductID) => {
  return axios
    .get(`http://localhost/CSC264/RoomAPI/getProductDetail.php/${ProductID}`)
    .then((response) => response.data);
};
