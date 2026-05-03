import { Star } from "lucide-react";
import { Link } from "react-router";

const ReviewCard = ({ review }) => {
  const {
    _id,
    food_image,
    food_name,
    restaurant_name,
    restaurant_location,
    reviewer_name,
    rating,
  } = review;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
      
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Food Name */}
        <h2 className="text-lg font-semibold text-gray-800">
          {food_name}
        </h2>

        {/* Restaurant */}
        <p className="text-sm text-gray-600">
          Restaurant: {restaurant_name}
        </p>

        {/* Location */}
        <p className="text-xs text-gray-400">
          📍 {restaurant_location}
        </p>

        {/* Reviewer + Rating */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-sm text-gray-700">
            Reviewer: <span className="font-semibold">{reviewer_name}</span>
          </p>

          <div className="flex items-center gap-1 text-yellow-500 font-medium">
            <Star size={16} fill="currentColor" />
            {rating}
          </div>
        </div>

        {/* Button */}
        <Link to={`/review-details/${_id}`} className="w-full mt-3 btn btn-neutral hover:btn-success hover:shadow-none hover:border-none hover:text-black text-sm py-2 rounded-lg transition">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;