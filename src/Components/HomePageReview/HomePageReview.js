import React from "react";
import { Link } from "react-router-dom";
import { useUserReview } from "../Hooks/useUserReview";
import Review from "../Review/Review";
import "./HomePageReview.css";

const HomePageReview = () => {
  const [userReview, setUserReview] = useUserReview([]);
  const homePageReview = userReview.slice(0, 3);
  return (
    <div>
      <h2 className="home-review-heading">What Our Coustomer Say</h2>
      <div className="home-review-container">
        {homePageReview.map((user) => (
          <Review user={user} n key={user.id}></Review>
        ))}
      </div>
      <div className="see-all-btn-container">
        <Link className="see-all-btn" to="/reviews">
          See All Reviews
        </Link>
      </div>
    </div>
  );
};

export default HomePageReview;
