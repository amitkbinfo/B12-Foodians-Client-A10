import { Star } from "lucide-react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { toast, Zoom } from "react-toastify";

const ReviewCard = ({ review, favorites }) => {
  const {
    _id,
    food_image,
    food_name,
    restaurant_name,
    restaurant_location,
    reviewer_name,
    rating,
  } = review;
  const { user } = useContext(AuthContext);

  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    if (!user?.email) {
      return;
    }

    // Favorite card data
    const favoriteReview = {
      reviewId: _id,
      user_email: user.email,
      food_name,
      food_image,
      restaurant_name,
      rating,
    };

    //   send favorite review to the Mongodb
    fetch("https://foodians-server.vercel.app/favorites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favoriteReview),
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
  };

  //  for favorite persist
  useEffect(() => {
    if (!favorites.length) {
      return;
    }
    const exists = favorites.find((fav) => fav.reviewId === _id);

    if (exists) {
      setFavorite(true);
    }
  }, [favorites, _id]);
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col h-full">
      {" "}
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-50 md:h-80 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      {/* Content */}
      <div className="p-4 space-y-2 flex flex-col grow">
        {" "}
        {/* Food Name */}
        <h2 className="text-lg font-semibold text-gray-800">{food_name}</h2>
        {/* Restaurant and Favorite*/}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Restaurant: {restaurant_name}</p>
          <button onClick={handleFavorite} className="cursor-pointer">
            {" "}
            {favorite ? (
              <MdFavorite className="text-red-500 text-2xl" />
            ) : (
              <MdFavorite className="text-2xl hover:text-red-500" />
            )}
          </button>
        </div>
        {/* Location */}
        <p className="text-xs text-gray-400">📍 {restaurant_location}</p>
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
        <Link
          to={`/review-details/${_id}`}
          className="w-full mt-auto btn btn-neutral hover:btn-success hover:shadow-none hover:border-none hover:text-black text-sm py-2 rounded-lg transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
