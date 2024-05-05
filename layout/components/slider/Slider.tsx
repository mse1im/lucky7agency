/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sh from "@/public/shadow-img.png";
import fb from "@/public/fb3D.png";
import yb from "@/public/youtube3D.png";
import ig from "@/public/insta3D.png";
import tk from "@/public/pngwing.com_.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./Slider.scss";
import Announcements from "./announcements/Announcements";
import ReactPlayer from "react-player";

const Slider: React.FC<ISliderProps> = () => {
  const [isAnnouncements, setIsAnnouncements] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="slider-option">
        <span
          className={isAnnouncements ? "active" : ""}
          onClick={() => setIsAnnouncements(true)}
        >
          Duyurular
        </span>
        <p>|</p>
        <span
          className={!isAnnouncements ? "active" : ""}
          onClick={() => setIsAnnouncements(false)}
        >
          Slider
        </span>
      </div>
      {isAnnouncements ? (
        <Announcements />
      ) : (
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-slide-title">
              <h2>
                LUCKY7 <b>AGENCY</b>
              </h2>
            </div>
            <span>
              Etkileşim ve Başarı! TikTok'ta Lucky7Agency ile öne çıkın. Keşfet
              Paylaş! Lucky7Agency ile TikTok'ta sınırları zorla. İlgi Çekici
              İçerikler, Etkili Çözümler ! Lucky7Agency ile TikTok'ta büyük bir
              etki sağlayın.
            </span>
            <div className="buttons">
              <a
                href="https://www.instagram.com/lucky7agencyofficial/"
                target="_blank"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.tiktok.com/@lucky7agencyofficial?lang=tr-TR"
                target="_blank"
              >
                <i className="ri-tiktok-fill"></i>
              </a>
              <a href="https://discord.gg/lucky7agency" target="_blank">
                <i className="ri-discord-fill"></i>
              </a>
              <div onClick={() => setIsModalOpen(true)} className="dark">
                <i className="ri-movie-2-line"></i> tanıtım videolarımız
              </div>
            </div>
            <div className="main-img">
              <Image
                src={sh}
                alt="Lucky 7 Agency"
                width={70}
                height={79}
                loading="lazy"
                className="sh vertical"
              />
              <Image
                src={fb}
                alt="Lucky 7 Agency Facebook"
                width={100}
                loading="lazy"
                height={101}
                className="fb horizontal"
              />
              <Image
                src={ig}
                alt="Lucky 7 Agency Instagram"
                width={83}
                loading="lazy"
                height={81}
                className="ig vertical"
              />
              <Image
                src={yb}
                alt="Lucky 7 Agency Youtube"
                width={122}
                height={122}
                loading="lazy"
                className="yb rotating"
              />
              <Image
                src={tk}
                alt="Lucky 7 Agency Tiktok"
                width={199}
                height={199}
                loading="lazy"
                className="tk horizontal"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      )}
      {isModalOpen && (
        <section className="modal">
          <div className="modal-content">
            <button onClick={() => setIsModalOpen(false)} className="close">
              <i className="ri-close-line"></i>
            </button>
            <h2>Tanıtım Videolarımız</h2>
            <Swiper
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="videos"
            >
              <SwiperSlide>
                <ReactPlayer
                  url="https://youtube.com/shorts/sj7k3Ad0Kfg?feature=share"
                  className="react-player"
                  playing={false}
                  controls={true}
                  width="90%"
                  height="500px"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ReactPlayer
                  url="https://youtube.com/shorts/sTmXsUI11Ds?feature=share"
                  className="react-player"
                  playing={false}
                  controls={true}
                  width="90%"
                  height="500px"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ReactPlayer
                  url="https://youtube.com/shorts/NKaLUvG_4Rw?feature=share"
                  className="react-player"
                  playing={false}
                  controls={true}
                  width="90%"
                  height="500px"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ReactPlayer
                  url="https://youtube.com/shorts/-Al3pBQP-2w?feature=share"
                  className="react-player"
                  playing={false}
                  controls={true}
                  width="90%"
                  height="500px"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ReactPlayer
                  url="https://youtube.com/shorts/hVRrOZVpvVE?feature=share"
                  className="react-player"
                  playing={false}
                  controls={true}
                  width="90%"
                  height="500px"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
};
export default Slider;
