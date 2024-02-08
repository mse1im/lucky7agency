import Container from "../container/Container";
import darkLogo from "../../../public/footer.png";
import comment from "../../../public/comment.png";
import Image from "next/image";
import "./Footer.scss";

const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer id="callus">
      <div className="subscribe">
        <Container>
          <h3>Yayıncılarımız Arasına Katılmak İster Misiniz?</h3>
          <a href="#form">Başvuru Gönder</a>
        </Container>
      </div>
      <Container>
        <div className="lucky7agency">
          <Image src={darkLogo} alt="Lucky 7 Agency" width={387} height={54} priority />
          <p>
            Oyuncu ve menajer Temmuz Karikutal tarafından kurulan ve bugüne
            kadar televizyon ve sinema sektöründe oyuncu menajeri olarak hizmet
            veren, birçok başarılı projeye oyuncu gönderen Lucky7 Agency
          </p>
          <ul className="social-media">
            <li>
              <a href="" target="_blank">
                <i className="ri-tiktok-fill"></i>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="ri-twitter-fill"></i>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="ri-twitch-line"></i>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="ri-youtube-line"></i>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <i className="ri-facebook-line"></i>
              </a>
            </li>
          </ul>
        </div>
        <ul className="content">
          <h4>Hizmetlerimiz</h4>
          <li>
            <a href="#">
              <i className="ri-arrow-right-line"></i> İçerik
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-arrow-right-line"></i> İçerik
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-arrow-right-line"></i> İçerik
            </a>
          </li>
        </ul>
        <ul className="content">
          <h4>Hizmetlerimiz</h4>
          <li>
            <a href="#">
              <i className="ri-arrow-right-line"></i> İçerik
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-arrow-right-line"></i> İçerik
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-arrow-right-line"></i> İçerik
            </a>
          </li>
        </ul>
        <div className="info-box">
          <h5>İletişim Bilgilerimiz</h5>
          <ul className="contact">
            <li>
              <a href="mailto:info@lucky7agency.com.tr">
                <i className="ri-mail-send-line"></i> info@lucky7agency.com.tr
              </a>
            </li>
            <li>
              <a href="tel:+850 440 44 55">
                <i className="ri-phone-fill"></i> 850 440 44 55
              </a>
            </li>
            <li><i className="ri-map-pin-line"></i> Kaptanpaşa Mah. Zürkkan Sokak İSTANBUL / TÜRKİYE</li>
          </ul>
        </div>
        <Image src={comment} alt="comment" width={74} height={56} className="comment-img" />
      </Container>
    </footer>
  );
};
export default Footer;
