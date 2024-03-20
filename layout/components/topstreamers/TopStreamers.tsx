"use client";
import Container from "../container/Container";
import "./TopStreamers.scss";
import { useEffect, useState } from "react";

interface IStreamer {
  name: string;
  title: string;
  rank: number;
  backgroundImage: string;
  path: string;
  socialMedia: {
    [key: string]: {
      link: string;
      iconClass: string;
    };
  };
}

const TopStreamers: React.FC<IStreamersProps> = () => {
  const [streamers, setStreamers] = useState<IStreamer[]>([]);
  const [streamers2, setStreamers2] = useState<IStreamer[]>([]);

  const getClassNameForRank = (rank: number) => {
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

  useEffect(() => {

    const fetchStreamers = async () => {
      const response = await fetch(
        "https://lucky7agency.com.tr/json/show.json"
      );
      const data = await response.json();
      setStreamers(data.streamers);
    };

    const fetchGamingStreamers = async () => {
      const response = await fetch(
        "https://lucky7agency.com.tr/json/gaming.json"
      );
      const data = await response.json();
      setStreamers2(data.streamers);
    };

    fetchStreamers();
    fetchGamingStreamers();
  }, []);

  const sortedStreamers = [...streamers].sort((a, b) => a.rank - b.rank);
  const sortedStreamers2 = [...streamers2].sort((a, b) => a.rank - b.rank);

  const finalOrderStreamers = [
    sortedStreamers[1],
    sortedStreamers[0],
    sortedStreamers[2],
  ];

  const finalOrderStreamers2 = [
    sortedStreamers2[1],
    sortedStreamers2[0],
    sortedStreamers2[2],
  ];

  return (
    <section className="top-streamers" id="top-streamers">
      <Container>
        <div className="title">
          <span>Lucky 7 Agency</span>
          <h2>ŞUBAT TOP 3</h2>
        </div>
      </Container>
      <div className="slider">
        <div className="top-streamers-wrapper">
          <Container>
            <div className="title">
              <span>Lucky 7 Agency</span>
              <h2>Gaming</h2>
            </div>
          </Container>
          <div className="slide-track">
            {finalOrderStreamers2.map((streamer, index) => {
              if (!streamer) return null;
              return (
                <div
                  key={index}
                  className={`slide ${getClassNameForRank(streamer.rank)}`}
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.00), #140E3C), url(${streamer.backgroundImage})`,
                  }}
                >
                  <div className="trophy">
                    {streamer.rank === 1 && (
                      <i className="ri-trophy-fill">
                        <span>1</span>
                      </i>
                    )}
                    {streamer.rank === 2 && (
                      <i className="ri-trophy-line">
                        <span>2</span>
                      </i>
                    )}
                    {streamer.rank === 3 && (
                      <i className="ri-trophy-line">
                        <span>3</span>
                      </i>
                    )}
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
              );
            })}
          </div>
        </div>
        <div className="top-streamers-wrapper">
          <Container>
            <div className="title">
              <span>Lucky 7 Agency</span>
              <h2>Show Sohbet</h2>
            </div>
          </Container>
          <div className="slide-track slide-track-second">
            {finalOrderStreamers.map((streamer, index) => {
              if (!streamer) return null;
              return (
                <div
                  key={index}
                  className={`slide ${getClassNameForRank(streamer.rank)}`}
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.00), #140E3C), url(${streamer.backgroundImage})`,
                  }}
                >
                  <div className="trophy">
                    {streamer.rank === 1 && (
                      <i className="ri-trophy-fill">
                        <span>1</span>
                      </i>
                    )}
                    {streamer.rank === 2 && (
                      <i className="ri-trophy-line">
                        <span>2</span>
                      </i>
                    )}
                    {streamer.rank === 3 && (
                      <i className="ri-trophy-line">
                        <span>3</span>
                      </i>
                    )}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TopStreamers;
