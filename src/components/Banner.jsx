import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            className="rounded-xl object-cover w-full object-center h-70 md:h-110 lg:h-150"
            src={slide1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl object-cover w-full object-center h-70 md:h-110 lg:h-150"
            src={slide2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl object-cover w-full object-top h-70 md:h-110 lg:h-150"
            src={slide3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl object-cover w-full object-top h-70 md:h-110 lg:h-150"
            src={slide4}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
