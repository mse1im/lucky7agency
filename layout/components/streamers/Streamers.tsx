import React from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import "./Streamers.scss";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import Container from "../container/Container";

interface IStreamer {
  path: string;
  name: string;
  title: string;
  backgroundImage: string;
  socialMedia: {
    [key: string]: {
      link: string;
      iconClass: string;
    };
  };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Streamers: React.FC = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    "https://lucky7agency.com.tr/json/streamers.json",
    fetcher
  );

  const handleSlideClick = (path: string) => {
    router.push(path);
  };

  if (error) return <div className="error">Failed to load streamers.</div>;
  if (!data)
    return (
      <>
        <div className="spinner">
          <i className="ri-loader-fill" />
        </div>
      </>
    );

  return (
    <section className="streamers" id="streamers">
      <Container>
        <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>Yayıncılarımız</h2>
        </div>
        <div className="getastreamer">
          <Link href="/streamers">Tüm yayıncıları gör</Link>
        </div>
      </Container>
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="slider"
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
            slidesPerView: 3,
            spaceBetween: 250,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 250,
          },
          1800: {
            slidesPerView: 5,
            spaceBetween: 250,
          },
          2000: {
            slidesPerView: 6,
            spaceBetween: 250,
          },
        }}
      >
        {data?.streamers.map((streamer: IStreamer, index: number) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.00), #140E3C), url(${streamer.backgroundImage})`,
              }}
              onClick={() => handleSlideClick(streamer.path)}
            >
              <div className="social-media">
                <ul>
                  {Object.entries(streamer.socialMedia).map(
                    ([platform, { link, iconClass }]) => (
                      <li key={platform}>
                        <a href={link} target="_blank">
                          <i className={iconClass}></i>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="info">
                <h2>{streamer.name}</h2>
                <h3>{streamer.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Streamers;
