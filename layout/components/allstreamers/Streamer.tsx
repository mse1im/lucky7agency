import React from "react";
import { useRouter } from "next/navigation";
import "./Streamer.scss";
import { streamers } from "../components/streamers/Streamers";
const AllStreamers: React.FC = () => {
  const router = useRouter();

  const handleSlideClick = (path: any) => {
    router.push( `${path}`);
  };
  return (
    <div className="streamers-list">
      {streamers.map((streamer, index) => (
        <div
          key={index}
          className="streamer"
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
                    <a href={link} target="_blank" rel="noopener noreferrer">
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
  );
};

export default AllStreamers;
