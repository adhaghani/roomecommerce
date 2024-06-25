import axios from "axios";

export const getUserCartData = (UserID, ProductID) => {
  return axios
    .get(`http://localhost/CSC264/RoomAPI/getCart.php/${UserID}/${ProductID}`)
    .then((response) => response.data.Quantity);
};
