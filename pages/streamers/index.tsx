import dynamic from "next/dynamic";
import { menuItems } from "@/layout/json/menu";
import { streamers } from "@/layout/json/streamers";
import Head from "next/head";

const AllStreamers = dynamic(
  () => import("@/layout/components/allstreamers/Streamer")
);
const Header = dynamic(() => import("@/layout/components/header/Header"));
const Container = dynamic(
  () => import("@/layout/components/container/Container")
);
const Footer = dynamic(() => import("@/layout/components/footer/Footer"));

export default function Streamers() {
  const streamerNames = streamers.map((streamer) => streamer.name).join(", ");

  return (
    <>
      <Head>
        <title>Lucky 7 Agency - Yayıncılar</title>
        <meta
          name="description"
          content={`Lucky7 Agency Yayıncıları ${streamerNames}`}
        />
        <meta name="keywords" content={`${streamerNames} TikTok Ajansı, TikTok Yayıncı Destek, TikTok Canlı Yayın Danışmanlığı, Sosyal Medya Ajansı, TikTok Kitle Geliştirme, TikTok İçerik Stratejisi, TikTok Keşfet Desteği, 24/7 TikTok Destek, Ücretsiz TikTok Danışmanlık, TikTok Algoritma İpuçları`} />
      </Head>
      <Header menuItems={menuItems} />
      <Container>
        <AllStreamers />
      </Container>
      <Footer />
    </>
  );
}
