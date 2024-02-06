import Container from "../container/Container";
import "./AboutUs.scss";

const AboutUs: React.FC<IAboutUsProps> = () => {
  return (
    <section className="aboutus" id="aboutus">
      <Container>
        <div className="aboutus-wrapper">
          <div className="badge">
            Ödüllü tiktok ajansı
          </div>
          <h2>Lucky 7 Agency</h2>
          <span>Ajansımızı Yakından Tanıyın!</span>
          <p>
            Oyuncu ve menajer Temmuz Karikutal tarafından kurulan ve bugüne
            kadar televizyon ve sinema sektöründe oyuncu menajeri olarak hizmet
            veren, birçok başarılı projeye oyuncu gönderen Temmuz Ajans, 2023
            Mart ayından itibaren artık TikTok LIVE Resmi Ajans partneri olarak,
            Tiktok yayıncılarına da hizmet vermektedir.
          </p>
        </div>
        <div className="aboutus-box-wrapper">
          <div className="box">
            <h3>Vizyonumuz</h3>
            <span>
              lorem ipsum
            </span>
          </div>
          <div className="box">
            <h3>Misyonumuz</h3>
            <span>
              lorem ipsum
            </span>
          </div>
          <div className="box">
            <h3>Görüşümüz</h3>
            <span>
              lorem ipsum
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutUs;
