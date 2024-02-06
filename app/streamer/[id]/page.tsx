"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { streamers } from "@/layout/components/streamers/Streamers";
import Container from "@/layout/components/container/Container";
import Head from "next/head";

export default function Streamer() {
  const pathname = usePathname();
  const streamer = streamers.find((streamer) => {
    return streamer.path.includes(pathname);
  });

  console.log(streamer);

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
      <Container>Streamer detail for</Container>
    </>
  );
}
