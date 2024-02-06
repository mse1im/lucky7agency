"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { streamers } from "@/layout/components/streamers/Streamers";
import Container from "@/layout/components/container/Container";
import Head from "next/head";
import Header from "@/layout/components/header/Header";
import AllStreamers from "@/layout/components/allstreamers/Streamer"

const menuItems = [
  { name: "anasayfa", href: "/", displayName: "Anasayfa" },
  { name: "services", href: "/", displayName: "Hizmetlerimiz" },
  { name: "streamers", href: "/streamers", displayName: "Ekibimiz" },
  { name: "aboutus", href: "/", displayName: "Hakkımızda" },
  { name: "callus", href: "#callus", displayName: "İletişim" },
];

export default function Streamers() {
  const pathname = usePathname();
  const streamer = streamers.find((streamer) => {
    return streamer.path.includes(pathname);
  });

  return (
    <>
      <Head>
        <title>Lucky 7 Agency - Anasayfa</title>
        <meta
          name="description"
          content="Lucky7 Agency, TikTok yayıncılarına ve canlı yayıncılara özel danışmanlık, 24/7 destek ve içerik stratejileri sunarak markalarınızın sosyal medyada büyümesine katkıda bulunur. Ücretsiz danışmanlık hizmetleriyle, TikTok'ta keşfedilmenizi ve kitle geliştirmenizi sağlar."
        />
        <meta
          name="keywords"
          content="TikTok Ajansı, TikTok Yayıncı Destek, TikTok Canlı Yayın Danışmanlığı, Sosyal Medya Ajansı, TikTok Kitle Geliştirme, TikTok İçerik Stratejisi, TikTok Keşfet Desteği, 24/7 TikTok Destek, Ücretsiz TikTok Danışmanlık, TikTok Algoritma İpuçları"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header menuItems={menuItems} />
      <Container><AllStreamers /></Container>
    </>
  );
}
