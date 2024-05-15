import dynamic from "next/dynamic";
import { menuItems } from "@/layout/json/menu";
import Head from "next/head";
import Form from "@/layout/components/form/Form";

const Header = dynamic(() => import("@/layout/components/header/Header"));
const Container = dynamic(
  () => import("@/layout/components/container/Container")
);
const Footer = dynamic(() => import("@/layout/components/footer/Footer"));

export default function Page() {
  return (
    <>
      <Head>
        <title>Lucky 7 Agency - İletişim</title>
        <meta name="description" content="WhatsApp Destek Hattı tüm yayıncılarımız içi hizmet vermektedir. Yayıncılarımız yaşadıkları problemlerle ilgili sonuçları ve TikTtok ile ilgili tüm gelişmeleri anlık olarak WhatsApp üzerinden TikTok temsilcilerimizden öğrenebiliyorlar." />
        <meta name="keywords" content="TikTok Ajansı, TikTok Yayıncı Destek, TikTok Canlı Yayın Danışmanlığı, Sosyal Medya Ajansı, TikTok Kitle Geliştirme, TikTok İçerik Stratejisi, TikTok Keşfet Desteği, 24/7 TikTok Destek, Ücretsiz TikTok Danışmanlık, TikTok Algoritma İpuçları" />
      </Head>
      <Header menuItems={menuItems} />
      <Form />
      <Footer />
    </>
  );
}
