import { useEffect, useState } from "react";

const useUserReview = () => {
  const [userReview, setUserReview] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((res) => res.json())
      .then((data) => setUserReview(data));
  }, []);
  return [userReview, setUserReview];
};

export { useUserReview };
