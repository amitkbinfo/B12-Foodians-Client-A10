import React, { useContext, useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import LoadingSpinner from "./LoadingSpinner";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const AllReviews = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
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
  // 🔥 Load favorites (IMPORTANT)
  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/favorites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, [user]);

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
            <ReviewCard
              review={review}
              favorites={favorites}
              key={review._id}
            ></ReviewCard>
          ))}
        </div>
      }
    </div>
  );
};

export default AllReviews;
