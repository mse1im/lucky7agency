import type { Metadata } from "next";
import "./styles/global.scss";
import { ThemeProvider } from "@/layout/context/Theme";

export const metadata: Metadata = {
  title: "Lucky 7 Agency - TikTok LIVE Ajans Partneri",
  keywords:
    "TikTok Ajansı, TikTok Yayıncı Destek, TikTok Canlı Yayın Danışmanlığı, Sosyal Medya Ajansı, TikTok Kitle Geliştirme, TikTok İçerik Stratejisi, TikTok Keşfet Desteği, 24/7 TikTok Destek, Ücretsiz TikTok Danışmanlık, TikTok Algoritma İpuçları",
  description:
    "Lucky7 Agency, TikTok yayıncılarına ve canlı yayıncılara özel danışmanlık, 24/7 destek ve içerik stratejileri sunarak markalarınızın sosyal medyada büyümesine katkıda bulunur. Ücretsiz danışmanlık hizmetleriyle, TikTok'ta keşfedilmenizi ve kitle geliştirmenizi sağlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">{children}</html>
    </ThemeProvider>
  );
}
