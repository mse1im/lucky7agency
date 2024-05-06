import React from "react";
import { useRouter } from "next/navigation";
import "./Streamer.scss";
import useSWR from "swr";

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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const AllStreamers: React.FC = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    "https://lucky7agency.com.tr/json/streamers.json",
    fetcher
  );

  if (error) return <div>Failed to load streamers.</div>;
  if (!data)
    return (
      <>
        <div className="spinner">
          <i className="ri-loader-fill" />
        </div>
      </>
    );

  const handleSlideClick = (path: any) => {
    router.push(`${path}`);
  };

  return (
    <div className="streamers-list">
      {data.streamers.map((streamer: IStreamer, index: number) => (
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
