import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(`http://localhost:3000/my-reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user]);

  // Delete my reviews
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this Review!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted successfully!",
                text: "Your review has been deleted.",
                icon: "success",
                confirmButtonColor: "#00D390",
              });
              const remainingReviews = reviews.filter((r) => r._id !== id);
              setReviews(remainingReviews);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <Helmet>
        <title>My Reviews</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center mb-6">My Reviews 📝</h2>

      <div className="overflow-x-auto rounded-t-lg">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            You haven’t added any reviews yet.
          </p>
        ) : (
          <table className="table w-full">
            <thead className="bg-green-100">
              <tr>
                <th>Image</th>
                <th>Food</th>
                <th>Restaurant</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {reviews.map((review) => (
                <tr key={review._id}>
                  <td>
                    <img
                      src={review.food_image}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>

                  <td>{review.food_name}</td>

                  <td>{review.restaurant_name}</td>

                  <td>{new Date(review.createdAt).toLocaleString()}</td>

                  <td className="space-x-2">
                    {/* Edit */}
                    <Link to={`/update-review/${review._id}`}>
                      <button className="btn btn-sm btn-info shadow-none border-none">
                        Edit
                      </button>
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="btn btn-sm btn-error shadow-none border-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
