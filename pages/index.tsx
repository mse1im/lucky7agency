import React, { Suspense } from "react";
import { menuItems } from "@/layout/json/menu";
import Head from "next/head";
import Header from "@/layout/components/header/Header";
import Container from "@/layout/components/container/Container";
import Slider from "@/layout/components/slider/Slider";
import TopStreamers from "@/layout/components/topstreamers/TopStreamers";
import Form from "@/layout/components/form/Form";
import Sponsors from "@/layout/components/sponsors/Sponsors";
import AboutUs from "@/layout/components/aboutus/AboutUs";
import Services from "@/layout/components/services/Services";
import Benefits from "@/layout/components/benefits/Benefits";
import Footer from "@/layout/components/footer/Footer";
import BackToTop from "@/layout/components/backtotop/BackToTop";
import Faq from "@/layout/components/faq/FAQ";

const Streamers = React.lazy(
  () => import("@/layout/components/streamers/Streamers")
);

const Homepage = () => {
  return (
    <Suspense
    fallback={
      <>
        <div className="spinner">
          <i className="ri-loader-fill" />
        </div>
      </>
    }
  >
      <Head>
        <title>
          Lucky 7 Agency - Lucky 7 Agency - TikTok Resmi Partner Ajansı
        </title>
        <meta
          name="description"
          content="Lucky7 Agency, TikTok yayıncılarına ve canlı yayıncılara özel danışmanlık, 24/7 destek ve içerik stratejileri sunarak markalarınızın sosyal medyada büyümesine katkıda bulunur. Ücretsiz danışmanlık hizmetleriyle, TikTokta keşfedilmenizi ve kitle geliştirmenizi sağlar."
        />
        <meta
          name="keywords"
          content="TikTok Ajansı, TikTok Yayıncı Destek, TikTok Canlı Yayın Danışmanlığı, Sosyal Medya Ajansı, TikTok Kitle Geliştirme, TikTok İçerik Stratejisi, TikTok Keşfet Desteği, 24/7 TikTok Destek, Ücretsiz TikTok Danışmanlık, TikTok Algoritma İpuçları"
        />
      </Head>
      <Header menuItems={menuItems} />
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
    </Suspense>
  );
};
export default Homepage;
