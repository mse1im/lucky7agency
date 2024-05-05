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
          content="Hakkımızda"
        />
        <meta name="keywords" content="Hakkımızda"/>
      </Head>
      <Header menuItems={menuItems} />
      <AboutUs />
      <Benefits />
      <Faq />
      <Footer />
    </>
  );
}
