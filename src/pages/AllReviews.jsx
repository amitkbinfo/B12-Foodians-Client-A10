import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // for load all reviews
  useEffect(() => {
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
    return (
      <div className="text-center py-20 text-gray-500">Loading reviews...</div>
    );
  }

  return (
    <div className='mx-5'>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        All Food Reviews 🍽️
      </h2>

      {
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {
            reviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)
          }
        </div>
      }
    </div>
  );
};

export default AllReviews;
