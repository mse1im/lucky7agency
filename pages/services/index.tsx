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
        <meta name="description" content="Hizmetlerimiz" />
        <meta name="keywords" content="Hizmetlerimiz" />
      </Head>
      <Header menuItems={menuItems} />
      <Services />
      <Benefits />
      <Faq />
      <Footer />
    </>
  );
}
