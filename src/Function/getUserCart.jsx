import axios from "axios";

export const getUserCart = (UserID) => {
  return axios
    .get(`http://localhost/CSC264/RoomAPI/getCart.php/${UserID}`)
    .then((response) => response.data);
};
