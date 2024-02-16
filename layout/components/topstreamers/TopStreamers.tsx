"use client";
import { useRouter } from "next/navigation";
import Container from "../container/Container";
import "./TopStreamers.scss";

export const streamers = [
  {
    rank:1,
    name: "Guban Yılmaz",
    title: "Yayıncı",
    path: "/streamer/guban-jies",
    detail: "gubanım söndürüyon",
    backgroundImage:
      "https://lucky7agency.com.tr/wp-content/uploads/2023/09/barisgg-768x768.png",
    socialMedia: {
      instagram: {
        link: "https://github.com/mse1im",
        iconClass: "ri-instagram-line",
      },
      twitter: { link: "#", iconClass: "ri-twitter-line" },
      tiktok: { link: "#", iconClass: "ri-tiktok-fill" },
    },
  },
  {
    rank:2,
    name: "Mehmet Selim",
    title: "Yayıncı",
    path: "/streamer/mehmet-selim",
    detail: "gubanım söndürüyon",
    backgroundImage: "https://webdevetc.com/images/tutorials/e_background.jpg",
    socialMedia: {
      instagram: { link: "#", iconClass: "ri-instagram-line" },
      twitter: { link: "#", iconClass: "ri-twitter-line" },
      tiktok: { link: "#", iconClass: "ri-tiktok-fill" },
    },
  },
  {
    rank:3,
    name: "Furkan Yaşar",
    title: "Yayıncı",
    path: "/streamer/furkan-yasar",
    detail: "gubanım söndürüyon",
    backgroundImage: "https://webdevetc.com/images/tutorials/e_background.jpg",
    socialMedia: {
      instagram: { link: "#", iconClass: "ri-instagram-line" },
      twitter: { link: "#", iconClass: "ri-twitter-line" },
      tiktok: { link: "#", iconClass: "ri-tiktok-fill" },
    },
  },
];

const TopStreamers: React.FC<IStreamersProps> = () => {
  const sortedStreamers = [...streamers].sort((a, b) => a.rank - b.rank);
  const router = useRouter();

  const handleSlideClick = (path: any) => {
    router.push( `${path}`);
  };

  const finalOrderStreamers = [
    sortedStreamers[1],
    sortedStreamers[0],
    sortedStreamers[2],
  ];

  const getClassNameForRank = (rank: any) => {
    switch (rank) {
      case 1:
        return "first";
      case 2:
        return "second";
      case 3:
        return "third";
      default:
        return ""; 
    }
  };

  return (
    <section className="top-streamers" id="top-streamers">
      <Container>
        <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>Top Yayıncılar</h2>
        </div>
      </Container>
      <div className="slider">
        <div className="slide-track">
          {finalOrderStreamers.map((streamer, index) => (
            <div
              key={index}
              className={`slide ${getClassNameForRank(streamer.rank)}`}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.00), #140E3C), url(${streamer.backgroundImage})`,
              }}
              onClick={() => handleSlideClick(streamer.path)}
            >
              <div className="trophy">
                {streamer.rank === 1 && <i className="ri-trophy-fill"><span>1</span></i>}
                {streamer.rank === 2 && <i className="ri-trophy-line"><span>2</span></i>}
                {streamer.rank === 3 && <i className="ri-trophy-line"><span>3</span></i>}
              </div>
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
          ))}
        </div>
        <div className="slide-track slide-track-second">
          {finalOrderStreamers.map((streamer, index) => (
            <div
              key={index}
              className={`slide ${getClassNameForRank(streamer.rank)}`}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.00), #140E3C), url(${streamer.backgroundImage})`,
              }}
              onClick={() => handleSlideClick(streamer.path)}
            >
              <div className="trophy">
                {streamer.rank === 1 && <i className="ri-trophy-fill"><span>1</span></i>}
                {streamer.rank === 2 && <i className="ri-trophy-line"><span>2</span></i>}
                {streamer.rank === 3 && <i className="ri-trophy-line"><span>3</span></i>}
              </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};
export default TopStreamers;
