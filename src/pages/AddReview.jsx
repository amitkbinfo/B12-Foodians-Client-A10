import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { toast, Zoom } from "react-toastify";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddReview = (e) => {
    e.preventDefault();

    const form = e.target;

    const newReview = {
      food_name: form.food_name.value,
      food_image: form.food_image.value,
      restaurant_name: form.restaurant_name.value,
      restaurant_location: form.location.value,
      rating: parseFloat(form.rating.value),
      review: form.review.value,
      reviewer_name: user?.displayName,
      user_email: user?.email,
    };

    // post for sending data to the MongoDB
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review added successfully!", {
            position: "top-right",
            autoClose: 2000,
            transition: Zoom,
          });
          form.reset();
          navigate("/all-reviews");
        }
      })
      .catch(() => {
        toast.error("Failed to add review!", {
          position: "top-right",
          autoClose: 2000,
          transition: Zoom,
        });
      });
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-10 md:p-16 bg-green-50 rounded-2xl shadow">
      <Helmet>
        <title>Add Review</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center mb-6">
        Add Your Food Review 🍽️
      </h2>

      <form onSubmit={handleAddReview} className="space-y-4">
        {/* Food Name */}
        <input
          type="text"
          name="food_name"
          placeholder="Food Name"
          className="input input-bordered w-full"
          required
        />

        {/* Food Image */}
        <input
          type="url"
          name="food_image"
          placeholder="Food Image URL"
          className="input input-bordered w-full"
          required
        />

        {/* Restaurant Name */}
        <input
          type="text"
          name="restaurant_name"
          placeholder="Restaurant Name"
          className="input input-bordered w-full"
          required
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Restaurant Location"
          className="input input-bordered w-full"
          required
        />

        {/* Rating */}
        <input
          type="number"
          name="rating"
          placeholder="Rating (1 - 5)"
          min="1"
          max="5"
          step="0.1"
          className="input input-bordered w-full"
          required
        />

        {/* Review Text */}
        <textarea
          name="review"
          placeholder="Write your review..."
          className="textarea textarea-bordered w-full h-28"
          required
        ></textarea>

        {/* User Info (readonly) */}
        <div className="bg-white p-3 rounded-lg border border-success text-sm">
          <p>
            <span className="font-semibold">Name:</span> {user?.displayName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-neutral w-full hover:btn-success hover:text-black hover:shadow-none hover:border-none"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
