import React from "react";
import "./Review.css";

const Review = (props) => {
  const { name, img, ratings, description } = props.user;
  return (
    <div className="user">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="user-info">
        <p className="user-name">{name}</p>
        <p>
          Rating : <span className="rating"> {ratings}</span>
        </p>
      </div>
    </div>
  );
};

export default Review;
