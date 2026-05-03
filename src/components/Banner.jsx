import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

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
            src={"https://i.ibb.co.com/nMSqDD7c/Pizza.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl object-cover w-full object-center h-70 md:h-110 lg:h-150"
            src={"https://i.ibb.co.com/xS5k7b77/Rolls.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl object-cover w-full object-top h-70 md:h-110 lg:h-150"
            src={"https://i.ibb.co.com/HL28qDTM/Coffee.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl object-cover w-full object-top h-70 md:h-110 lg:h-150"
            src={"https://i.ibb.co.com/XxFJQTpZ/Burger2.jpg"}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
