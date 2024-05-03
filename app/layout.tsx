import React from 'react';
import { LanguageProvider } from '../context/Language';
import { Titillium_Web } from 'next/font/google';
import './styles/global.scss';
import 'remixicon/fonts/remixicon.css';

interface Metadata {
  title: string;
  icons: {
    icon: string[];
    apple: string[];
    shortcut: string[];
  };
  keywords: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Lucky 7 Agency",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  keywords:
    "TikTok Ajansı, TikTok Yayıncı Destek, TikTok Canlı Yayın Danışmanlığı, Sosyal Medya Ajansı, TikTok Kitle Geliştirme, TikTok İçerik Stratejisi, TikTok Keşfet Desteği, 24/7 TikTok Destek, Ücretsiz TikTok Danışmanlık, TikTok Algoritma İpuçları",
  description:
    "Lucky7 Agency, TikTok yayıncılarına ve canlı yayıncılara özel danışmanlık, 24/7 destek ve içerik stratejileri sunarak markalarınızın sosyal medyada büyümesine katkıda bulunur. Ücretsiz danışmanlık hizmetleriyle, TikTokta keşfedilmenizi ve kitle geliştirmenizi sağlar.",
};

const titillum = Titillium_Web({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-golos",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <LanguageProvider>
      <html lang="tr">
        <body data-theme="dark" className={titillum.className}>
          {children}
        </body>
      </html>
    </LanguageProvider>
  );
}