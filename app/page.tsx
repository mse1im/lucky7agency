import Container from "@/layout/components/container/Container";
import Sponsors from "@/layout/components/sponsors/Sponsors";
import Slider from "@/layout/components/slider/Slider";
import Streamers from "@/layout/components/streamers/Streamers";
import Form from "@/layout/components/form/Form";
import AboutUs from "@/layout/components/aboutus/AboutUs";
import Services from "@/layout/components/services/Services";
import Faq from "@/layout/components/faq/FAQ";
import Benefits from "@/layout/components/benefits/Benefits";
import Head from 'next/head';
import Header from "@/layout/components/header/Header";
import TopStreamers from "@/layout/components/topstreamers/TopStreamers";
import OtherStreamers from "@/layout/components/otherstreamers/OtherStreamers";

const menuItems = [
  { name: "anasayfa", href: "/", displayName: "Anasayfa" },
  { name: "services", href: "#services", displayName: "Hizmetlerimiz" },
  { name: "streamers", href: "#streamers", displayName: "Ekibimiz" },
  { name: "aboutus", href: "#aboutus", displayName: "Hakkımızda" },
  { name: "callus", href: "#callus", displayName: "İletişim" },
];

const Homepage = () => {
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
      <section className="slider">
        <Container>
          <Slider />
        </Container>
      </section>
      <Sponsors />
      <Streamers />
      <Form />
      <TopStreamers />
      <OtherStreamers />
      <AboutUs />
      <Services />
      <Benefits />
      <Faq />
    </>
  );
};
export default Homepage;
