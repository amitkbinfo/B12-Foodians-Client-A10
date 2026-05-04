import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Star, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { MdFavorite } from "react-icons/md";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { toast, Zoom } from "react-toastify";

const ReviewDetails = () => {
  const review = useLoaderData();
  const {user} = useContext(AuthContext);
  const [favorite, setFavorite] = useState(false);

  const {
    _id,
    food_image,
    food_name,
    restaurant_name,
    restaurant_location,
    reviewer_name,
    rating,
    review: description,
  } = review;

  const handleFavorite = () => {
    if(!user?.email) return;

    const favoriteData = {
        reviewId: _id,
      user_email: user.email,
      food_name,
      food_image,
      restaurant_name,
      rating,
    }

    // send data to the favorite DB
    fetch("http://localhost:3000/favorites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favoriteData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setFavorite(true);
          toast.success("Added to favorites ❤️!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        } else if (data.message) {
          toast.info("Already added to ❤️!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        }
      });
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>{food_name}</title>
      </Helmet>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🍽️ Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg group">
          <img
            src={food_image}
            alt={food_name}
            className="w-full h-80 md:h-110 object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* 📝 Details */}
        <div className="space-y-6">

          {/* Food Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            {food_name}
          </h1>

          {/* Restaurant */}
          <p className="text-lg text-gray-600">
            🍽️ <span className="font-semibold text-green-600">{restaurant_name}</span>
          </p>

          {/* Location */}
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin size={16} /> {restaurant_location}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-500 text-lg font-semibold">
            <Star size={20} fill="currentColor" />
            {rating}
            <span className="text-gray-400 text-sm ml-1">(User Rating)</span>
          </div>

          {/* Reviewer */}
          <p className="text-gray-700 text-sm">
            Reviewed by:{" "}
            <span className="font-semibold text-gray-800">
              {reviewer_name}
            </span>
          </p>

          {/* Review */}
          <div className="bg-green-50 p-5 rounded-xl border border-green-100">
            <h3 className="font-semibold text-gray-800 mb-2">
              Review
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {description}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-2">

            {/* Favorite Button */}
            <button
              onClick={handleFavorite}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white border border-gray-200 hover:border-red-400 hover:text-red-500 transition shadow-sm"
            >
              <MdFavorite
                className={`text-xl ${
                  favorite ? "text-red-500" : ""
                }`}
              />
              {favorite ? "Favorited" : "Add to Favorite"}
            </button>

            {/* Explore more */}
            <Link to={"/all-reviews"} className="btn btn-success text-black border-none shadow-none">
              Explore More
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;