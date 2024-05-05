import React from "react";
import { useQuery } from '@tanstack/react-query';
import { useRouter } from "next/navigation";
import "./Streamer.scss";

interface ISocialMedia {
  link: string;
  iconClass: string;
}

interface IStreamer {
  path: string;
  name: string;
  title: string;
  backgroundImage: string;
  socialMedia: Record<string, ISocialMedia>;
}

interface StreamerResponse {
  streamers: IStreamer[];
}

async function fetchStreamers(): Promise<StreamerResponse> {
  const response = await fetch("https://lucky7agency.com.tr/json/streamers.json");
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json() as Promise<StreamerResponse>;
}

const AllStreamers: React.FC = () => {
  const router = useRouter();
  const { data, error, isLoading } = useQuery({
    queryKey: ['streamers'],
    queryFn: fetchStreamers
  });

  const handleSlideClick = (path: string) => {
    router.push(path);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div className="streamers-list">
      {data?.streamers.map((streamer, index) => (
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
              {Object.entries(streamer.socialMedia).map(([platform, { link, iconClass }]) => (
                <li key={platform}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <i className={iconClass}></i>
                  </a>
                </li>
              ))}
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
