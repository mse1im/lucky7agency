import React from "react";
import Container from "../container/Container";
import "./Streamers.scss";
import { useRouter } from "next/navigation";
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
import useSWR from "swr";

interface ISocialMediaLink {
  link: string;
  iconClass: string;
}

interface ISocialMedia {
  [key: string]: ISocialMediaLink;
}

interface IStreamer {
  path: string;
  name: string;
  title: string;
  backgroundImage: string;
  socialMedia: ISocialMedia;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Streamers: React.FC = () => {
  const { data, error } = useSWR(
    "https://lucky7agency.com.tr/json/streamers.json",
    fetcher,
    {
      onSuccess: (data) => {
        console.log("Veri başarıyla alındı:", data);
      },
    }
  );

  const streamers: IStreamer[] = data?.streamers ?? [];

  const router = useRouter();

  const handleSlideClick = (path: string) => {
    router.push(path);
  };

  if (error && !data)
    return (
      <div>
        <div className="spinner">
          <i className="ri-loader-fill" />
        </div>
      </div>
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
        {streamers.map((streamer, index) => (
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
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="575"
        height="631"
        viewBox="0 0 553 1191"
        fill="none"
      >
        <g filter="url(#filter0_f_33_14)">
          <path
            d="M506.419 793.528C470.614 841.714 453.198 878.329 448.965 890.614L300.019 334.742C326.242 328.772 387.346 313.878 421.977 302.064C465.266 287.295 438.321 388.53 589.592 388.843C740.863 389.156 617.49 434.185 542.591 532.776C467.692 631.367 560.954 644.407 616.802 701.978C672.649 759.55 551.174 733.296 506.419 793.528Z"
            fill="url(#paint0_linear_33_14)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_33_14"
            x="0.0195312"
            y="0.591797"
            width="961.338"
            height="1190.02"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_33_14"
            />
          </filter>
          <linearGradient
            id="paint0_linear_33_14"
            x1="599.012"
            y1="811.153"
            x2="468.332"
            y2="323.449"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E6BC31" />
            <stop offset="1" stopColor="#2D2AD7" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Streamers;
