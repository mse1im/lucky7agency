"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "../Slider.scss";

const Announcements: React.FC<ISliderProps> = () => {
  const paginationStyle = {
    fontSize: "18px",
    color: "#FFD700",
  };

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      // pagination={{
      //   clickable: true,
      //   type: "custom",
      //   renderCustom: (swiper, current, total) => {
      //     return `
      //       <div class="swiper-pagination-current">${current
      //         .toString()
      //         .padStart(2, "0")}
      //       <div class="swiper-pagination-current-bar"></div>
      //       </div>
      //       <div class="swiper-pagination-total">
      //       <div class="swiper-pagination-total-bar"></div>
      //       ${total
      //         .toString()
      //         .padStart(2, "0")}
      //       </div>`;
      //   },
      // }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="announcements"
    >
      <SwiperSlide>
        <div className="swiper-slide-title">
          <h2>
            <b>DUYURULAR</b>
          </h2>
        </div>
        <span>
          Duyurularımızı buradan takip edebilirsiniz.
        </span>
      </SwiperSlide>
    </Swiper>
  );
};
export default Announcements;
