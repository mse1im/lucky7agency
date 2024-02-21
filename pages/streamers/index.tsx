import React from "react";
import { menuItems } from "@/layout/json/menu";
import { streamers } from "@/layout/json/streamers";
import Head from "next/head";

const AllStreamers = React.lazy(
  () => import("@/layout/components/allstreamers/Streamer")
);
const Header = React.lazy(() => import("@/layout/components/header/Header"));
const streamerNames = streamers.map((streamer) => streamer.name).join(", ");
const Container = React.lazy(
  () => import("@/layout/components/container/Container")
);
const Footer = React.lazy(() => import("@/layout/components/footer/Footer"));

export default function Streamers() {
  return (
    <>
      <Head>
        <title>Lucky 7 Agency - Yayıncılar</title>
        <meta name="description" content={`Lucky7 Agency Yayıncıları ${streamerNames}`} />
        <meta name="keywords" content={streamerNames} />
      </Head>
      <Header menuItems={menuItems} />
      <Container>
        <AllStreamers />
      </Container>
      <Footer />
    </>
  );
}
