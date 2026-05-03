import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import LoadingSpinner from "./LoadingSpinner";
import { Helmet } from "react-helmet-async";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // for load all reviews
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // for loading
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="mx-5">
      <Helmet>
        <title>All Review</title>
      </Helmet>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        All Food Reviews 🍽️
      </h2>

      {
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <ReviewCard review={review} key={review._id}></ReviewCard>
          ))}
        </div>
      }
    </div>
  );
};

export default AllReviews;
