"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { streamers } from "@/layout/components/streamers/Streamers";
import Container from "@/layout/components/container/Container";
import Head from "next/head";
import Header from "@/layout/components/header/Header";
import "./page.scss";

const menuItems = [
  { name: "anasayfa", href: "/", displayName: "Anasayfa" },
  { name: "services", href: "/", displayName: "Hizmetlerimiz" },
  { name: "streamers", href: "/streamers", displayName: "Ekibimiz" },
  { name: "aboutus", href: "/", displayName: "Hakkımızda" },
  { name: "callus", href: "#callus", displayName: "İletişim" },
];

export default function Streamer() {
  const pathname = usePathname();
  const streamer = streamers.find((streamer) => {
    return streamer.path.includes(pathname);
  });

  console.log(streamer);

  return (
    <>
      <Head>
        <title>
          {streamer
            ? `${streamer.name} - Lucky 7 Agency`
            : "Streamer Bulunamadı"}
        </title>
        <meta
          name="description"
          content={`${
            streamer ? streamer.name : "Streamer"
          } hakkında detaylar.`}
        />
      </Head>
      <Header menuItems={menuItems} />
      <Container>
        {streamer ? (
          <div className="streamer">
            <div className="goback">
              <a href="/streamers">Tüm yayıncıları listele</a>
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
      </Container>
    </>
  );
}
