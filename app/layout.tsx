import "./styles/global.scss";
import "remixicon/fonts/remixicon.css";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucky 7 Agency",
  keywords:
    "TikTok Ajansı, TikTok Yayıncı Destek, TikTok Canlı Yayın Danışmanlığı, Sosyal Medya Ajansı, TikTok Kitle Geliştirme, TikTok İçerik Stratejisi, TikTok Keşfet Desteği, 24/7 TikTok Destek, Ücretsiz TikTok Danışmanlık, TikTok Algoritma İpuçları",
  description:
    "Lucky7 Agency, TikTok yayıncılarına ve canlı yayıncılara özel danışmanlık, 24/7 destek ve içerik stratejileri sunarak markalarınızın sosyal medyada büyümesine katkıda bulunur. Ücretsiz danışmanlık hizmetleriyle, TikTokta keşfedilmenizi ve kitle geliştirmenizi sağlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body data-theme="dark">
        {children}
      </body>
    </html>
  );
}
