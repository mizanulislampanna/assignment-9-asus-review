import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Review.css";

const Review = (props) => {
  const { name, img, ratings, description } = props.user;

  // Conditional rendering
  let rating;
  if (ratings === 3) {
    rating = (
      <div>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </div>
    );
  }
  if (ratings === 4) {
    rating = (
      <div>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </div>
    );
  }
  if (ratings === 5) {
    rating = (
      <div>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
      </div>
    );
  }
  return (
    <div className="user">
      <div className="review-image-container">
        <img src={img} alt="" />
      </div>
      <div className="user-info">
        <p className="user-name">{name}</p>
        <p>
          Rating : <span className="rating"> {ratings}</span>
        </p>
        <div className="fontawsome-icon">{rating}</div>
        <p>
          {description.length > 250
            ? description.slice(0, 250) + "  ......"
            : description}
        </p>
      </div>
    </div>
  );
};

export default Review;
