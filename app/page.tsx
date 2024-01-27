"use client";
import Header from "@/layout/components/header/Header";
import Container from "@/layout/components/container/Container";
import { ThemeContext } from "@/layout/context/Theme";
import { useContext } from "react";
import "remixicon/fonts/remixicon.css";
import Sponsors from "@/layout/components/sponsors/Sponsors";
import Slider from "@/layout/components/slider/Slider";
import Streamers from "@/layout/components/streamers/Streamers";
import Form from "@/layout/components/form/Form";
import AboutUs from "@/layout/components/aboutus/AboutUs";
import Services from "@/layout/components/services/Services";
import Faq from "@/layout/components/faq/FAQ";
import Footer from "@/layout/components/footer/Footer";
import Benefits from "@/layout/components/benefits/Benefits";
import BecomeAStreamer from "@/layout/components/becomeastreamer/BecomeAStreamer";
import BackToTop from "@/layout/components/backtotop/BackToTop";

const Homepage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <body data-theme={`${theme}`}>
      <Header />
      <section className="slider">
        <Container>
          <Slider />
        </Container>
      </section>
      <Sponsors />
      <Streamers />
      <Form />
      <AboutUs />
      <BecomeAStreamer />
      <Services />
      <Benefits />
      <Faq />
      <Footer />
      <BackToTop />
    </body>
  );
};
export default Homepage;
