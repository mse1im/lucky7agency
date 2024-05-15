import dynamic from "next/dynamic";
import { menuItems } from "@/layout/json/menu";
import React from "react";
import Head from "next/head";

const Header = dynamic(() => import("@/layout/components/header/Header"));
const Footer = dynamic(() => import("@/layout/components/footer/Footer"));
const AboutUs = React.lazy(() => import("@/layout/components/aboutus/AboutUs"));
const Benefits = React.lazy(
  () => import("@/layout/components/benefits/Benefits")
);
const Faq = React.lazy(() => import("@/layout/components/faq/FAQ"));


export default function Page() {
  return (
    <>
      <Head>
        <title>Lucky 7 Agency - Hakkımızda</title>
        <meta
          name="description"
          content="Lucky7 Agency, TikTok'ta etkileyici içerik üreticilerini destekleyen bir resmi TikTok partner ajansıdır. Amacımız içerik üreticilerinin potansiyellerini en üst düzeye çıkarmalarına yardımcı olmak ve hedef kitlelerine daha etkili bir şekilde ulaşmalarını sağlamaktır.          "
        />
        <meta name="keywords" content="TikTok Ajansı, TikTok Yayıncı Destek, TikTok Canlı Yayın Danışmanlığı, Sosyal Medya Ajansı, TikTok Kitle Geliştirme, TikTok İçerik Stratejisi, TikTok Keşfet Desteği, 24/7 TikTok Destek, Ücretsiz TikTok Danışmanlık, TikTok Algoritma İpuçları"/>
      </Head>
      <Header menuItems={menuItems} />
      <AboutUs />
      <Benefits />
      <Faq />
      <Footer />
    </>
  );
}
