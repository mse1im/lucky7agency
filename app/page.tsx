import Header from "@/layout/components/header/Header";
import Container from "@/layout/components/container/Container";
import "remixicon/fonts/remixicon.css";
import Sponsors from "@/layout/components/sponsors/Sponsors";
import Slider from "@/layout/components/slider/Slider";
import Streamers from "@/layout/components/streamers/Streamers";
import Form from "@/layout/components/form/Form";
import AboutUs from "@/layout/components/aboutus/AboutUs";
import Services from "@/layout/components/services/Services";
import Faq from "@/layout/components/faq/FAQ";
import Footer from "@/layout/components/footer/Footer";
import BecomeAStreamer from "@/layout/components/becomeastreamer/BecomeAStreamer";
import BackToTop from "@/layout/components/backtotop/BackToTop";

const Homepage = () => {
  return (
    <body data-theme="dark">
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
      <Faq />
      <Footer />
      <BackToTop />
    </body>
  );
};
export default Homepage;
