import React from "react";
import Container from "@/layout/components/container/Container";
import Header from "@/layout/components/header/Header";
import { menuItems } from "@/layout/json/menu";
import Streamer from "@/layout/pages/streamer/streamer";

const Footer = React.lazy(() => import("@/layout/components/footer/Footer"));

export default function Streamers() {

  return (
    <>
      <Header menuItems={menuItems} />
      <Container>
        <Streamer />
      </Container>
      <Footer />
    </>
  );
}
