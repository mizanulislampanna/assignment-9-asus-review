import React from "react";
import useUserReview from "../Hooks/useUserReview";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [userReview, setUserReview] = useUserReview([]);
  return (
    <div className="user-review-container">
      {userReview.map((user) => (
        <Review key={user.id} user={user}></Review>
      ))}
    </div>
  );
};

export default Reviews;
