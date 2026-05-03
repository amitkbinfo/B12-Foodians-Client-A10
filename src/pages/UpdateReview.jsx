import { useLoaderData, useNavigate } from "react-router";
import { toast, Zoom } from "react-toastify";

const UpdateReview = () => {
  const review = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedData = {
      food_name: form.food_name.value,
      food_image: form.food_image.value,
      restaurant_name: form.restaurant_name.value,
      restaurant_location: form.location.value,
      rating: parseFloat(form.rating.value),
      review: form.review.value,
    };

    fetch(`http://localhost:3000/reviews/${review._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Review updated successfully!", {
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
        navigate("/my-reviews");
      })
      .catch(() => {
        
      });
  };

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      {/* Card */}
      <div className="bg-green-50 shadow-lg rounded-2xl p-6 md:p-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Update Your Review ✏️
        </h2>

        <form onSubmit={handleUpdate} className="space-y-5 px-10">
          {/* Grid Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label">Food Name</label>
              <input
                defaultValue={review.food_name}
                name="food_name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Rating (1–5)</label>
              <input
                defaultValue={review.rating}
                name="rating"
                type="number"
                min="1"
                max="5"
                step="0.1"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Restaurant Name</label>
              <input
                defaultValue={review.restaurant_name}
                name="restaurant_name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Location</label>
              <input
                defaultValue={review.restaurant_location}
                name="location"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="label">Food Image URL</label>
            <input
              defaultValue={review.food_image}
              name="food_image"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Preview Image (nice UX touch) */}
          {review.food_image && (
            <div className="mt-2">
              <img
                src={review.food_image}
                alt="preview"
                className="w-full h-52 object-cover rounded-xl"
              />
            </div>
          )}

          {/* Review Text */}
          <div>
            <label className="label">Your Review</label>
            <textarea
              defaultValue={review.review}
              name="review"
              className="textarea textarea-bordered w-full h-28"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              className="btn btn-neutral w-full hover:btn-success hover:text-black hover:shadow-none hover:border-none flex-1"
            >
              Update Review
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-outline flex-1"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
