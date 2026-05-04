import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router";

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/nMSqDD7c/Pizza.jpg",
      title: "Discover Amazing Food 🍕",
      desc: "Explore top-rated dishes from local restaurants near you.",
    },
    {
      image: "https://i.ibb.co.com/xS5k7b77/Rolls.jpg",
      title: "Share Your Experience 📝",
      desc: "Write reviews and help others find the best meals.",
    },
    {
      image: "https://i.ibb.co.com/HL28qDTM/Coffee.jpg",
      title: "Find Hidden Gems ☕",
      desc: "Discover unique cafes and street food spots.",
    },
    {
      image: "https://i.ibb.co.com/XxFJQTpZ/Burger2.jpg",
      title: "Join the Foodians Community 🍔",
      desc: "Connect with food lovers and explore flavors together.",
    },
  ];

  return (
    <div className="mx-5">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Slide Container */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Image */}
              <img
                src={slide.image}
                alt=""
                className="w-full h-70 md:h-110 lg:h-150 object-cover"
              />

              {/* 🔥 Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col px-5 justify-center items-center text-white space-y-4 pt-20 md:pt-32">
                <h2 className="text-xl md:text-3xl font-bold leading-tight">
                  {slide.title}
                </h2>

                <p className="text-sm md:text-base text-center max-w-md text-gray-200">
                  {slide.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 pt-2">
                  <Link
                    to="/all-reviews"
                    className="btn btn-sm md:btn- btn-success text-black shadow-none border-none"
                  >
                    Explore Reviews
                  </Link>

                  <Link
                    to="/add-review"
                    className="btn btn-sm md:btn- btn-outline text-white border-white hover:bg-white hover:text-black"
                  >
                    Add Review
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
