import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Slider() {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-14-Pro-Max-Silver-8456.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://brotherselectronicsbd.com/image/cache/catalog/demo/Accessories/Sony/PS5/PS5%20(1)-800x800.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.gadgetandgear.com/tmp/product/20211110_1636549088_550946.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
