import dynamic from "next/dynamic";
import { menuItems } from "@/layout/json/menu";
import React from "react";
import Head from "next/head";

const Header = dynamic(() => import("@/layout/components/header/Header"));
const Footer = dynamic(() => import("@/layout/components/footer/Footer"));

const Benefits = React.lazy(
  () => import("@/layout/components/benefits/Benefits")
);
const Faq = React.lazy(() => import("@/layout/components/faq/FAQ"));
const Services = React.lazy(
  () => import("@/layout/components/services/Services")
);

export default function Page() {
  return (
    <>
      <Head>
        <title>Lucky 7 Agency - Hizmetlerimiz</title>
        <meta name="description" content="TikTok Keşfet Desteği hizmetinin içerisinde, yayıncılarımıza keşfette daha büyük kitlelere ulaşabilmeleri için püf noktalar ve bilgiler iletiyoruz. Bu bilgileri öğrenip, TikTok algoritmasının kurallarına uyarak içerik ürettiklerinde keşfetten çok yüksek etkileşimlere erişebiliyorlar." />
        <meta name="keywords" content="TikTok Ajansı, TikTok Yayıncı Destek, TikTok Canlı Yayın Danışmanlığı, Sosyal Medya Ajansı, TikTok Kitle Geliştirme, TikTok İçerik Stratejisi, TikTok Keşfet Desteği, 24/7 TikTok Destek, Ücretsiz TikTok Danışmanlık, TikTok Algoritma İpuçları" />
      </Head>
      <Header menuItems={menuItems} />
      <Services />
      <Benefits />
      <Faq />
      <Footer />
    </>
  );
}
