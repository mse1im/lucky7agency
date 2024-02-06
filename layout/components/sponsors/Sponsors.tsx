"use client";
import Image from "next/image";
import Container from "../container/Container";
import sponsor from "@/public/sponsor.png";
import "./Sponsors.scss";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

const Sponsors: React.FC<ISponsorsProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="sponsors">
        <Container>
          <div className="title">
            <span>Lucky 7 Agency</span>
            <h2>Sponsorlarımız</h2>
          </div>
          <div className="getanoffer">
            <button onClick={() => setIsModalOpen(true)}>
              <i className="ri-shake-hands-line"></i> teklif al
            </button>
          </div>
        </Container>
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay]}
          className="Sponsors"
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <Image src={sponsor} alt="Siemens" width={221} height={35} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sponsor} alt="Siemens" width={221} height={35} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sponsor} alt="Siemens" width={221} height={35} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sponsor} alt="Siemens" width={221} height={35} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sponsor} alt="Siemens" width={221} height={35} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sponsor} alt="Siemens" width={221} height={35} />
          </SwiperSlide>
        </Swiper>
      </section>
      {isModalOpen && (
        <section className="modal">
          <div className="modal-content">
            <button onClick={() => setIsModalOpen(false)} className="close">
              <i className="ri-close-line"></i>
            </button>
            <h2>Teklif Al</h2>
          </div>
        </section>
      )}
    </>
  );
};
export default Sponsors;
