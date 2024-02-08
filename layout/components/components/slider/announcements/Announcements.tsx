"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "../Slider.scss";

const Announcements: React.FC<ISliderProps> = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="Announcements"
    >
      <SwiperSlide>
        <div className="swiper-slide-title">
          <h2>
            <b>DUYURULAR</b>
          </h2>
        </div>
        <h1>duyurular</h1>
        <span>
          Siz de TikTok yayıncısıysanız ya da yayıncı olmak istiyorsanız, Temmuz
          Ajans ile TikTok’ta milyonlarca insanın dikkatini çekebilir ve
          kazançlarınızı on kata kadar arttırabilirsiniz. TikTok yayıncısıysanız
          ya da yayıncı olmak istiyorsanız, Temmuz Ajans ile TikTok’ta
          milyonlarca insanın dikkatini çekebilir.
        </span>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-title">
          <h2>
            <b>DUYURULAR</b>
          </h2>
        </div>
        <h1>duyurular</h1>
        <span>
          Siz de TikTok yayıncısıysanız ya da yayıncı olmak istiyorsanız, Temmuz
          Ajans ile TikTok’ta milyonlarca insanın dikkatini çekebilir ve
          kazançlarınızı on kata kadar arttırabilirsiniz. TikTok yayıncısıysanız
          ya da yayıncı olmak istiyorsanız, Temmuz Ajans ile TikTok’ta
          milyonlarca insanın dikkatini çekebilir.
        </span>
      </SwiperSlide>
    </Swiper>
  );
};
export default Announcements;
