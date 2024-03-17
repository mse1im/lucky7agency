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
          // pagination={{
          //   clickable: true,
          //   type: "custom",
          //   renderCustom: (swiper, current, total) => {
          //     return `
          //     <div class="swiper-pagination-current">${current
          //       .toString()
          //       .padStart(2, "0")}
          //     <div class="swiper-pagination-current-bar"></div>
          //     </div>
          //     <div class="swiper-pagination-total">
          //     <div class="swiper-pagination-total-bar"></div>
          //     ${total.toString().padStart(2, "0")}
          //     </div>`;
          //   },
          // }}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="325"
                height="14"
                viewBox="0 0 325 14"
                fill="none"
              >
                <path
                  d="M298.459 4.34063C291.384 3.7653 284.306 3.30176 277.23 2.78855C274.896 2.61387 272.546 2.56313 270.211 2.45059C265.14 2.20438 260.07 1.97064 254.998 1.72444C252.179 1.58899 249.348 1.44089 246.527 1.31785C245.704 1.27522 244.881 1.25746 244.057 1.23966C242.217 1.19995 240.375 1.18504 238.535 1.15775C230.167 0.989552 221.788 0.821121 213.42 0.640463C211.423 0.597355 209.436 0.604187 207.437 0.585912C202.496 0.541397 197.565 0.509527 192.636 0.465292C187.064 0.419572 181.506 0.324466 175.932 0.353299C166.918 0.382461 157.916 0.424304 148.902 0.453466C143.68 0.477469 138.472 0.439622 133.249 0.53821C124.256 0.716953 115.275 0.883566 106.283 1.04993C101.375 1.14285 96.4674 1.19851 91.5571 1.3784C82.2582 1.71216 72.9595 2.03349 63.6606 2.36725C58.6898 2.54583 53.7206 2.64987 48.7588 2.97781C39.4904 3.58568 30.2341 4.19381 20.9656 4.80169C18.9639 4.93246 16.9623 5.06334 14.9606 5.1941C10.9693 5.45598 6.97385 5.91667 2.99232 6.29061C2.73724 6.32245 2.48216 6.35417 2.23918 6.38624C1.76402 6.51266 1.33492 6.75206 0.976086 7.1048C0.444022 7.62779 0.125684 8.35425 0.109276 9.12454C0.0931333 9.88236 0.379978 10.6343 0.889015 11.1923C1.35095 11.687 2.16482 12.152 2.86899 12.0803C7.68815 11.625 12.4957 11.1445 17.312 10.8259C21.7884 10.5371 26.253 10.2358 30.7294 9.94713C35.6062 9.62973 40.4829 9.31244 45.3597 8.99504C47.3251 8.86346 49.2915 8.68221 51.2677 8.61301C58.8692 8.34206 66.4705 8.08348 74.0718 7.82501C78.8122 7.65383 83.5524 7.49513 88.2928 7.32395C90.2568 7.25452 92.2093 7.15991 94.1728 7.11532C101.699 6.96704 109.237 6.84386 116.763 6.72043C121.331 6.64502 125.888 6.55694 130.457 6.48153C131.996 6.45262 133.524 6.41103 135.062 6.40695C143.191 6.38352 151.32 6.37257 159.45 6.36161C163.993 6.34782 168.523 6.34615 173.067 6.33235C174.679 6.32989 176.302 6.30278 177.912 6.32509C186.294 6.41902 194.675 6.51291 203.057 6.60685C208.29 6.65766 213.51 6.72062 218.74 6.84593C227.64 7.06293 236.539 7.26746 245.427 7.48418C247.183 7.52208 248.937 7.63453 250.691 7.73452C255.604 7.98974 260.506 8.24472 265.418 8.49989C269.097 8.69117 272.775 8.88246 276.467 9.07402C279.08 9.205 281.68 9.46001 284.292 9.66555C291.972 10.2539 299.652 10.8672 307.319 11.5175C309.265 11.6838 311.211 11.875 313.158 12.0661C315.25 12.2729 317.342 12.4672 319.419 12.7482C319.745 12.805 320.058 12.8739 320.384 12.9555C321.204 13.1472 321.991 13.1145 322.739 12.6956C323.427 12.3002 323.949 11.6279 324.184 10.8498C324.655 9.21929 323.723 7.44653 322.135 6.95236C320.739 6.52446 319.29 6.33159 317.851 6.15137C316.861 6.03056 315.882 5.89756 314.892 5.77674C312.995 5.53692 311.084 5.39623 309.185 5.20607C305.607 4.86782 302.026 4.62895 298.459 4.34063Z"
                  fill="#E6BC31"
                />
              </svg>
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
