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
    fetch("https://foodians-server.vercel.app/reviews")
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

    fetch(`https://foodians-server.vercel.app/favorites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, [user]);

  // for loading
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  //   Implement Search
  const handleSearch = (e) => {
    e.preventDefault();
    const searchByName = e.target.search.value;
    setLoading(true);
    fetch(`https://foodians-server.vercel.app/search?search=${searchByName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
        setLoading(false);
      });
  };
  return (
    <div className="mx-5">
      <Helmet>
        <title>All Review</title>
      </Helmet>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        All Food Reviews 🍽️
      </h2>

      {/* Search by Name */}
      <form onSubmit={handleSearch} className="flex justify-center mb-5">
        <label className="input border-green-600 outline-none rounded-l-2xl rounded-r-none">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" name="search" placeholder="Search" />
        </label>
        <button className="btn btn-success border-none shadow-none text-black rounded-r-2xl rounded-l-none">
          Search
        </button>
      </form>

      {reviews.length === 0 ? (
        <h2 className="text-xl text-center mt-20 font-semibold text-gray-600">
          No results found 😔
        </h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <ReviewCard
              review={review}
              favorites={favorites}
              key={review._id}
            ></ReviewCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReviews;
