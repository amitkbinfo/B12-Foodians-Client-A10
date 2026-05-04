import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { toast, Zoom } from "react-toastify";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "./LoadingSpinner";

const MyFavorites = () => {
  const { user } = useContext(AuthContext);

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch favorites
  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);

    fetch(`http://localhost:3000/favorites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  // Remove favorite
  const handleRemove = (id) => {
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.warning("Removed from favorites!", {
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

          const remaining = favorites.filter((f) => f._id !== id);
          setFavorites(remaining);
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <Helmet>
        <title>My Favorites</title>
      </Helmet>

      <h2 className="text-2xl font-bold text-center mb-8">My Favorites ❤️</h2>

      {/* Loading */}
      {loading ? (
        <LoadingSpinner />
      ) : favorites.length === 0 ? (
        // Empty State
        <div className="text-center">
          <p className="text-gray-500 mb-4">No favorites added yet.</p>

          <Link to="/all-reviews" className="btn btn-success text-black">
            Explore Reviews
          </Link>
        </div>
      ) : (
        // Grid
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-3"
            >
              {/* Image */}
              <img
                src={item.food_image}
                alt={item.food_name}
                className="w-full h-40 object-cover rounded-lg"
              />

              {/* Content */}
              <div className="mt-3 space-y-1">
                <h3 className="font-semibold text-lg">{item.food_name}</h3>

                <p className="text-sm text-gray-500">{item.restaurant_name}</p>

                <p className="text-yellow-500 font-medium">⭐ {item.rating}</p>
              </div>

              {/* Actions */}
              <div className="flex justify-between mt-4">
                <Link
                  to={`/review-details/${item.reviewId}`}
                  className="btn btn-sm btn-neutral hover:btn-success hover:text-black"
                >
                  Details
                </Link>

                <button
                  onClick={() => handleRemove(item._id)}
                  className="btn btn-sm btn-error"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
