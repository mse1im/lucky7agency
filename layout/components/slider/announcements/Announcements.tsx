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
import "../Slider.scss";
import ReactPlayer from "react-player";

const Announcements: React.FC<ISliderProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
          <h1>Merhaba Değerli Lucky 7 Agency Yayıncıları</h1>
          <span>
            23 Mart'ta başlayacak
            olan ajans içi etkinliklerimiz gelir seviyesine göre orta ve üst
            olarak ayrılmıştır. Her iki gelir grubunun da kazananlarının
            ödülleri aynı olup 1.'lik ödülü:6000 elmas , 2.'lik ödülü:3000 elmas
            ve 3.'lük ödülü:1500 elmas olarak belirlenmiştir. Etkinlik sürecinde
            yayınlarınız esnasında aldığınız elmaslara göre puanınız ve
            sıralamanız belirlenecektir. Herkese başarılar , iyi
            yayınlar dileriz.
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
            <a onClick={() => setIsModalOpen(true)} className="dark">
              <i className="ri-movie-2-line"></i> tanıtım videolarımız
            </a>
          </div>
          <div className="main-img">
            <Image
              src={sh}
              alt="Lucky 7 Agency"
              width={70}
              height={79}
              className="sh vertical"
              priority
            />
            <Image
              src={fb}
              alt="Lucky 7 Agency Facebook"
              width={100}
              height={101}
              className="fb horizontal"
              priority
            />
            <Image
              src={ig}
              alt="Lucky 7 Agency Instagram"
              width={83}
              height={81}
              className="ig vertical"
              priority
            />
            <Image
              src={yb}
              alt="Lucky 7 Agency Youtube"
              width={122}
              height={122}
              className="yb rotating"
              priority
            />
            <Image
              src={tk}
              alt="Lucky 7 Agency Tiktok"
              width={199}
              height={199}
              className="tk horizontal"
              priority
            />
          </div>
        </SwiperSlide>
      </Swiper>
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
export default Announcements;
