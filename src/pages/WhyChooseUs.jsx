import { FaUtensils, FaStar, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="bg-green-50 py-16 mt-16 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-10">
        Why Choose Foodians?
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-5">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaUtensils className="text-green-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Discover Foods</h3>
          <p className="text-sm text-gray-500 mt-2">
            Explore restaurants, street food, and hidden gems.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaStar className="text-yellow-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Real Reviews</h3>
          <p className="text-sm text-gray-500 mt-2">
            Honest feedback from real food lovers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <FaUsers className="text-blue-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Community Driven</h3>
          <p className="text-sm text-gray-500 mt-2">
            Join a growing food-loving community.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;