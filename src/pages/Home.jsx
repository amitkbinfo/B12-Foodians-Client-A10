import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import FeaturedReviews from "./FeaturedReviews";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  const [featuredReviews, setFeaturedReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/featured-reviews")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-10">
      <Banner></Banner>
      {/* For conditionally use loading & reviews */}
      {
        loading ? 
        <LoadingSpinner></LoadingSpinner>
        :

      <FeaturedReviews featuredReviews={featuredReviews}></FeaturedReviews>
      }
    </div>
  );
};

export default Home;
