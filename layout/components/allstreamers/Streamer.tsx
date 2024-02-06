import React from "react";
import { streamers } from "@/layout/components/streamers/Streamers";

const AllStreamers: React.FC = () => {
  return (
    <div className="streamers-list">
      {streamers.map((streamer, index) => (
        <div key={index} className="streamer">
          <h3>{streamer.name}</h3>
          <p>{streamer.title}</p>
          <div className="streamer-social-media">
            {Object.entries(streamer.socialMedia).map(([platform, { link, iconClass }]) => (
              <a key={platform} href={link} target="_blank" rel="noopener noreferrer">
                <i className={iconClass}></i>
              </a>
            ))}
          </div>
          <div className="streamer-image" style={{ backgroundImage: `url(${streamer.backgroundImage})` }}></div>
        </div>
      ))}
    </div>
  );
};

export default AllStreamers;
