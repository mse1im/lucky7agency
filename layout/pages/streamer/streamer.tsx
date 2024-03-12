"use client";
import { usePathname } from "next/navigation";
import React from "react";
import "./page.scss";
import { mainStreamers } from "@/layout/json/mainstreamers";
import Head from "next/head";
import Link from "next/link";

export default function Streamer() {
  const pathname = usePathname() || '';
  const streamer = mainStreamers.find((streamer) => streamer.path.includes(pathname));
  const streamerNames = mainStreamers.map((streamer) => streamer.name).join(", ");

  return (
    <>
      <Head>
        <title>{`${streamer?.name} - Lucky 7 Agency`}</title>
        <meta name="description" content={streamer?.detail} />
        <meta name="keywords" content={streamerNames} />
      </Head>
      {streamer ? (
        <div className="streamer">
          <div className="goback">
            <Link href="/streamers">Tüm yayıncıları listele</Link>
          </div>
          <div className="streamer-wrapper">
            <div className="img-wrapper">
              <div
                className="img"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.00), #140E3C), url(${streamer.backgroundImage})`,
                }}
              ></div>
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
            </div>
            <div className="streamer-detail">
              <div className="info">
                <h1>{streamer.name}</h1>
                <h2>{streamer.title}</h2>
                <p>{streamer.detail}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Streamer bulunamadı.</p>
      )}
    </>
  );
}
