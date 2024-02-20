import React from "react";
import { menuItems } from "@/layout/json/menu";
import { Metadata } from "next";
import { streamers } from "@/layout/json/streamers";

const AllStreamers = React.lazy(() => import('@/layout/components/allstreamers/Streamer'));
const Header = React.lazy(() => import("@/layout/components/header/Header"));
const streamerNames = streamers.map(streamer => streamer.name).join(', ');
const Container = React.lazy(() => import("@/layout/components/container/Container"));

export const metadata: Metadata = {
  title: 'Lucky 7 Agency - Yayıncılar',
  keywords: `${streamerNames}`,
  description: `Lucky7 Agency Yayıncıları ${streamerNames}`,
}

export default function Streamers() {
  return (
    <>
      <Header menuItems={menuItems} />
      <Container><AllStreamers /></Container>
    </>
  );
}
