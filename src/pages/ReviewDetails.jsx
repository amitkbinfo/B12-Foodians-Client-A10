import React from "react";
import { useLoaderData } from "react-router";
import { Star, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ReviewDetails = () => {
  const review = useLoaderData();

  const {
    food_image,
    food_name,
    restaurant_name,
    restaurant_location,
    reviewer_name,
    rating,
    review: description,
  } = review;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
        <Helmet>
        <title>{food_name}</title>
      </Helmet>
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* 🔥 Image Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={food_image}
            alt={food_name}
            className="w-full h-85 md:h-110 object-cover"
          />
        </div>

        {/* 🔥 Details Section */}
        <div className="space-y-5">
          
          {/* Food Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {food_name}
          </h1>

          {/* Restaurant */}
          <p className="text-lg text-gray-600">
            🍽️ <span className="font-medium">{restaurant_name}</span>
          </p>

          {/* Location */}
          <p className="flex items-center gap-2 text-gray-500">
            <MapPin size={16} /> {restaurant_location}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-500 text-lg font-semibold">
            <Star size={20} fill="currentColor" />
            {rating}
          </div>

          {/* Reviewer */}
          <p className="text-gray-700">
            <span className="font-semibold">Reviewed by:</span> {reviewer_name}
          </p>

          {/* Review Description */}
          <div className="bg-gray-50 p-4 rounded-xl border">
            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition">
              Order Now
            </button>

            <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
              Add to Favorites
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ReviewDetails;