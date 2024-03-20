import React from "react";
import type { Metadata } from "next";
import { mainMenuItems } from "@/layout/json/menu";

const Header = React.lazy(() => import("@/layout/components/header/Header"));
const OtherStreamers = React.lazy(
  () => import("@/layout/components/otherstreamers/OtherStreamers")
);
const TopStreamers = React.lazy(
  () => import("@/layout/components/topstreamers/TopStreamers")
);
const Benefits = React.lazy(
  () => import("@/layout/components/benefits/Benefits")
);
const Faq = React.lazy(() => import("@/layout/components/faq/FAQ"));
const AboutUs = React.lazy(() => import("@/layout/components/aboutus/AboutUs"));
const Services = React.lazy(
  () => import("@/layout/components/services/Services")
);
const Form = React.lazy(() => import("@/layout/components/form/Form"));
const Streamers = React.lazy(
  () => import("@/layout/components/streamers/Streamers")
);
const Slider = React.lazy(() => import("@/layout/components/slider/Slider"));
const Sponsors = React.lazy(
  () => import("@/layout/components/sponsors/Sponsors")
);
const Container = React.lazy(
  () => import("@/layout/components/container/Container")
);

const Footer = React.lazy(() => import("@/layout/components/footer/Footer"));
const BackToTop = React.lazy(
  () => import("@/layout/components/backtotop/BackToTop")
);

export const metadata: Metadata = {
  title: "Lucky 7 Agency - Anasayfa",
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png'],
  },
  keywords:
    "TikTok Ajansı, TikTok Yayıncı Destek, TikTok Canlı Yayın Danışmanlığı, Sosyal Medya Ajansı, TikTok Kitle Geliştirme, TikTok İçerik Stratejisi, TikTok Keşfet Desteği, 24/7 TikTok Destek, Ücretsiz TikTok Danışmanlık, TikTok Algoritma İpuçları",
  description:
    "Lucky7 Agency, TikTok yayıncılarına ve canlı yayıncılara özel danışmanlık, 24/7 destek ve içerik stratejileri sunarak markalarınızın sosyal medyada büyümesine katkıda bulunur. Ücretsiz danışmanlık hizmetleriyle, TikTokta keşfedilmenizi ve kitle geliştirmenizi sağlar.",
};

const Homepage = () => {
  return (
    <>
      <Header menuItems={mainMenuItems} />
      <section className="slider">
        <Container>
          <Slider />
        </Container>
      </section>
      <Streamers />
      <TopStreamers />
      <Form />
      <Sponsors />
      {/* <OtherStreamers /> */}
      <AboutUs />
      <Services />
      <Benefits />
      <Faq />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Homepage;
