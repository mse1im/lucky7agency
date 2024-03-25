"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./Streamer.scss";

interface IStreamer {
  path: any;
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

const AllStreamers: React.FC = () => {
  const router = useRouter();
  const [streamers, setStreamers] = useState<IStreamer[]>([]);

  useEffect(() => {
    const fetchStreamers = async () => {
      const response = await fetch(
        "https://lucky7agency.com.tr/json/streamers.json"
      );
      const data = await response.json();
      setStreamers(data.streamers);
    };
  
    fetchStreamers();
  }, []);

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
