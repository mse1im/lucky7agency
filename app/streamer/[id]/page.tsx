import React from "react";
import Container from "@/layout/components/container/Container";
import Header from "@/layout/components/header/Header";
import { menuItems } from "@/layout/json/menu";
import { Metadata } from "next";
import Streamer from "@/layout/pages/streamer/streamer";
// const Streamer = React.lazy(() => import("@/layout/pages/streamer/streamer"));

export const metadata: Metadata = {
  title: `${Streamer.name} - Lucky 7 Agency`,
}

export default function Streamers() {
  return (
    <>
      <Header menuItems={menuItems} />
      <Container>
        <Streamer />
      </Container>
    </>
  );
}
