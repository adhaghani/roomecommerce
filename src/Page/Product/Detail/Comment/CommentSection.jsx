import React, { useEffect, useState } from "react";

import Comment from "./Comment";

import "./Comment.css";

import Button from "../../../../Component/Button/Button";
import axios from "axios";

const CommentSection = (props) => {
  // receive props like UserID, ProductID
  // get Review Data from server
  // Create a Post review Function

  const [Review, setReview] = useState({
    UserID: props.UserID,
    ProductID: props.ProductID,
    ReviewTitle: "",
    ReviewText: ""
  });

  const [ReviewData, setReviewData] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReview({ ...Review, [name]: value });
    console.log(Review);
  };

  useEffect(() => {
    getProductReview();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    PostReview();
    setTimeout(() => {
      getProductReview();
      setAddReview(false);
      setReview({
        UserID: props.UserID,
        ProductID: props.ProductID,
        ReviewTitle: "",
        ReviewText: ""
      });
    }, 100);
  };

  const PostReview = () => {
    fetch("http://localhost/CSC264/RoomAPI/PostReview.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Review)
    })
      .then((response) => response.json())
      .then((data) => {});
  };

  const getProductReview = () => {
    // get at Review using ProductID
    axios
      .get(`http://localhost/CSC264/RoomAPI/getReview.php/${props.ProductID}`)
      .then((response) => {
        setReviewData(response.data);
      });
    console.log(ReviewData);
  };

  const [AddReview, setAddReview] = useState(false);

  const handleAddReview = () => {
    setAddReview(!AddReview);
  };

  return (
    <div className="Comment-Section">
      <div className="Comment-Container">
        <button
          className={AddReview ? "buttons active" : "buttons"}
          onClick={handleAddReview}
        >
          <div className="AddReview">
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
          {AddReview == false && <p>Add Review</p>}
          {AddReview == true && <p>Cancel</p>}
        </button>
        {AddReview && (
          <div className="Comment">
            <div className="CommentDetail-Container">
              <div className="Profile-Section">
                <div className="Image">
                  <svg
                    width="45px"
                    height="45px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.02958 19.4012C5.97501 19.9508 6.3763 20.4405 6.92589 20.4951C7.47547 20.5497 7.96523 20.1484 8.01979 19.5988L6.02958 19.4012ZM15.9802 19.5988C16.0348 20.1484 16.5245 20.5497 17.0741 20.4951C17.6237 20.4405 18.025 19.9508 17.9704 19.4012L15.9802 19.5988ZM20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM13 10C13 10.5523 12.5523 11 12 11V13C13.6569 13 15 11.6569 15 10H13ZM12 11C11.4477 11 11 10.5523 11 10H9C9 11.6569 10.3431 13 12 13V11ZM11 10C11 9.44772 11.4477 9 12 9V7C10.3431 7 9 8.34315 9 10H11ZM12 9C12.5523 9 13 9.44772 13 10H15C15 8.34315 13.6569 7 12 7V9ZM8.01979 19.5988C8.22038 17.5785 9.92646 16 12 16V14C8.88819 14 6.33072 16.3681 6.02958 19.4012L8.01979 19.5988ZM12 16C14.0735 16 15.7796 17.5785 15.9802 19.5988L17.9704 19.4012C17.6693 16.3681 15.1118 14 12 14V16Z"
                      fill="#000000"
                    />
                  </svg>
                </div>
              </div>
              <div className="Review-Section">
                <div className="Review-Information-Section">
                  <div className="Name">
                    <p>UserName | ReviewID</p>
                    <input
                      name="ReviewTitle"
                      id="ReviewTitle"
                      type="text"
                      placeholder="Review Title"
                      onChange={handleChange}
                      value={Review.ReviewTitle}
                    />
                  </div>
                  <div className="Date-Posted">
                    <p>Current Date</p>
                  </div>
                </div>
                <div className="Review-Information-Section">
                  <div className="Review-Text">
                    <textarea
                      name="ReviewText"
                      id="ReviewText"
                      placeholder="Review Details"
                      onChange={handleChange}
                      value={Review.ReviewText}
                    ></textarea>
                  </div>
                </div>
                <div className="Review-Information-Section button">
                  <Button
                    title="Post Review"
                    value="Post Review"
                    type="Post Review"
                    className="fill primary product"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {ReviewData.map((item) => (
          <Comment key={item.id} data={item} />
        ))}

        {ReviewData.length === 0 ? (
          <div className="Comment">
            <div className="CommentDetail-Container">
              <h3 className="noreview">No reviews found, write one!</h3>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CommentSection;
